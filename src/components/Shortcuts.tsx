import { accent } from "@/lib/theme";

const kbdBase: React.CSSProperties = {
  display: "inline-grid",
  placeItems: "center",
  minWidth: 42,
  height: 42,
  padding: "0 11px",
  borderRadius: 11,
  background: "#fff",
  border: "1px solid #e4e9f0",
  borderBottom: "3px solid #d6dde6",
  fontFamily: "var(--font-space)",
  fontWeight: 600,
  fontSize: 14,
  color: "#0d1320",
  flexShrink: 0,
};

const kbdAccent: React.CSSProperties = {
  display: "inline-grid",
  placeItems: "center",
  minWidth: 42,
  height: 42,
  borderRadius: 11,
  background: accent.grad,
  borderBottom: "3px solid rgba(0,0,0,.16)",
  color: "#fff",
  fontFamily: "var(--font-space)",
  fontWeight: 700,
  fontSize: 18,
  flexShrink: 0,
};

const Plus = () => <span style={{ color: "#9aa6b5", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>+</span>;
const Slash = () => <span style={{ color: "#9aa6b5", fontWeight: 600, fontSize: 13, flexShrink: 0 }}>/</span>;

export default function Shortcuts() {
  return (
    <section id="atajos" style={{ background: "#fff", borderTop: "1px solid #e4e9f0", borderBottom: "1px solid #e4e9f0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }} className="section-pad">
        <div style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: accent.solid }}>
          Atajos globales
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: "clamp(26px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-.02em", margin: "14px 0 0" }}>
          Todo desde el teclado.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "#5a6675", maxWidth: "54ch", margin: "16px 0 0" }}>
          Funcionan aunque el juego tenga el foco. Sin soltar el ratón, sin menús.
        </p>

        <div className="shortcuts-grid">
          <div style={{ border: "1px solid #e4e9f0", borderRadius: 18, padding: "28px 24px", background: "#f5f7fa" }}>
            <div className="kbd-row">
              <kbd style={kbdBase}>Ctrl</kbd>
              <Plus />
              <kbd style={kbdBase}>Alt</kbd>
              <Plus />
              <kbd style={kbdAccent}>→</kbd>
              <Slash />
              <kbd style={kbdAccent}>←</kbd>
            </div>
            <h3 style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 20, letterSpacing: "-.01em", margin: "22px 0 6px" }}>
              Cambiar de pestaña
            </h3>
            <p style={{ color: "#5a6675", fontSize: 15, lineHeight: 1.55, margin: 0 }}>
              Rota el foco entre tus ventanas gestionadas y las trae al frente: <strong style={{ color: "#0d1320" }}>→</strong> avanza a la siguiente y <strong style={{ color: "#0d1320" }}>←</strong> retrocede a la anterior, sin tocar el ratón.
            </p>
          </div>

          <div style={{ border: "1px solid #e4e9f0", borderRadius: 18, padding: "28px 24px", background: "#f5f7fa" }}>
            <div className="kbd-row">
              <kbd style={kbdBase}>Ctrl</kbd>
              <Plus />
              <kbd style={kbdBase}>Alt</kbd>
              <Plus />
              <kbd style={kbdAccent}>↑</kbd>
              <Slash />
              <kbd style={kbdAccent}>↓</kbd>
            </div>
            <h3 style={{ fontFamily: "var(--font-space)", fontWeight: 600, fontSize: 20, letterSpacing: "-.01em", margin: "22px 0 6px" }}>
              Ocultar y mostrar la barra
            </h3>
            <p style={{ color: "#5a6675", fontSize: 15, lineHeight: 1.55, margin: 0 }}>
              <strong style={{ color: "#0d1320" }}>↑</strong> oculta la barra de pestañas para una vista limpia del juego y <strong style={{ color: "#0d1320" }}>↓</strong> la vuelve a mostrar. Tu disposición se mantiene intacta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
