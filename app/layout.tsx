import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codefest 16 — конференция для разработчиков",
  description: "Лендинг конференции в стиле Codefest: спикеры, программа, билеты и FAQ."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
