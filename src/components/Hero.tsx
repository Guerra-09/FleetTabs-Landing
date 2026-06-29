"use client";

import { accent } from "@/lib/theme";
import { BASE_PATH, WIN_DOWNLOAD_URL } from "@/lib/config";

function useOS() {
  if (typeof window === "undefined") return null;
  const ua = navigator.userAgent;
  if (/Windows/.test(ua)) return "windows";
  if (/Mac/.test(ua)) return "mac";
  return "other";
}

export default function Hero() {
  const os = useOS();

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(58% 46% at 50% -6%, ${accent.soft}, transparent 70%)` }} />

      <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto", padding: "84px 20px 60px", textAlign: "center" }}>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "6px 14px", borderRadius: 999, border: "1px solid #e4e9f0", background: "#fff", fontSize: 13, fontWeight: 600, color: "#5a6675", boxShadow: "0 1px 2px rgba(13,19,32,.04)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent.solid, flexShrink: 0 }} />
          Para Windows · multicuenta sin caos
        </div>

        <h1 style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: "clamp(36px,6vw,62px)", lineHeight: 1.04, letterSpacing: "-.03em", margin: "24px auto 0", maxWidth: "15ch" }}>
          Tus ventanas, en{" "}
          <span style={{ background: accent.grad, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            pestañas
          </span>.
        </h1>

        <p style={{ fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.55, color: "#5a6675", maxWidth: "58ch", margin: "22px auto 0" }}>
          FleetTabs agrupa varias ventanas en una sola barra estilo Chrome. Cambia de una a otra con un clic o un atajo —sin alt-tab a ciegas, sin perder el foco y con cualquier programa.
        </p>

        <div className="hero-buttons">
          <a
            href={WIN_DOWNLOAD_URL}
            download
            style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "15px 24px", borderRadius: 13, background: accent.grad, color: "#fff", fontWeight: 700, fontSize: 16, boxShadow: `0 10px 24px ${accent.ring}` }}
          >
            <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, width: 16, height: 16, flexShrink: 0 }}>
              {[0,1,2,3].map(i => <span key={i} style={{ background: "#fff", borderRadius: 1 }} />)}
            </span>
            Descargar para Windows
          </a>

          <span style={{ display: "inline-flex", alignItems: "center", gap: 11, padding: "15px 22px", borderRadius: 13, background: "#fff", border: "1px solid #e4e9f0", color: "#5a6675", fontWeight: 600, fontSize: 16 }}>
            Descargar para Mac
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", padding: "4px 9px", borderRadius: 999, background: "#f1f4f8", color: "#8a96a6", flexShrink: 0 }}>
              Próximamente
            </span>
          </span>
        </div>

        {os && os !== "windows" && (
          <div style={{ marginTop: 12, fontSize: 13, color: "#e07b00", fontWeight: 500 }}>
            ⚠ Parece que estás en {os === "mac" ? "macOS" : "Linux"} — FleetTabs es solo para Windows por ahora.
          </div>
        )}

        <div style={{ marginTop: os && os !== "windows" ? 8 : 16, fontSize: 13, color: "#8a96a6", fontWeight: 500 }}>
          Gratis · portable · sin instalación · Windows 10/11 (64-bit)
        </div>

        <div style={{ position: "relative", margin: "60px auto 0", maxWidth: 980, width: "100%", borderRadius: 18, overflow: "hidden", border: "1px solid #e4e9f0", boxShadow: "0 36px 70px -24px rgba(13,19,32,.30),0 8px 24px rgba(13,19,32,.06)" }}>
          <img
            src={`${BASE_PATH}/images/tabs-preview.gif`}
            alt="FleetTabs en acción — barra de pestañas con múltiples ventanas"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
