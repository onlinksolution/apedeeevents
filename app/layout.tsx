import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

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
        <Loading />
        <Navbar />
        {children}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-a38be0b2-35ee-4057-bef8-e78d4bdbbf33" data-elfsight-app-lazy></div>
        <Footer />
      </body>
    </html>
  );
}
