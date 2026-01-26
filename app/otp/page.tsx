"use client";

import { postJson } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function getCookie(name: string) {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : "";
}

export default function OTPPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);

  const inputsRef = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const params = useSearchParams();

  const registrationNumber = params.get("registrationNumber") || getCookie("pendingRegNumber") || "";

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);
    if (value && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const code = otp.join("");
    if (code.length < 6) {
      setError("OTP harus 6 digit");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await postJson("/api/verify-admin", { registrationNumber, otp: code });

      localStorage.setItem("token", data.token);
      document.cookie = `authStage=; path=/; max-age=0`;
      document.cookie = `pendingRegNumber=; path=/; max-age=0`;
      document.cookie = `authToken=${data.token}; path=/; max-age=86400`;
      document.cookie = `role=ADMIN; path=/; max-age=86400`;

      router.push("/admin/dashboard");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "OTP salah atau gagal.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!registrationNumber) {
      setError("Nomor registrasi tidak ditemukan.");
      return;
    }
    if (cooldown > 0) return;

    setResendLoading(true);
    setError("");
    setInfo("");
    try {
      await postJson("/api/resend-otp", { registrationNumber });
      setInfo("OTP telah dikirim ulang. Periksa email Anda.");
      setCooldown(30);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Gagal mengirim ulang OTP.";
      setError(message);
    } finally {
      setResendLoading(false);
    }
  };

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#108607] p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-[#108607]">Masukkan Kode OTP</h2>
        <p className="text-gray-600 mt-2 mb-8">Silakan masukkan 6 digit kode OTP yang dikirim ke nomor Anda.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {info && <p className="text-green-600 text-sm mb-4">{info}</p>}

        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="w-14 h-16 text-center text-2xl font-bold text-black border-2 rounded-xl outline-none border-gray-300 focus:border-[#108607] focus:ring-2 focus:ring-[#108607]/30 transition"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#108607] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Memverifikasi..." : "Verifikasi"}
        </button>

        <button
          onClick={handleResend}
          disabled={resendLoading || cooldown > 0}
          className="mt-4 text-sm text-[#108607] hover:underline disabled:opacity-50"
        >
          {resendLoading ? "Mengirim..." : cooldown > 0 ? `Kirim ulang dalam ${cooldown}s` : "Kirim ulang OTP"}
        </button>
      </div>
    </div>
  );
}
