import type React from "react";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AX Mercado Real",
  description:
    "Descubra quanto seu patrimônio pode crescer com a estratégia inteligente.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${publicSans.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
