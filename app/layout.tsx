import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const serif = DM_Serif_Display({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Tati Marques Terapia da Mão | Reabilitação em Bauru",
  description: "Reabilitação especializada de mãos e membros superiores, terapia ocupacional e órteses personalizadas em Bauru/SP.",
  keywords: ["terapia da mão Bauru", "terapia ocupacional Bauru", "reabilitação da mão", "órtese personalizada", "reabilitação membro superior"],
  openGraph: {
    title: "Tati Marques Terapia da Mão",
    description: "Recupere o movimento e reconquiste sua autonomia com reabilitação especializada em Bauru/SP.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo-tati-marques.png", shortcut: "/logo-tati-marques.png", apple: "/logo-tati-marques.png" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${manrope.variable} ${serif.variable}`}>{children}</body></html>;
}
