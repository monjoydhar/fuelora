import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProductGrid } from "@/components/ProductGrid";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { ShakerFlip } from "@/components/ShakerFlip";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Stats />
        <ProductGrid />
        <Story />
        <Testimonials />
        <ShakerFlip />
      </main>
      <Footer />
    </>
  );
}