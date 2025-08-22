"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Marquee from "react-fast-marquee";
import Image from "next/image";

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

      <h1 className="tracking-tighter uppercase opacity-40 pt-24 tablet:pt-48">
        Ils nous font confiance
      </h1>

      {/* LOGOS MARQUEE */}
      <Marquee>
        <div className="pb-16 pt-24 flex gap-36 items-center opacity-40">
          <Image
            src="/img/logos/beliers.avif"
            alt="beliers"
            width={110}
            height={80}
          />
          <Image
            src="/img/logos/apprologistic.avif"
            alt="apprologistic"
            width={110}
            height={80}
          />
          <Image
            src="/img/logos/duboncote.avif"
            alt="duboncote"
            width={175}
            height={80}
          />
          <Image
            src="/img/logos/coqrock.avif"
            alt="coqrock"
            width={110}
            height={80}
          />
          <Image src="/img/logos/bbh.avif" alt="bbh" width={110} height={80} />
          <Image
            src="/img/logos/sourire.avif"
            alt="sourire"
            width={125}
            height={80}
          />
          <Image
            src="/img/logos/irreductible.avif"
            alt="irreductible"
            width={126}
            height={80}
          />
          <Image
            src="/img/logos/approconcept.avif"
            alt="approconcept"
            width={80}
            height={80}
          />
          <Image
            src="/img/logos/office.avif"
            alt="office"
            width={80}
            height={80}
          />
          <Image
            src="/img/logos/patrouille.avif"
            alt="patrouille"
            width={56}
            height={80}
          />
          <Image src="/img/logos/rcc.avif" alt="rcc" width={68} height={80} />
          <Image src="/img/logos/rhd.avif" alt="rhd" width={71} height={80} />
          <Image
            src="/img/logos/usconc.avif"
            alt="usconc"
            width={68}
            height={80}
          />
          <Image
            src="/img/logos/badminton.avif"
            alt="badminton"
            width={75}
            height={80}
          />
          <Image
            src="/img/logos/optic.avif"
            alt="optic2000"
            width={139}
            height={80}
            className="mr-24"
          />
        </div>
      </Marquee>
    </section>
  );
}
