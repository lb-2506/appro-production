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
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* IMAGE FRAME qui dépasse et commence décalée à gauche */}
      <img
        src="/img/logos/trame.avif"
        alt="trame"
        className="absolute top-0 left-1/2 -translate-x-[60%] opacity-50 pointer-events-none pt-4"
        style={{
          scale: "110%",
          transform: `translateX(calc(-50% + ${offset}px))`,
          transition: "transform 0.1s linear",
        }}
      />

      <h1 className="tracking-tighter uppercase opacity-40 pt-48">
        Ils nous font confiance
      </h1>

      {/* LOGOS MARQUEE */}
      <Marquee>
        <div className="pb-16 pt-24 flex gap-36 items-center opacity-40">
          <img src="/img/logos/beliers.avif" alt="beliers" className="h-[80px]" />
          <img
            src="/img/logos/apprologistic.avif"
            alt="apprologistic"
            className="h-[80px]"
          />
          <img
            src="/img/logos/duboncote.avif"
            alt="duboncote"
            className="h-[80px]"
          />
          <img src="/img/logos/coqrock.avif" alt="coqrock" className="h-[80px]" />
          <img src="/img/logos/bbh.avif" alt="bbh" className="h-[80px]" />
          <img src="/img/logos/sourire.avif" alt="sourir" className="h-[80px]" />
          <img
            src="/img/logos/irreductible.avif"
            alt="irreductible"
            className="h-[80px]"
          />
          <img
            src="/img/logos/approconcept.avif"
            alt="approconcept"
            className="h-[80px]"
          />

          <img src="/img/logos/office.avif" alt="office" className="h-[80px]" />

          <img
            src="/img/logos/patrouille.avif"
            alt="patrouille"
            className="h-[80px]"
          />

          <img src="/img/logos/rcc.avif" alt="rcc" className="h-[80px]" />

          <img src="/img/logos/rhd.avif" alt="rhd" className="h-[80px]" />

          <img src="/img/logos/usconc.avif" alt="usconc" className="h-[80px]" />

          <img
            src="/img/logos/badminton.avif"
            alt="badminton"
            className="h-[80px]"
          />

          <img src="/img/logos/optic.avif" alt="optic2000" className="h-[80px] mr-24" />
        </div>
      </Marquee>
    </section>
  );
}
