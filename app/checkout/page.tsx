import { CheckoutForm } from "@/components/CheckoutForm";
export const metadata = { title: "Checkout" };
export default function CheckoutPage() {
  return <main id="main" className="min-h-screen px-5 py-32 md:px-10"><CheckoutForm /></main>;
}