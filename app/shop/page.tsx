import { ProductGrid } from "@/components/ProductGrid";
export const metadata = { title: "Shop" };
export default function ShopPage() {
  return <main id="main" className="pt-28"><ProductGrid full /></main>;
}