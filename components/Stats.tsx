 "use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Stats() {
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{ if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return; const ctx=gsap.context(()=>{gsap.from(".stat",{y:60,opacity:0,stagger:.12,duration:.8,scrollTrigger:{trigger:ref.current,start:"top 75%"}})},ref);return()=>ctx.revert()},[]);
 return <section ref={ref} id="benefits" className="bg-[var(--ink)] px-5 py-24 text-[var(--cream)] md:px-10"><div className="mx-auto grid max-w-[1500px] gap-0 md:grid-cols-4">{[["25G","Protein / scoop"],["5.5G","BCAAs"],["3G","Sugar"],["120","KCAL"]].map(([n,l])=><div className="stat border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 first:md:pl-0 last:md:border-0" key={n}><div className="display text-6xl font-black md:text-7xl">{n}</div><div className="mt-3 text-sm font-semibold uppercase tracking-[.18em] text-white/50">{l}</div></div>)}</div></section>
}