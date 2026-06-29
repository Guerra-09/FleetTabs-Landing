"use client";

import { useState } from "react";
import { accent } from "@/lib/theme";

const faqs = [
  { q: "¿Funciona con cualquier programa o solo con juegos?", a: "Con cualquier ventana. FleetTabs detecta las ventanas reales del sistema —navegadores, editores, terminales, launchers o juegos— y agrupa las que tú elijas en una sola barra de pestañas." },
  { q: "¿Sirve para multicuenta en Wakfu o Dofus?", a: "Sí. Activa la alineación para encajar todas las ventanas en el mismo rectángulo y rota el foco con Ctrl + Alt + →. Cambiar de personaje se siente como cambiar de pestaña en Chrome." },
  { q: "Mi antivirus o Windows dice que es sospechoso, ¿es un virus?", a: "No lo es. FleetTabs es totalmente inofensivo. Si tu antivirus o una web como VirusTotal muestra una alerta, es un falso positivo. Pasa porque la app es nueva, gratuita y aún no está firmada con un certificado de empresa (ese certificado cuesta dinero cada año), así que los antivirus desconfían por defecto de programas que todavía no conocen." },
  { q: "Al abrirla aparece un aviso azul de Windows, ¿qué hago?", a: 'Es la pantalla "Windows protegió tu PC" de SmartScreen, que sale con cualquier programa nuevo sin firmar. No significa que sea malicioso: solo pulsa "Más información" y luego "Ejecutar de todos modos". Como es portable, no hay instalación: se ejecuta y listo.' },
  { q: "¿Me pueden banear del juego por usar FleetTabs?", a: "No puedo garantizar que ningún juego no sancione su uso, así que lo usas bajo tu responsabilidad. Dicho esto, FleetTabs solo orquesta ventanas desde fuera: las mueve y las trae al frente con las APIs estándar de Windows, igual que si hicieras clic en la barra de tareas o usaras Alt+Tab. No inyecta nada en el juego, no lee ni modifica su memoria, y no automatiza acciones." },
  { q: "¿Hay versión para Mac?", a: "Próximamente. Por ahora FleetTabs es para Windows 10 y 11 (64-bit)." },
  { q: "¿Habrá versión para Linux?", a: "xd" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ maxWidth: 760, margin: "0 auto" }} className="section-pad">
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: accent.solid }}>
          FAQ
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: "clamp(26px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-.02em", margin: "14px 0 0" }}>
          Preguntas frecuentes
        </h2>
      </div>

      <div style={{ marginTop: 38, borderTop: "1px solid #e4e9f0" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #e4e9f0" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 4px", background: "transparent", border: 0, cursor: "pointer", textAlign: "left", fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: "clamp(15px,2vw,18px)", color: "#0d1320" }}
            >
              <span>{faq.q}</span>
              <span style={{ flexShrink: 0, width: 27, height: 27, borderRadius: "50%", display: "grid", placeItems: "center", background: accent.soft, color: accent.solid, fontWeight: 700, fontSize: 18 }}>
                {open === i ? "–" : "+"}
              </span>
            </button>
            {open === i && (
              <p style={{ margin: 0, padding: "0 4px 20px", color: "#5a6675", fontSize: 15, lineHeight: 1.6 }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
