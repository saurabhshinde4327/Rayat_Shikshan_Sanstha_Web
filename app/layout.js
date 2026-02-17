import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Yatra_One } from "next/font/google"; // ✅ Import Yatra One
import RootLayoutClient from "./RootLayoutClient"; // ✅ client logic for theme + auth

// Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Yatra One for Marathi
const yatra = Yatra_One({
  subsets: ["devanagari", "latin"], // ✅ devanagari needed for Marathi
  weight: "400",
});

export const metadata = {
  title: "rayatshiksha",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={yatra.className}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
