 "use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyLoaded = sessionStorage.getItem("fuelora-preloader-seen");

    if (reduced || alreadyLoaded) {
      el.style.display = "none";
      return;
    }

    let current = 0;
    let raf = 0;
    let finished = false;

    const update = () => {
      const docReady = document.readyState === "complete";
      const fontsReady = document.fonts?.status === "loaded";
      const target = docReady && fontsReady ? 100 : Math.min(94, current + 1.5);

      current += (target - current) * 0.08;
      if (target === 100 && current > 99.5) current = 100;

      setProgress(Math.round(current));

      if (current >= 100) {
        finish();
        return;
      }
      raf = requestAnimationFrame(update);
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      sessionStorage.setItem("fuelora-preloader-seen", "1");

      const tl = gsap.timeline({
        onComplete: () => {
          el.style.display = "none";
        }
      });

      tl.to(".preloader-progress", { scaleX: 1, duration: 0.25, ease: "power2.out" })
        .to(".preloader-number", { yPercent: -120, opacity: 0, duration: 0.45, ease: "power3.in" }, "<")
        .to(".preloader-copy", { opacity: 0, duration: 0.25 }, "<")
        .to(".preloader-panel", {
          clipPath: "inset(0 0 100% 0)",
          duration: 2.5,
          ease: "power4.inOut"
        })
        .fromTo(".hero-reveal",
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.45"
        );
    };

    const onReady = () => {
      document.fonts?.ready?.then(() => {
        if (document.readyState === "complete") current = Math.max(current, 98);
      });
    };

    window.addEventListener("load", onReady);
    raf = requestAnimationFrame(update);

    const fallback = window.setTimeout(() => {
      current = 100;
    }, 3500);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      window.removeEventListener("load", onReady);
    };
  }, []);

  return (
    <div ref={ref} className="preloader-panel fixed inset-0 z-[200] bg-[var(--brown)] text-[var(--cream)]" style={{ clipPath: "inset(0 0 0 0)" }}>
      <div className="absolute inset-x-10 top-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--tan)] md:inset-x-12 md:top-12">
        <span className="preloader-copy">FUELORA / PERFORMANCE NUTRITION</span>
        <span className="preloader-copy hidden md:block">WELCOME TO THE RITUAL</span>
      </div>

      <div className="absolute right-8 top-[14%] overflow-hidden md:right-12 md:top-[12%]">
        <div className="preloader-number display text-[7rem] font-black leading-none tracking-[-0.08em] md:text-[11rem]">
          {String(progress).padStart(2, "0")}<span className="text-[var(--green)]">%</span>
        </div>
      </div>

      <div className="absolute inset-x-10 bottom-12 md:inset-x-12 md:bottom-16">
        <div className="mb-5 flex justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
          <span className="preloader-copy">LOADING CLEAN FUEL</span>
          <span className="preloader-copy">EST. 2026</span>
        </div>
        <div className="h-[4px] overflow-hidden bg-white/20">
          <div className="preloader-progress h-full origin-left scale-x-0 bg-white" />
        </div>
      </div>
    </div>
  );
}