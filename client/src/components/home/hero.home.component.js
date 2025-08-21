"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroHomeComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".fade-up",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.3,
        }
      );

      tl.fromTo(
        ".fade-only",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "<+=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed top-0 -z-10 bg-black w-full h-[100dvh]"
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <img
        className="absolute w-full h-full left-1/2 -translate-x-1/2 object-cover"
        src="/img/hero/bg-hero.jpg"
        alt="bg-hero"
      />

      <img
        className="absolute w-full h-full left-1/2 -translate-x-1/2 object-cover opacity-75"
        src="/img/traits-hero.png"
        alt="traits-hero"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/0 pointer-events-none" />

      <section
        ref={containerRef}
        style={{ pointerEvents: "all" }}
        className="h-[100dvh] flex flex-col gap-4 justify-center px-[10%] items-center relative overflow-hidden"
      >
        {/* +60 clients */}
        <div className="fade-only flex items-center gap-4 w-full text-left">
          <img src="/img/hero/avis.png" className="max-h-[30px]" alt="trust" />
          <p className="text-white font-thin">
            +60 clients nous font confiance
          </p>
        </div>

        {/* Titres */}
        <h1 className="tracking-tighter flex flex-col text-[clamp(28px,5vw,96px)] leading-[clamp(35px,6vw,105px)] text-white font-thin w-full text-balance">
          <span className="fade-up">Racontez ce que vous faites.</span>
          <span className="text-right fade-up">Montrez qui vous êtes.</span>
        </h1>

        {/* h2 qui fade avec +60 clients */}
        <h2 className="fade-only tracking-tight text-white text-right w-full font-thin">
          Appro Production - Photo, vidéo et réseaux sociaux.
        </h2>
      </section>
    </div>
  );
}
