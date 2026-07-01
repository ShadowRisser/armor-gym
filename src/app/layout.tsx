import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({ src: "", display: "swap", variable: "--font-geist-sans" });
const geistMono = localFont({ src: "", display: "swap", variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "ARMOR GYM | Birmingham, AL — Strength & Conditioning",
  description: "Birmingham's premier strength training facility. World-class equipment, expert coaching, and a community that pushes you to be better every day. 7001 Crestwood Blvd.",
  openGraph: { title: "ARMOR GYM | Birmingham, AL", description: "Premier strength training in Birmingham. Rogue & Eleiko equipment, expert coaching, 24/7 access." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
