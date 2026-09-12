"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });

    const move = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-grow]")) {
        el.classList.add("is-active");
      }
    };
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-grow]")) {
        el.classList.remove("is-active");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <div id="fuel-cursor" ref={dotRef} />;
}