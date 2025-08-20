"use client";
import { useEffect, useRef, useState } from "react";

// DATA (inchangée)
const RAW = [
  {
    quote:
      "Une approche naturelle et très professionnelle… Léa, Margaux, et Laurent arrivent toujours à trouver une idée pour rendre unique vos vidéos, photos, et publications … J'ai collaboré avec eux pour des missions professionnelles et personnelles ! À chaque fois un succès.",
    author: "Bastien Bouchet",
    company: "Gérant – Du Bon Côté",
  },
  {
    quote:
      "Merci pour le beau reportage fait pour mon salon de coiffure Alexandre.C. à Quimper. Très beau résultat, belle publicité. Très satisfaite du résultat. Bravo.",
    author: "Christelle Alexandre",
    company: "Salon de coiffure Alexandre.C",
  },
  {
    quote:
      "Je recommande Léa pour son œil avisé, la qualité de ses photos, son contact : elle est discrète tout en sachant mettre à l'aise. La remise des photos est très rapide également. Je referai appel à elle, c'est certain !",
    author: "Audrey Chabert",
    company: "Audrey C.OUTURE",
  },
  {
    quote:
      "Nous recommandons les prestations de vidéo de Laurent : il a su, avec du matériel pro, mettre en avant Bulle d’air Conciergerie & Verso Recto. Nous referons appel à lui avec plaisir.",
    author: "Marie-May Ebrel & Franck Niger",
    company: "Bulle d’air & Verso Recto",
  },
  {
    quote:
      "Merci à Léa pour son professionnalisme. Merci pour l'écoute et la discrétion qui m’ont mise à l'aise durant la séance photo… Je recommande fortement !",
    author: "Synthia Bléomélen",
    company: "Sisi Krea",
  },
  {
    quote:
      "Appro Production a su mettre en valeur notre savoir-faire avec une vidéo claire, dynamique et professionnelle. Nos clients comprennent mieux notre activité et notre sérieux.",
    author: "François",
    company: "Responsable – Appro Logistique",
  },
  {
    quote:
      "J'ai fait appel à Laurent pour un film de présentation. J'ai apprécié le professionnalisme de l'équipe, leur écoute et le résultat final !",
    author: "Emeline Guilloux",
    company: "Thérapies manuelles spécialisées",
  },
  {
    quote:
      "Grâce à Appro Production, nos clients voient enfin l’envers du décor : notre équipe, notre atelier et la qualité de notre travail. Un vrai plus pour notre communication.",
    author: "David Martins",
    company: "Gérant – Appro Mécanique",
  },
  {
    quote:
      "Réactivité, professionnalisme et sympathie ! Belles qualités pour cette photographe professionnelle. Je recommande vivement.",
    author: "Marine Gourlay",
    company: "Atelier d’architecture",
  },
  {
    quote:
      "Laurent nous a fait plusieurs vidéos de moments de notre vie. Le résultat est toujours époustouflant !",
    author: "Pierre Riat",
    company: "Avis Google Business",
  },
  {
    quote:
      "Un esprit de famille que l'on retrouve dans votre travail. Notre équipe s'est laissée filmer en toute confiance : une vraie réalité de notre ambiance. Bravo !",
    author: "Mathias Le Moing",
    company: "Optic2000 Quimper",
  },
  {
    quote:
      "Merci du fond du cœur pour ce travail magnifique. La vidéo est sublime, les musiques super bien accordées. On est plus que ravis : tu as su nous replonger dans l’émotion du jour J.",
    author: "Sophie Le Jollec",
    company: "Mariage – 1er avril 2023",
  },
  {
    quote:
      "Chaque projet mené avec Appro Production est fluide et efficace. Les contenus mettent parfaitement en avant nos véhicules et nos événements.",
    author: "Mickaël Quiko",
    company: "Gérant – Appro Concept",
  },
  {
    quote:
      "Nous avons fait appel à Laurent pour notre mariage : gentillesse, écoute, et un rendu de grande qualité. Des souvenirs magnifiques à voir et revoir.",
    author: "Charlène & Enguerran",
    company: "Mariage – 24 juin 2023",
  },
];

