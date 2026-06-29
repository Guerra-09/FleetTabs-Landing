import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "FleetTabs — Tus ventanas, en pestañas",
  description:
    "FleetTabs agrupa varias ventanas en una sola barra estilo Chrome. Cambia de una a otra con un clic o un atajo —sin alt-tab a ciegas, sin perder el foco y con cualquier programa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
