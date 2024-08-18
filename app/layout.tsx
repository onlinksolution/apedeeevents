import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ape Dee Events UK LTD",
  description: "Discover Ape Dee Events, a UK-based event planning company specializing in music events featuring Sri Lankan artists. We turn every event into an opportunity to give back, with all proceeds supporting scholarships for underprivileged children in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
