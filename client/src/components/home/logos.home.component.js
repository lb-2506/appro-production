"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Marquee from "react-fast-marquee";

export default function LogosFoodComponent() {
  const { t } = useTranslation("hero-section");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.1); // déplacement léger
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative text-center mt-[100vh] w-[100vw] bg-[#F5F5F5] overflow-hidden"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* IMAGE FRAME qui dépasse et commence décalée à gauche */}
      <img
        src="/img/logos/trame.png"
        alt="trame"
        className="absolute top-0 left-1/2 -translate-x-[60%] opacity-50 pointer-events-none pt-4"
        style={{
          scale: "110%",
          transform: `translateX(calc(-50% + ${offset}px))`,
          transition: "transform 0.1s linear",
        }}
      />

      <h1
        className="uppercase opacity-40 pt-48 tracking-tighter"
      >
        Ils nous font confiance
      </h1>

      {/* LOGOS MARQUEE */}
      <Marquee>
        <div className="py-16 flex gap-32 items-center opacity-40">
          <img src="/img/logos/beliers.png" alt="beliers" className="h-16" />
          <img
            src="/img/logos/apprologistic.png"
            alt="apprologistic"
            className="h-16"
          />
          <img
            src="/img/logos/duboncote.png"
            alt="duboncote"
            className="h-16"
          />
          <img src="/img/logos/coqrock.png" alt="coqrock" className="h-16" />
          <img src="/img/logos/bbh.png" alt="bbh" className="h-16" />
          <img src="/img/logos/sourir.png" alt="sourir" className="h-16" />
          <img
            src="/img/logos/irreductible.png"
            alt="irreductible"
            className="h-16"
          />
          <img src="/img/logos/optic.png" alt="optic2000" className="h-16" />
        </div>
      </Marquee>
    </section>
  );
}
