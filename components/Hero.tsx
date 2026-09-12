"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero-reveal relative min-h-screen overflow-hidden bg-[var(--brown)] px-5 pb-16 pt-36 text-[var(--cream)] md:px-10">
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Eyebrow */}
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[var(--tan)]">
          Performance nutrition / Bangladesh
        </p>

        {/* Main heading */}
        <h1 className="display fluid-title max-w-4xl font-black">
          Fuel
          <br />
          <span className="ml-[10vw] text-[var(--green)]">every</span>{" "}
          rep.
        </h1>

        {/* Bottom content */}
        <div className="mt-8 md:w-[48%]">
          <p className="max-w-md text-base uppercase leading-7 text-white/75 md:text-lg">
            Straight-forward sports nutrition for training days, recovery days,
            and everything between.
          </p>

          {/* Shop button */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="inline-flex rounded-full bg-[var(--cream)] px-7 py-4 font-bold text-[var(--brown)] transition hover:-translate-y-1"
            >
              Shop Protein ↗
            </Link>
          </div>
        </div>

        {/* WHEY Video */}
        <motion.div
          initial={{ y: 50, opacity: 0, rotate: 4 }}
          animate={{ y: 0, opacity: 1, rotate: -4 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            relative mx-auto mt-12 w-full max-w-[300px]
            overflow-hidden rounded-[2.5rem]
            bg-[var(--tan)] p-3 shadow-2xl

            md:absolute
            md:right-[4%]
            md:top-[24%]
            md:mt-0
            md:max-w-[330px]
          "
        >
          <video
            className="aspect-square w-full rounded-[2rem] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Fuelora WHEY protein product video"
          >
            <source src="/products/gym.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

