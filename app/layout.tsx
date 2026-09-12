import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import CustomCursor from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-nav", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Fuelora — Fuel every rep.", template: "%s — Fuelora" },
  description: "Performance protein and sports nutrition built for everyday training.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} ${poppins.variable}`}>
        <SmoothScroll />
        <Preloader />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:bg-white focus:p-3">Skip to content</a>
        <Header />
        {children}
        <CustomCursor />
        <CartDrawer />
      </body>
    </html>
  );
}