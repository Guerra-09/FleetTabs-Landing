export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e4e9f0", background: "#fff" }}>
      <div className="footer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <img src="/logo.ico" alt="FleetTabs" width={30} height={30} style={{ borderRadius: 9 }} />
          <div style={{ lineHeight: 1.3 }}>
            <div style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: 15 }}>FleetTabs</div>
            <div style={{ fontSize: 12, color: "#8a96a6" }}>© 2026 · Creado por Guerra</div>
          </div>
        </div>

        <a
          href="https://www.youtube.com/@guerra0908"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", borderRadius: 11, border: "1px solid #e4e9f0", background: "#fff", color: "#0d1320", fontWeight: 600, fontSize: 14 }}
        >
          <span style={{ display: "grid", placeItems: "center", width: 26, height: 18, borderRadius: 5, background: "#ff0033", flexShrink: 0 }}>
            <span style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "5px 0 5px 8px", borderColor: "transparent transparent transparent #fff", marginLeft: 2 }} />
          </span>
          Youtube
        </a>
      </div>
    </footer>
  );
}
