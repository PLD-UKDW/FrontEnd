"use client";
import Image from "next/image";
import { useEffect, useId, useState } from "react";

type A11yState = {
    contrast: "default" | "high";
    fontScale: 1 | 1.125 | 1.25; 
    motion: "normal" | "reduce";
    links: "default" | "underline";
    dyslexia: boolean;
    colorblind: "none" | "rg" | "by" | "mono";
    ttsEnabled?: boolean;
    ttsRate?: number; // 0.5 - 2.0
    ttsPitch?: number; // 0.8 - 1.2
    ttsVoiceName?: string; // chosen voice name
};

const STORAGE_KEY = "a11y-settings";

function loadState(): A11yState {
    if (typeof window === "undefined") return {
        contrast: "default",
        fontScale: 1,
        motion: "normal",
        links: "default",
        dyslexia: false,
        colorblind: "none",
        ttsEnabled: false,
        ttsRate: 1,
        ttsPitch: 1,
        ttsVoiceName: "",
    };
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch {}
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return {
        contrast: "default",
        fontScale: 1,
        motion: prefersReduce ? "reduce" : "normal",
        links: "default",
        dyslexia: false,
        colorblind: "none",
        ttsEnabled: false,
        ttsRate: 1,
        ttsPitch: 1,
        ttsVoiceName: "",
    };
}

function applyState(s: A11yState) {
    const html = document.documentElement;
    html.setAttribute("data-a11y-contrast", s.contrast);
    html.setAttribute("data-a11y-fontscale", String(s.fontScale));
    html.setAttribute("data-a11y-motion", s.motion);
    html.setAttribute("data-a11y-links", s.links);
    html.setAttribute("data-a11y-dyslexia", s.dyslexia ? "on" : "off");
    html.setAttribute("data-a11y-colorblind", s.colorblind);
    html.setAttribute("data-a11y-tts", s.ttsEnabled ? "on" : "off");
}

