"use client";
import { useMemo, useState } from "react";

export default function WhatWeDoHomeComponent() {
  const items = useMemo(
    () => [
      {
        key: "videos",
        number: "01",
        titleLines: ["Vidéos", "sur mesure"],
        label: "VIDÉOS SUR MESURE",
        image: "/img/what-we-do/1.jpg",
        description:
          "On s’adapte à votre activité, votre public, et votre ton pour créer des vidéos efficaces, humaines et bien pensées.",
        tags: [
          "Films d’entreprise",
          "Vidéos réseaux sociaux",
          "Teasers",
          "Interviews",
          "Reportages",
        ],
      },
      {
        key: "photo",
        number: "02",
        titleLines: ["Photographie", "professionnelle"],
        label: "PHOTOGRAPHIE PROFESSIONNELLE",
        image: "/img/what-we-do/2.jpg",
        description:
          "On capture l’essentiel de votre activité, avec une esthétique simple, soignée, et naturelle.",
        tags: [
          "Portraits d'équipe",
          "Ambiance d'atelier",
          "Produits",
          "Évènements",
          "Reportages",
        ],
      },
      {
        key: "social",
        number: "03",
        titleLines: ["Accompagnement", "réseaux sociaux"],
        label: "ACCOMPAGNEMENT RÉSEAUX SOCIAUX",
        image: "/img/what-we-do/3.jpg",
        description:
          "On vous aide à structurer votre présence en ligne. Faire vivre votre activité sur les bons canaux, sans y passer vos soirées.",
        tags: [
          "Stratégie de contenu",
          "Planning",
          "Création visuelle",
          "Gestion de publications",
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const activeItem = items[active];

  return (
    <section
      id="what-we-do"
      className="text-white pt-24 max-w-[1240px] mx-auto"
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-[#202020] max-w-[90%] w-[1240px] mx-auto p-12 md:p-10 lg:p-12 rounded-[20px] relative">
        {/* Angles */}
        <img
          src="/img/what-we-do/angle.png"
          alt="angle"
          className="absolute top-0 left-0 max-w-[50px] -translate-x-[3px] -translate-y-[3px]"
        />
        <img
          src="/img/what-we-do/angle.png"
          alt="angle"
          className="absolute top-0 right-0 max-w-[50px] rotate-90 translate-x-[3px] -translate-y-[3px]"
        />
        <img
          src="/img/what-we-do/angle.png"
          alt="angle"
          className="absolute bottom-0 left-0 max-w-[50px] -rotate-90 -translate-x-[3px] translate-y-[3px]"
        />
        <img
          src="/img/what-we-do/angle.png"
          alt="angle"
          className="absolute bottom-0 right-0 max-w-[50px] rotate-180 translate-x-[3px] translate-y-[3px]"
        />
        {/* Header */}
        <div className="flex items-center justify-between text-sm tracking-tight text-white mb-24">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
              <svg viewBox="0 0 12 12" className="h-2 w-2" aria-hidden="true">
                <path
                  d="M6 1v10M1 6h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>Ce qu'on propose</span>
          </div>
          <span className="uppercase">Nos services</span>
        </div>

        {/* Grille */}
        <div className="flex justify-between">
          {/* Colonne gauche */}
          <div className="w-[280px]">
            {/* Images superposées avec crossfade */}
            <div className="w-full max-w-[360px]">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                {items.map((it, i) => (
                  <img
                    key={it.key}
                    src={it.image}
                    alt={i === active ? it.label : ""}
                    aria-hidden={i !== active}
                    className={[
                      "absolute inset-0 h-full w-full object-cover",
                      "transition-opacity duration-500 ease-out",
                      i === active ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            {/* Label */}
            <p className="mt-6 text-sm tracking-thin text-white/60">
              {activeItem.label}
            </p>

            {/* Description */}
            <p className="mt-3 leading-relaxed text-white/80 max-w-[34ch]">
              {activeItem.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 max-w-[40ch]">
              {activeItem.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full px-3 py-1 bg-white/5 ring-1 ring-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne droite */}
          <div className="w-[620px]">
            <ul role="tablist" className="space-y-6">
              {items.map((item, idx) => {
                const isActive = idx === active;
                return (
                  <li key={item.key}>
                    <button
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(idx)}
                      className="group w-full text-left"
                    >
                      <div className="grid grid-cols-[1fr_auto] gap-x-4">
                        <h3
                          className={[
                            "font-thin leading-[1.08] tracking-tighter",
                            "transition-all duration-300 ease-out",
                            isActive
                              ? "translate-x-4 opacity-100"
                              : "opacity-10 group-hover:opacity-100",
                          ].join(" ")}
                        >
                          <span className="block text-[55px]">
                            {item.titleLines[0]}
                          </span>
                          <span className="block text-[55px]">
                            {item.titleLines[1]}
                          </span>
                        </h3>

                        {/* Numéro en haut à droite */}
                        <span
                          className={[
                            "text-xs tracking-widest uppercase text-white/50 self-start",
                            "transition-opacity duration-300",
                            isActive ? "opacity-100" : "opacity-60",
                          ].join(" ")}
                        >
                          ({item.number})
                        </span>

                        {/* Séparateur sur toute la largeur (sous le numéro aussi) */}
                        <div className="col-span-2 mt-3 h-px bg-white/10" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="#contact"
            className="group relative inline-flex items-center rounded-full font-light bg-white text-black px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
          >
            Contactez nous
            <span className="relative inline-block w-6 h-6 overflow-visible">
              <span className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-11 group-hover:-translate-y-11">
                <span
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-4 h-4 text-black opacity-100"
                  style={{ transform: "translate(-40px, 40px)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  ↗
                </span>

                <span
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-4 h-4 text-black opacity-100"
                  style={{ transform: "translate(3px, -3px)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  ↗
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
