import { accent } from "@/lib/theme";

const cards = [
  {
    icon: (
      <div style={{ position: "relative", width: 22, height: 22 }}>
        <span style={{ position: "absolute", left: 0, top: 0, width: 15, height: 15, borderRadius: 4, border: `2px solid ${accent.solid}` }} />
        <span style={{ position: "absolute", right: 0, bottom: 0, width: 15, height: 15, borderRadius: 4, background: accent.solid }} />
      </div>
    ),
    title: "Multicuenta en MMOs",
    desc: "Wakfu, Dofus o cualquier cliente que abras varias veces. Alinea todas las ventanas en el mismo rectángulo y rota el foco con un atajo: jugar multicuenta se siente como cambiar de pestaña.",
  },
  {
    icon: (
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 22 }}>
        <span style={{ width: 5, height: 10, borderRadius: 2, background: accent.solid }} />
        <span style={{ width: 5, height: 16, borderRadius: 2, background: accent.solid }} />
        <span style={{ width: 5, height: 22, borderRadius: 2, background: accent.solid }} />
      </div>
    ),
    title: "Trading y paneles en vivo",
    desc: "Apila varias plataformas o dashboards en un único marco. Salta entre gráficas y monitores sin reorganizar ventanas a mano cada vez.",
  },
  {
    icon: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 22 }}>
        <span style={{ height: 4, borderRadius: 2, background: accent.solid }} />
        <span style={{ height: 4, borderRadius: 2, background: accent.solid }} />
        <span style={{ height: 4, width: 14, borderRadius: 2, background: accent.solid }} />
      </div>
    ),
    title: "Estudio y multitarea",
    desc: "Documentación, IDE y terminal en la misma barra. Cero alt-tab a ciegas: ves todas tus ventanas y vas directo a la que necesitas.",
  },
];

export default function UseCases() {
  return (
    <section id="casos" style={{ maxWidth: 1120, margin: "0 auto" }} className="section-pad">
      <div style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: accent.solid }}>
        Casos de uso
      </div>
      <h2 style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: "clamp(26px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-.02em", margin: "14px 0 0", maxWidth: "18ch" }}>
        Pensado para juegos. Útil para todo.
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: "#5a6675", maxWidth: "56ch", margin: "16px 0 0" }}>
        Si tiene ventana, va a una pestaña. FleetTabs no asume qué programa usas.
      </p>

      <div style={{ display: "grid", gap: 18, marginTop: 42 }}>
        <div className="usecases-wide" style={{ background: accent.soft, border: `1px solid ${accent.ring}`, borderRadius: 18, padding: 32 }}>
          <div style={{ flexShrink: 0, width: 58, height: 58, borderRadius: 16, background: accent.grad, display: "grid", placeItems: "center", boxShadow: `0 8px 20px ${accent.ring}` }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, width: 24, height: 24 }}>
              {[0,1,2,3].map(i => <span key={i} style={{ background: "#fff", borderRadius: 3 }} />)}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 22, letterSpacing: "-.01em", margin: "0 0 8px" }}>
              Compatible con cualquier ventana
            </h3>
            <p style={{ color: "#42505f", fontSize: 16, lineHeight: 1.55, margin: 0, maxWidth: "70ch" }}>
              No solo juegos. FleetTabs detecta ventanas reales del sistema —navegadores, editores, terminales o launchers— y las agrupa en una sola barra. Tú eliges qué juntar.
            </p>
          </div>
        </div>

        <div className="usecases-grid">
          {cards.map((card) => (
            <div key={card.title} style={{ background: "#fff", border: "1px solid #e4e9f0", borderRadius: 16, padding: 26, boxShadow: "0 1px 2px rgba(13,19,32,.04)" }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: accent.soft, display: "grid", placeItems: "center" }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 19, letterSpacing: "-.01em", margin: "18px 0 8px" }}>
                {card.title}
              </h3>
              <p style={{ color: "#5a6675", fontSize: 15, lineHeight: 1.55, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
