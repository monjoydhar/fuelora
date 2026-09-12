 "use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

export function Header() {
  const count = useCart(s => s.items.reduce((n, i) => n + i.quantity, 0));
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const fn = () => { const y = window.scrollY; setHidden(y > last && y > 100); last = y; };
    window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`fixed z-50 left-0 right-0 top-0 transition-transform duration-500 ${hidden ? "-translate-y-full" : ""}`}>
      <div className="mx-3 mt-3 flex items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(253,251,247,.88)] px-4 py-3 backdrop-blur-xl md:mx-6 md:px-6">
        <Link href="/" className="display text-xl font-extrabold tracking-tight">FUELORA<span className="text-[var(--green)]">.</span></Link>
        <nav className="hidden gap-7 font-nav text-[15px] font-semibold tracking-[-0.01em] md:flex">
          {["Home","Shop","Story","Benefits","Contact"].map((x,i) => <a key={x} className="hover:text-[var(--green)]" href={i===0?"/":i===1?"/shop":`/#${x.toLowerCase()}`}>{x}</a>)}
        </nav>
        <button onClick={() => window.dispatchEvent(new Event("fuelora:cart"))} className="focus-ring flex items-center gap-2 rounded-full bg-[var(--brown)] px-4 py-2 text-sm semi-bold text-white">
          <i className="ri-shopping-cart-2-line text-2xl"></i>Basket <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[var(--tan)] px-1 text-[var(--ink)]">{count}</span>
        </button>
      </div>
    </header>
  );
}