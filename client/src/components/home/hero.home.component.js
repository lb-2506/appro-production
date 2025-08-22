"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

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
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      {/* Background principal (on garde layout="fill") */}
      <Image
        src="/img/hero/bg-hero.avif"
        alt="bg-hero"
        layout="fill"
        priority
        className="object-cover"
      />

      {/* Traits (cachés en <768px pour lisibilité) */}
      <Image
        src="/img/traits-hero.avif"
        alt="traits-hero"
        layout="fill"
        className="object-cover opacity-60 hidden mobile:block"
        priority
      />

      {/* Overlay dégradé un peu plus dense en base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/0 mobile:from-black/70 pointer-events-none" />

      <section
        ref={containerRef}
        style={{ pointerEvents: "all" }}
        className="
          h-[100dvh] relative overflow-hidden
          flex flex-col justify-center gap-5
          px-4 mobile:px-8 tablet:px-[10%]
        "
      >
        {/* +60 clients */}
        <div className="fade-only w-full flex items-center gap-3 mobile:gap-4 justify-center tablet:justify-start text-left">
          <Image
            src="/img/hero/avis.avif"
            alt="trust"
            width={108}
            height={30}
            className="w-[90px] mobile:w-[108px] h-auto"
            priority
          />
          <p className="text-white font-thin text-xs mobile:text-sm">
            +60 clients nous font confiance
          </p>
        </div>

        {/* Titres */}
        <h1
          className="
            tracking-tighter text-white font-thin text-balance flex flex-col
            text-[28px] leading-[34px]
            mobile:text-[40px] mobile:leading-[46px]
            tablet:text-[64px] tablet:leading-[70px]
            desktop:text-[84px] desktop:leading-[92px]
            ultraWide:text-[96px] ultraWide:leading-[104px]
          "
        >
          <span className="fade-up text-center tablet:text-left">
            Racontez ce que vous faites.
          </span>

          <span className="fade-up text-center tablet:text-right">
            Montrez qui vous êtes.
          </span>
        </h1>

        {/* Baseline */}
        <div className="w-full flex justify-center tablet:justify-end">
          <h2
            className="
              fade-only text-white font-thin tracking-tight w-fit
              text-center tablet:text-left
              text-xs mobile:text-sm tablet:text-base
            "
          >
            Appro Production — Photo, vidéo et réseaux sociaux.
            <br />
            Une entreprise du groupe Appro
          </h2>
        </div>
      </section>
    </div>
  );
}
