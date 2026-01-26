"use client";

import { FE_ADM_URL } from "@/lib/config";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    // Redirect to FE-adm login; FE-adm handles post-login routing
    window.location.href = `${FE_ADM_URL}/login`;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  );
}