export default function AccessibilityToolbar() {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState<A11yState>(loadState());
    const panelId = useId();
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [speaking, setSpeaking] = useState(false);
    const toolbarRole = "a11y-toolbar";

    useEffect(() => {
        applyState(state);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
    }, [state]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
        if (e.altKey && e.shiftKey && e.key.toLowerCase() === "a") {
            e.preventDefault();
            setOpen((o) => !o);
        }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    // Load available voices for Speech Synthesis
    useEffect(() => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
        const loadVoices = () => {
            const v = window.speechSynthesis.getVoices();
            setVoices(v);
            // Auto-pick Indonesian voice if available
            if (!state.ttsVoiceName && v.length > 0) {
                const idVoice = v.find((voice) => /id|indones/i.test(voice.lang));
                const defaultVoice = idVoice || v[0];
                setState((s) => ({ ...s, ttsVoiceName: defaultVoice.name }));
            }
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, [state.ttsVoiceName]);

    // Click-to-speak handler when TTS is enabled, and programmatic TTS via custom event
    useEffect(() => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
        const onClick = (e: MouseEvent) => {
            if (!state.ttsEnabled) return;
            const target = e.target as HTMLElement | null;
            if (!target) return;
            // Ignore clicks inside the toolbar
            const toolbarEl = document.querySelector(`.${toolbarRole}`) as HTMLElement | null;
            if (toolbarEl && (target === toolbarEl || toolbarEl.contains(target))) return;

            const text = extractReadableText(target);
            if (text) speak(text);
        };
        const onTtsSay = (evt: Event) => {
            if (!state.ttsEnabled) return;
            const ce = evt as CustomEvent<{ text?: string }>;
            const txt = (ce.detail?.text || "").trim();
            if (txt) speak(txt);
        };
        document.addEventListener("click", onClick);
        window.addEventListener("tts-say", onTtsSay as EventListener);
        return () => {
            document.removeEventListener("click", onClick);
            window.removeEventListener("tts-say", onTtsSay as EventListener);
        };
    }, [state.ttsEnabled, state.ttsRate, state.ttsPitch, state.ttsVoiceName, voices]);

    function extractReadableText(el: HTMLElement): string {
        // Prefer explicit TTS text on target or nearest ancestors
        let cur: HTMLElement | null = el;
        for (let i = 0; i < 6 && cur; i += 1) {
            // If an ancestor opts out of TTS, stop
            const ignore = cur.getAttribute("data-tts-ignore") || "";
            if (ignore === "true") return "";
            const tts = cur.getAttribute("data-tts-text") || "";
            if (tts.trim().length > 0) return tts.trim();
            cur = cur.parentElement as HTMLElement | null;
        }
        // Helper: check if element is interactive
        const interactiveTags = new Set([
            'BUTTON','A','INPUT','SELECT','TEXTAREA','OPTION','SUMMARY','LABEL'
        ]);
        const interactiveRoles = new Set([
            'button','link','menuitem','checkbox','radio','switch','tab'
        ]);
        const isInteractive = (node: HTMLElement | null): boolean => {
            if (!node) return false;
            if (interactiveTags.has(node.tagName)) return true;
            const role = (node.getAttribute('role') || '').toLowerCase();
            if (interactiveRoles.has(role)) return true;
            const tabindex = node.getAttribute('tabindex');
            if (tabindex !== null && !Number.isNaN(Number(tabindex))) return true;
            if (node.isContentEditable) return true;
            return false;
        };
        // Special-case native selects/options: only read selected option
        if (el.tagName === 'SELECT') {
            const sel = el as HTMLSelectElement;
            const opt = sel.selectedOptions && sel.selectedOptions.length > 0 ? sel.selectedOptions[0] : sel.options[sel.selectedIndex];
            const txt = (opt?.text || '').trim();
            if (txt.length > 0) return txt.slice(0, 2000);
        }
        if (el.tagName === 'OPTION') {
            const txt = (el.textContent || '').trim();
            if (txt.length > 0) return txt.slice(0, 2000);
        }
        // Allow reading textual elements (p, span, headings, list items, labels) even if not interactive,
        // but block generic containers like divs
        const textTags = new Set(['P','SPAN','LI','LABEL','H1','H2','H3','H4','H5','H6']);
        if (!isInteractive(el) && !textTags.has(el.tagName)) return "";
        // Otherwise prefer aria-label or alt
        const aria = el.getAttribute("aria-label") || "";
        const alt = (el as HTMLImageElement).alt || "";
        const candidate = (aria || alt || el.textContent || "").trim();
        // Limit length to avoid reading huge blocks accidentally
        const text = candidate.replace(/\s+/g, " ").trim();
        if (text.length < 2) return "";
        return text.slice(0, 2000);
    }

    function clamp(n: number, min: number, max: number) {
        if (Number.isNaN(n)) return min;
        return Math.min(max, Math.max(min, n));
    }

    function speak(text: string) {
        if (!("speechSynthesis" in window)) return;
        // Cancel any current utterance
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        const rate = clamp(Number(state.ttsRate ?? 1), 0.5, 2);
        const pitch = clamp(Number(state.ttsPitch ?? 1), 0.8, 1.2);
        utter.rate = rate;
        utter.pitch = pitch;
        const voice = voices.find(v => v.name === state.ttsVoiceName);
        if (voice) {
            utter.voice = voice;
            utter.lang = voice.lang;
        } else {
            // Hint language to improve pitch/rate consistency
            utter.lang = "id-ID";
        }
        utter.onstart = () => setSpeaking(true);
        utter.onend = () => setSpeaking(false);
        utter.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utter);
    }

    function stopSpeaking() {
        if (!("speechSynthesis" in window)) return;
        window.speechSynthesis.cancel();
        setSpeaking(false);
    }

        return (
                <div className={`fixed bottom-4 right-4 z-50 ${toolbarRole}`}>
                <style>{`
                    [data-a11y-tts="on"] p:hover,
                    [data-a11y-tts="on"] span:hover,
                    [data-a11y-tts="on"] a:hover,
                    [data-a11y-tts="on"] li:hover,
                    [data-a11y-tts="on"] label:hover,
                    [data-a11y-tts="on"] h1:hover,
                    [data-a11y-tts="on"] h2:hover,
                    [data-a11y-tts="on"] h3:hover,
                    [data-a11y-tts="on"] h4:hover,
                    [data-a11y-tts="on"] h5:hover,
                    [data-a11y-tts="on"] h6:hover,
                    [data-a11y-tts="on"] [data-tts-text]:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                `}</style>
        <button
            type="button"
            className="rounded-md bg-[#19c219] hover:bg-[#16ad16] text-white px-3 py-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0e7f0e] flex items-center gap-2"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
        >
            <Image src="/accessibility-icon.png" alt="Aksesibilitas" width={30} height={30} priority />
            <span><b>Aksesibilitas</b></span>
        </button>

        {open && (
            <div
            id={panelId}
            role="dialog"
            aria-label="Pengaturan aksesibilitas"
            className="mt-2 w-auto max-w-sm max-h-[60vh] overflow-y-auto rounded-md bg-white shadow-lg border p-3 text-sm"
            >
            <div className="mb-3">
                <label className="font-semibold">Kontras</label>
                <div className="mt-1 flex gap-2">
                <button
                    className={`px-2 py-1 border rounded ${state.contrast === "default" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, contrast: "default" }))}
                >Default</button>
                <button
                    className={`px-2 py-1 border rounded ${state.contrast === "high" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, contrast: "high" }))}
                >Tinggi</button>
                </div>
            </div>

            <div className="mb-3">
                <label className="font-semibold">Ukuran Teks</label>
                <div className="mt-1 flex gap-2">
                <button
                    className={`px-2 py-1 border rounded ${state.fontScale === 1 ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, fontScale: 1 }))}
                >100%</button>
                <button
                    className={`px-2 py-1 border rounded ${state.fontScale === 1.125 ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, fontScale: 1.125 }))}
                >112%</button>
                <button
                    className={`px-2 py-1 border rounded ${state.fontScale === 1.25 ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, fontScale: 1.25 }))}
                >125%</button>
                </div>
            </div>

            <div className="mb-3">
                <label className="font-semibold">Gerak</label>
                <div className="mt-1 flex gap-2">
                <button
                    className={`px-2 py-1 border rounded ${state.motion === "normal" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, motion: "normal" }))}
                >Normal</button>
                <button
                    className={`px-2 py-1 border rounded ${state.motion === "reduce" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, motion: "reduce" }))}
                >Kurangi</button>
                </div>
            </div>

            <div className="mb-3">
                <label className="font-semibold">Tautan</label>
                <div className="mt-1 flex gap-2">
                <button
                    className={`px-2 py-1 border rounded ${state.links === "default" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, links: "default" }))}
                >Default</button>
                <button
                    className={`px-2 py-1 border rounded ${state.links === "underline" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, links: "underline" }))}
                >Garis bawah</button>
                </div>
            </div>

            <div className="mb-2">
                <label className="inline-flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={state.dyslexia}
                    onChange={(e) => setState((s) => ({ ...s, dyslexia: e.target.checked }))}
                />
                Font ramah disleksia
                </label>
            </div>

            <div className="mb-3">
                <label className="font-semibold">Mode Buta Warna</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                <button
                    className={`px-2 py-1 border rounded ${state.colorblind === "none" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, colorblind: "none" }))}
                >Tidak ada</button>
                <button
                    className={`px-2 py-1 border rounded ${state.colorblind === "rg" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, colorblind: "rg" }))}
                >Merah-Hijau (Parsial)</button>
                <button
                    className={`px-2 py-1 border rounded ${state.colorblind === "by" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, colorblind: "by" }))}
                >Biru-Kuning (Parsial)</button>
                <button
                    className={`px-2 py-1 border rounded ${state.colorblind === "mono" ? "bg-gray-100" : ""}`}
                    onClick={() => setState((s) => ({ ...s, colorblind: "mono" }))}
                >Total (Monokromasi)</button>
                </div>
            </div>

            {/* Text-to-Speech */}
            <div className="mb-3 border-t pt-3">
                <div className="font-semibold flex items-center justify-between">
                    <span>Text to Speech (klik teks untuk dibaca)</span>
                    <button
                        type="button"
                        aria-pressed={!!state.ttsEnabled}
                        onClick={() => setState((s) => ({ ...s, ttsEnabled: !(s.ttsEnabled ?? false) }))}
                        className={`${state.ttsEnabled ? 'bg-green-600' : 'bg-red-600'} text-white font-bold px-3 py-1 rounded w-16 text-center`}
                    >
                        {state.ttsEnabled ? 'ON' : 'OFF'}
                    </button>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-xs text-gray-600">Kecepatan</label>
                        <input
                            type="range"
                            min={0.5}
                            max={2}
                            step={0.1}
                            value={state.ttsRate ?? 1}
                            onChange={(e) => setState((s) => ({ ...s, ttsRate: Number(e.target.value) }))}
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-600">Pitch</label>
                        <input
                            type="range"
                            min={0.8}
                            max={1.2}
                            step={0.05}
                            value={state.ttsPitch ?? 1}
                            onChange={(e) => setState((s) => ({ ...s, ttsPitch: Number(e.target.value) }))}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-xs text-gray-600">Suara</label>
                        <select
                            className="w-full border rounded px-2 py-1"
                            value={state.ttsVoiceName ?? ""}
                            onChange={(e) => setState((s) => ({ ...s, ttsVoiceName: e.target.value }))}
                        >
                            {voices.length === 0 ? (
                                <option value="">Default</option>
                            ) : (
                                voices.map((v) => (
                                    <option key={v.name} value={v.name}>
                                        {v.name} ({v.lang})
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                </div>
                <div className="mt-2 flex gap-2">
                    <button
                        type="button"
                        className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                        onClick={stopSpeaking}
                        disabled={!speaking}
                    >
                        Hentikan Membaca
                    </button>
                </div>
            </div>

            <p className="text-xs text-gray-600 mt-2">Shortcut: Alt+Shift+A untuk membuka/menutup.</p>
            </div>
        )}
        </div>
    );
}
