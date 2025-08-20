import { useEffect, useRef, useState } from "react";

// I18N
import { useTranslation } from "next-i18next";
import { ArrowSvg } from "../_shared/_svgs/arrow.svg";

export default function HeroHomeComponent() {
  const { t } = useTranslation("hero-section");

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
        src="/img//traits-hero.png"
        alt="traits-hero"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/0 pointer-events-none" />

      <section
        style={{ pointerEvents: "all" }}
        className="h-[100dvh] flex flex-col gap-4 justify-center px-[10%] items-center relative overflow-hidden"
      >
        <div className="flex items-center gap-4 w-full text-left">
          <img src="/img/hero/avis.png" className="max-h-[30px]" alt='trust' />
          <p className="text-white font-thin">
            +60 clients nous font confiance
          </p>
        </div>

        <h1 className="flex flex-col text-[clamp(28px,5vw,96px)] leading-[clamp(35px,6vw,105px)] text-white font-thin w-full text-balance">
          <span>Racontez ce que vous faites.</span>
          <span className="text-right">Montrez qui vous êtes.</span>
        </h1>

        <h2 className="text-white text-right w-full font-thin">
          Appro Production - Photo, vidéo et réseaux sociaux.
        </h2>
      </section>
    </div>
  );
}
