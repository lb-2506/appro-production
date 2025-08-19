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
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <img
        className="absolute w-full h-full left-1/2 -translate-x-1/2 object-cover"
        src="/img/food/bg-hero.jpg"
        alt="bg-hero"
      />

      <img
        className="absolute w-full h-full left-1/2 -translate-x-1/2 object-cover opacity-75"
        src="/img/food/traits-hero.png"
        alt="traits-hero"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/0 pointer-events-none" />

      <div className="fixed bottom-6 right-6 rounded-xl bg-white p-5 w-[234px] h-[209px] flex flex-col justify-between z-10">
        <div
          className="font-thin text-sm rounded-full w-fit px-1 py-1"
          style={{
            backgroundImage: "url('/img/food/bg-disponible.jpg')",
            backgroundPosition: "bottom",
          }}
        >
          <div className="flex gap-2 items-center bg-white rounded-full px-2 py-1">
            <img
              className="h-[32px]"
              src="/img/food/disponible.png"
              alt="disponible"
            />
            <p className="opacity-60">Disponible</p>
          </div>
        </div>

        <p className="font-xl leading-5">Prêt à immortaliser vos moments ?</p>

        <div className="flex gap-4">
          <p className="font-thin text-sm opacity-60 tracking-tight">
            Facilisi fames sit sed phasellus amet.
          </p>
          <button className="bg-black w-fit p-4 h-fit rounded-full">
            <ArrowSvg />
          </button>
        </div>
      </div>

      <section
        style={{ pointerEvents: "all" }}
        className="h-[100dvh] flex flex-col gap-4 justify-center px-[10%] items-center relative overflow-hidden"
      >
        <div className="flex items-center gap-4 w-full text-left">
          <img src="/img/food/avis.png" className="max-h-[30px]" />
          <p className="text-white font-thin">
            +60 clients nous font confiance
          </p>
        </div>

        <h1 className="flex flex-col text-8xl text-white font-thin w-full">
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
