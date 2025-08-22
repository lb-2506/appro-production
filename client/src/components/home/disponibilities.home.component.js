"use client";

import { useEffect, useState } from "react";
import { ArrowSvg } from "../_shared/_svgs/arrow.svg";
import { useRouter } from "next/router";

export default function DisponibilitiesHomeComponent() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleScrollToSection(id) {
    await wait(300);
    if (router.pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      requestAnimationFrame(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  return (
    <div
      className={`hidden fixed bottom-6 right-6 rounded-xl bg-white p-5 w-[234px] h-[209px] mobile:flex flex-col justify-between z-20 shadow-xl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="font-thin text-sm rounded-full w-fit px-1 py-1"
        style={{
          backgroundImage: "url('/img/hero/bg-disponible.avif')",
          backgroundPosition: "bottom",
        }}
      >
        <div className="flex gap-2 items-center bg-white rounded-full px-2 py-1">
          <img
            className="h-[32px]"
            src="/img/hero/disponible.avif"
            alt="disponible"
          />
          <p className="opacity-60">Disponible</p>
        </div>
      </div>

      <p className="font-xl leading-5">Prêt à immortaliser vos moments ?</p>

      <div className="flex gap-4">
        <p className="font-thin text-sm opacity-60 tracking-tight">
          Parlons-en dès maintenant.
        </p>

        <button
          onClick={() => handleScrollToSection("#contact")}
          className="bg-black w-fit p-4 h-fit rounded-full"
          aria-label="Aller à la section contact"
        >
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
}
