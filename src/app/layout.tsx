import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a192f",
};

export const metadata: Metadata = {
  title: "DD Sistemas | Software Sob Medida, Apps para Condomínios e Sites",
  description:
    "Soluções inteligentes em software para transformar e automatizar o seu negócio. Aplicativos para condomínios (DD Estoque e DD ManutenPro), sistemas para pequenos empreendedores e sites institucionais modernos de alta performance.",
  keywords: [
    "DD Sistemas",
    "software sob medida",
    "DD Estoque",
    "DD ManutenPro",
    "aplicativo para condomínio",
    "controle de almoxarifado condomínio",
    "manutenção preventiva condomínio",
    "cardápio virtual",
    "sistema para sorveteria",
    "sistema para pet shop",
    "sites institucionais",
    "automação comercial",
    "LGPD",
  ],
  authors: [{ name: "DD Sistemas" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ddsistemas.com.br",
    title: "DD Sistemas | Soluções Inteligentes em Software",
    description:
      "Transforme sua gestão com os apps para condomínios (DD Estoque e DD ManutenPro), cardápios digitais, PDV e sites institucionais de alta conversão.",
    siteName: "DD Sistemas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230a192f'/><path d='M25 50L45 70L75 30' stroke='%2300d2ff' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        />
      </head>
      <body className="bg-navy-900 text-slate-100 antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
