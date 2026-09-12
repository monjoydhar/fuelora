 "use client";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";

export function ProductGrid({full=false}:{full?:boolean}) {
 const add=useCart(s=>s.add);
 return <section id="shop" className={`px-5 ${full?"py-20":"py-28"} md:px-10`}><div className="mx-auto max-w-[1500px]">
  <div className="mb-12 flex items-end justify-between"><div><p className="mb-3 text-xs font-black uppercase tracking-[.25em] text-[var(--green)]">The lineup</p><h2 className="display fluid-h2 font-black">Pick your<br/>fuel.</h2></div><span className="hidden text-sm text-[var(--muted)] md:block">01 — 06</span></div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map(p=><motion.article key={p.id} whileHover={{y:-7}} className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white">
   <div className="relative aspect-square bg-[#f1e9dc] p-10"><img src={p.image} alt={`${p.name} ${p.flavor}`} className="h-full w-full object-contain transition duration-700 group-hover:scale-105"/></div>
   <div className="p-6"><div className="flex justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-[var(--green)]">{p.flavor}</p><h3 className="display mt-1 text-2xl font-bold">{p.name}</h3></div><strong>৳{p.price.toLocaleString()}</strong></div><p className="mt-3 text-sm text-[var(--muted)]">{p.description}</p><button onClick={()=>add(p)} className="focus-ring mt-6 w-full rounded-full bg-[var(--brown)] py-3 font-bold text-white transition hover:bg-[var(--green)]">Add to basket</button></div>
  </motion.article>)}</div>
 </div></section>
}