export default function TestimonialsHomeComponent() {
  const scrollContainerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Constantes alignées sur tes cards/gap existants
  const DESKTOP_CARD = 450;
  const MOBILE_CARD = 320;
  const GAP = 24;

  const getIsDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1280px)").matches; // correspond à .desktop:*

  const getStep = () =>
    getIsDesktop() ? DESKTOP_CARD + GAP : MOBILE_CARD + GAP;

  // Sync l'index quand on scrolle manuellement (trackpad/roulette)
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onScroll = () => {
      const step = getStep();
      const i = Math.round(el.scrollLeft / step);
      const maxIndex = RAW.length - 1;
      const clamped = Math.max(0, Math.min(maxIndex, i));
      if (clamped !== index) setIndex(clamped);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [index]);

  const scrollLeft = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getStep();
    const nextIndex = Math.max(0, index - 1);
    el.scrollBy({ left: -step, behavior: "smooth" });
    setIndex(nextIndex);
  };

  const scrollRight = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getStep();
    const maxIndex = RAW.length - 1;
    const nextIndex = Math.min(maxIndex, index + 1);
    el.scrollBy({ left: step, behavior: "smooth" });
    setIndex(nextIndex);
  };

  return (
    <section>
      <div
        id="testimonials"
        className="bg-[#F5F5F5] relative py-20 flex"
        style={{
          backgroundImage: "url('/img/food/bg-noise.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="flex gap-10 items-center pl-[10%]">
          {/* Colonne gauche */}
          <div className="lg:col-span-5">
            <h2 className="w-[540px] mt-4 text-5xl leading-tight font-light text-black">
              De vrais moments, de
              <br /> vraies expériences.
            </h2>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-light shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow"
            >
              Contactez nous ↗
            </a>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="relative custom-scrollbar w-full overflow-x-scroll"
        >
          {/* Desktop (inchangé côté layout/marges) */}
          <div
            className="hidden desktop:flex relative"
            style={{ width: (DESKTOP_CARD + GAP) * RAW.length + 100 }}
          >
            <div className="flex gap-6 pl-[5vw]">
              {RAW.map((review, i) => {
                const number = String(i + 1).padStart(2, "0");
                return (
                  <div
                    key={i}
                    className="relative bg-white/70 flex flex-col justify-between p-8 rounded-2xl h-[300px] w-[450px]"
                  >
                    {/* numéro */}
                    <span className="absolute top-3 right-4 text-xs text-black/40">
                      ({number})
                    </span>

                    {/* étoiles */}
                    <div className="mb-3 flex gap-1 text-[#9AC39A] opacity-50">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-base italic leading-relaxed text-black/40">
                      “{review.quote}”
                    </blockquote>

                    <div className="flex gap-2 mt-6">
                      <div className="flex flex-col">
                        <p className="text-md text-black/70">{review.author}</p>
                        <p className="text-sm text-black/40">
                          {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Flèches + progression — alignées au contenu via la même marge gauche */}
      </div>

      <div className="bg-[#F5F5F5] w-full flex items-center justify-between pl-[10%] pr-[5%] pb-20">
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            disabled={index === 0}
            className={[
              "h-11 w-11 rounded-full grid place-items-center bg-black/40 text-white",
              index === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-black/60",
            ].join(" ")}
            aria-label="Précédent"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            disabled={index === RAW.length - 1}
            className={[
              "h-11 w-11 rounded-full grid place-items-center bg-black/40 text-white",
              index === RAW.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-black/60",
            ].join(" ")}
            aria-label="Suivant"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-2">
          {RAW.map((_, i) => (
            <span
              key={i}
              className={[
                "inline-block h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-black/60" : "w-2 bg-black/25",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
