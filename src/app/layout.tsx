import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/layouts/header/header'
import Footer from "@/layouts/footer/footer";
import ContentWrapper from "@/core/common/content-wrapper";
import TopBar from "@/core/common/top-bar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Kumar - Portfolio",
  description: "Full Stack Developer specializing in Next.js, React, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black transition-colors duration-300`}
      >
        <TopBar />
        <Header />
        <ContentWrapper>
          {children}
          <Footer />
        </ContentWrapper>
      </body>
    </html>
  );
}
