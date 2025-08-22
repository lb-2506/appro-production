"use client";
import { useEffect, useRef, useState } from "react";

const FAQ = [
  {
    q: "Quels sont les délais de réalisation ?",
    a: "Ça dépend du type de projet, mais en général, comptez entre 1 et 3 semaines entre le tournage et la livraison. On s’adapte toujours au planning et aux urgences de nos clients.",
  },
  {
    q: "Est-ce que je peux faire appel à vous si je n’ai pas d’idée précise ?",
    a: "Oui, bien sûr ! On vous accompagne dès le début pour clarifier vos besoins, poser les bonnes bases et construire un projet adapté, même si vous partez de zéro.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "Partout. On est basés à Concarneau, mais on se déplace partout en Bretagne — et ailleurs si le projet nous emballe !",
  },
  {
    q: "Quels sont vos tarifs ?",
    a: "Chaque projet est différent, donc chaque devis est personnalisé. Mais pour vous donner une idée : nos prestations démarrent à 125€ pour une séance photo, et à 390€ pour une vidéo professionnelle simple. On vous conseille toujours la solution la plus juste, selon vos objectifs et votre budget.",
  },
];

export default function FaqHomeComponent({ isContactFixed }) {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  // SPRING + VELOCITY
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const r = el.getBoundingClientRect();
    target.current = { x: r.width * 0.45, y: r.height * 0.25 };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.current.x = x;
      target.current.y = y;
    };
    el.addEventListener("mousemove", onMove);

    let raf;
    const stiffness = 0.06;
    const damping = 0.12;

    const tick = () => {
      if (reduce) {
        if (glowRef.current) {
          const centerX = r.width * 0.5;
          const centerY = r.height * 0.35;
          glowRef.current.style.transform = `translate(${centerX}px, ${centerY}px) translate(-50%, -50%)`;
        }
        return;
      }

      const ax =
        (target.current.x - pos.current.x) * stiffness -
        vel.current.x * damping;
      const ay =
        (target.current.y - pos.current.y) * stiffness -
        vel.current.y * damping;

      vel.current.x += ax;
      vel.current.y += ay;
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      const rr = el.getBoundingClientRect();
      target.current = { x: rr.width * 0.55, y: rr.height * 0.35 };
    };
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Accordéon (un seul ouvert)
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((o) => (o === i ? -1 : i));

  return (
    <>
      <section
        id="faq"
        ref={containerRef}
        className={`z-10 relative overflow-hidden
          py-20 mobile:py-28 tablet:py-36
          ${isContactFixed ? "mb-[100dvh]" : "mb-0"}`}
        style={{
          backgroundColor: "#EAEAEA",
          backgroundImage: "url('/img/bg-noise.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      >
        {/* Halo jaune */}
        <div
          ref={glowRef}
          className="
            pointer-events-none absolute top-0 left-0 rounded-full opacity-70
            bg-[#FEFEA2] mix-blend-multiply
            w-[520px] h-[520px] blur-[80px]
            mobile:w-[720px] mobile:h-[720px] mobile:blur-[100px]
            tablet:w-[900px] tablet:h-[900px] tablet:blur-[120px]
            will-change-transform
          "
          style={{ transform: "translate(-50%, -50%)" }}
        />

        {/* Contenu */}
        <div className="relative z-10 max-w-[1240px] w-[90%] mx-auto flex flex-col items-center gap-8 mobile:gap-10">
          {/* Header */}
          <div className="text-black max-w-[760px] flex flex-col gap-4 mobile:gap-6 items-center text-center">
            <h2 className="tracking-tight font-light uppercase opacity-40">
              FAQ
            </h2>
            <h1 className="tracking-tighter text-[9vw] leading-[12vw] mobile:text-[54px] mobile:leading-[64px] tablet:text-[60px] tablet:leading-[68px] font-light">
              Vous avez des
              <br /> questions ?
            </h1>
            <p className="max-w-[480px] text-base mobile:text-lg opacity-60 font-light">
              Nous avons les réponses. Voici tout ce que vous devez savoir pour
              travailler avec nous.
            </p>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center rounded-full font-light bg-black text-white px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
              >
                Contactez nous
                <span className="relative inline-block w-6 h-6 overflow-visible">
                  <span className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-11 group-hover:-translate-y-11">
                    <span
                      className="absolute w-4 h-4 text-white opacity-100"
                      style={{ transform: "translate(-40px, 40px)" }}
                    >
                      ↗
                    </span>
                    <span
                      className="absolute w-4 h-4 text-white opacity-100"
                      style={{ transform: "translate(3px, -3px)" }}
                    >
                      ↗
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Liste FAQ */}
          <div className="w-full flex flex-col gap-4">
            {FAQ.map((item, i) => (
              <FaqItem
                key={i}
                i={i}
                open={open}
                onToggle={() => toggle(i)}
                q={item.q}
                a={item.a}
              />
            ))}
          </div>
        </div>
      </section>
      <div id="contact" />
    </>
  );
}

function FaqItem({ i, open, onToggle, q, a }) {
  const contentRef = useRef(null);
  const isOpen = open === i;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setHeight(isOpen ? el.scrollHeight : 0);
  }, [isOpen, q, a]);

  const contentId = `faq-panel-${i}`;

  return (
    <div className="relative rounded-[22px] bg-white/85 backdrop-blur-sm shadow-[0_2px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
      {/* ligne jaune subtile */}
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#FEFEA2] to-transparent opacity-70" />

      <button
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="w-full text-left px-5 mobile:px-6 py-4 mobile:py-5 pr-12 flex items-center justify-between gap-4 mobile:gap-6"
      >
        <span className="text-black font-semibold tracking-tight text-[15px] mobile:text-base tablet:text-lg">
          {q}
        </span>

        <span
          className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-black text-white"
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-all duration-300 ease-in-out"
          >
            <path
              d="M2 7h10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 2v10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"}`}
            />
          </svg>
        </span>
      </button>

      <div
        id={contentId}
        className="px-5 mobile:px-6"
        style={{
          maxHeight: height,
          transition:
            "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
        }}
      >
        <p
          ref={contentRef}
          className="pb-5 pt-1 text-black/40 leading-relaxed tracking-tight text-sm mobile:text-base"
        >
          {a}
        </p>
      </div>
    </div>
  );
}
