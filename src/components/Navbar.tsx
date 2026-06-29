"use client";

import { useState } from "react";
import { accent } from "@/lib/theme";

const navLinks = [
  { label: "Casos de uso", href: "#casos" },
  { label: "Atajos", href: "#atajos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backdropFilter: "saturate(160%) blur(12px)",
      WebkitBackdropFilter: "saturate(160%) blur(12px)",
      background: "rgba(245,247,250,.78)",
      borderBottom: "1px solid #e4e9f0",
    }}>
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <img src="/logo.ico" alt="FleetTabs" width={31} height={31} style={{ borderRadius: 9, boxShadow: `0 4px 12px ${accent.ring}` }} />
          <span style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: 18, letterSpacing: "-.02em" }}>FleetTabs</span>
        </div>

        <nav className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "#5a6675", fontWeight: 600, fontSize: 14 }}>
              {l.label}
            </a>
          ))}
          <a
            href="/FleetTabs-v0.2.0-win-x64.zip"
            download
            style={{ display: "inline-flex", alignItems: "center", padding: "9px 16px", borderRadius: 10, background: accent.grad, color: "#fff", fontWeight: 700, fontSize: 14, boxShadow: `0 6px 16px ${accent.ring}` }}
          >
            Descargar
          </a>
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "#0d1320", display: "flex", alignItems: "center" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <>
                <rect x="2" y="5" width="18" height="2" rx="1" fill="currentColor"/>
                <rect x="2" y="10" width="18" height="2" rx="1" fill="currentColor"/>
                <rect x="2" y="15" width="18" height="2" rx="1" fill="currentColor"/>
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`nav-mobile${open ? " open" : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ color: "#5a6675", fontWeight: 600, fontSize: 15, padding: "10px 0", borderBottom: "1px solid #f0f2f5" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/FleetTabs-v0.2.0-win-x64.zip"
          download
          style={{ display: "inline-flex", justifyContent: "center", marginTop: 8, padding: "12px 20px", borderRadius: 10, background: accent.grad, color: "#fff", fontWeight: 700, fontSize: 15, boxShadow: `0 6px 16px ${accent.ring}` }}
        >
          Descargar para Windows
        </a>
      </div>
    </header>
  );
}
