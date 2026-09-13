import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import CustomCursor from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { PageTransition } from "@/components/PageTransition";

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
      
        <Script id="reload-to-top" strategy="beforeInteractive">
          {`
            (function () {
              try {
                // 1) If this visitor has already sat through the preloader
                //    once, flag it on <html> RIGHT NOW, before anything
                //    paints. globals.css hides .preloader-panel whenever
                //    this class is present, so returning visitors never
                //    see even a single frame of it on refresh.
                if (localStorage.getItem("fuelora-preloader-seen")) {
                  document.documentElement.classList.add("preloader-seen");
                }

                // 2) Stop the browser silently restoring the old scroll
                //    offset for this history entry on reload.
                if ("scrollRestoration" in history) {
                  history.scrollRestoration = "manual";
                }

                var nav = performance.getEntriesByType("navigation")[0];
                var isReload = nav
                  ? nav.type === "reload"
                  : performance.navigation && performance.navigation.type === 1;

                if (isReload) {
                  // 3) Stop it jumping to a #hash fragment.
                  if (window.location.hash) {
                    history.replaceState(null, "", window.location.pathname + window.location.search);
                  }
                  window.scrollTo(0, 0);
                  window.addEventListener("load", function () {
                    window.scrollTo(0, 0);
                  });
                }
              } catch (e) {}
            })();
          `}
        </Script>

        <SmoothScroll />
        <Preloader />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:bg-white focus:p-3">Skip to content</a>
        <Header />
        <PageTransition>{children}</PageTransition>
        <CustomCursor />
        <CartDrawer />
      </body>
    </html>
  );
}