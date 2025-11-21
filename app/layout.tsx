import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Лавия — Рекламное агентство полного цикла",
  description: "Мы помогаем брендам обрести голос, увеличивать узнаваемость и достигать своих бизнес-целей в современном цифровом мире.",
  keywords: ["реклама", "маркетинг", "брендинг", "SMM", "SEO", "контент"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


