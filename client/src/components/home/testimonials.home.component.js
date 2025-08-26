"use client";
import { useEffect, useRef, useState } from "react";

// DATA (inchangée)
const RAW = [
  { quote: "Une approche naturelle et très professionnelle… Léa, Margaux, et Laurent arrivent toujours à trouver une idée pour rendre unique vos vidéos, photos, et publications … J'ai collaboré avec eux pour des missions professionnelles et personnelles ! À chaque fois un succès.", author: "Bastien Bouchet", company: "Gérant – Du Bon Côté" },
  { quote: "Merci pour le beau reportage fait pour mon salon de coiffure Alexandre.C. à Quimper. Très beau résultat, belle publicité. Très satisfaite du résultat. Bravo.", author: "Christelle Alexandre", company: "Salon de coiffure Alexandre.C" },
  { quote: "Je recommande Léa pour son œil avisé, la qualité de ses photos, son contact : elle est discrète tout en sachant mettre à l’aise. La remise des photos est très rapide également. Je referai appel à elle, c'est certain !", author: "Audrey Chabert", company: "Audrey C.OUTURE" },
  { quote: "Nous recommandons les prestations de vidéo de Laurent : il a su, avec du matériel pro, mettre en avant Bulle d’air Conciergerie & Verso Recto. Nous referons appel à lui avec plaisir.", author: "Marie-May Ebrel & Franck Niger", company: "Bulle d’air & Verso Recto" },
  { quote: "Merci à Léa pour son professionnalisme. Merci pour l'écoute et la discrétion qui m’ont mise à l'aise durant la séance photo… Je recommande fortement !", author: "Synthia Bléomélen", company: "Sisi Krea" },
  { quote: "Appro Production a su mettre en valeur notre savoir-faire avec une vidéo claire, dynamique et professionnelle. Nos clients comprennent mieux notre activité et notre sérieux.", author: "François", company: "Responsable – Appro Logistique" },
  { quote: "J'ai fait appel à Laurent pour un film de présentation. J'ai apprécié le professionnalisme de l'équipe, leur écoute et le résultat final !", author: "Emeline Guilloux", company: "Thérapies manuelles spécialisées" },
  { quote: "Grâce à Appro Production, nos clients voient enfin l’envers du décor : notre équipe, notre atelier et la qualité de notre travail. Un vrai plus pour notre communication.", author: "David Martins", company: "Gérant – Appro Mécanique" },
  { quote: "Réactivité, professionnalisme et sympathie ! Belles qualités pour cette photographe professionnelle. Je recommande vivement.", author: "Marine Gourlay", company: "Atelier d’architecture" },
  { quote: "Laurent nous a fait plusieurs vidéos de moments de notre vie. Le résultat est toujours époustouflant !", author: "Pierre Riat", company: "Avis Google Business" },
  { quote: "Un esprit de famille que l'on retrouve dans votre travail. Notre équipe s'est laissée filmer en toute confiance : une vraie réalité de notre ambiance. Bravo !", author: "Mathias Le Moing", company: "Optic2000 Quimper" },
  { quote: "Merci du fond du cœur pour ce travail magnifique. La vidéo est sublime, les musiques super bien accordées. On est plus que ravis : tu as su nous replonger dans l’émotion du jour J.", author: "Sophie Le Jollec", company: "Mariage – 1er avril 2023" },
  { quote: "Chaque projet mené avec Appro Production est fluide et efficace. Les contenus mettent parfaitement en avant nos véhicules et nos événements.", author: "Mickaël Quiko", company: "Gérant – Appro Concept" },
  { quote: "Nous avons fait appel à Laurent pour notre mariage : gentillesse, écoute, et un rendu de grande qualité. Des souvenirs magnifiques à voir et revoir.", author: "Charlène & Enguerran", company: "Mariage – 24 juin 2023" },
];

export default function TestimonialsHomeComponent() {
  const scrollContainerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Constantes alignées sur tes cards/gap
  const DESKTOP_CARD = 450; // largeur carte desktop
  const MOBILE_CARD = 320;  // largeur carte mobile
  const GAP = 24;           // gap-6 = 24px

  // Aligne le JS sur ton breakpoint "desktop: 1220px"
  const getIsDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1220px)").matches;

  const getStep = () =>
    getIsDesktop() ? DESKTOP_CARD + GAP : MOBILE_CARD + GAP;

  // --- helper fiable avec ratio ---
  const computeIndexFromScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return 0;
    const maxScroll = Math.max(1, el.scrollWidth - el.clientWidth);
    const ratio = el.scrollLeft / maxScroll; // 0 → 1
    return Math.min(
      RAW.length - 1,
      Math.max(0, Math.round(ratio * (RAW.length - 1)))
    );
  };

  // Sync index au scroll manuel
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onScroll = () => {
      const newIndex = computeIndexFromScroll();
      if (newIndex !== index) setIndex(newIndex);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [index]);

  // Recalage au resize
  useEffect(() => {
    const onResize = () => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const ratio = index / Math.max(1, RAW.length - 1);
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      el.scrollTo({ left: ratio * maxScroll });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [index]);

  const scrollLeft = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getStep();
    el.scrollBy({ left: -step, behavior: "smooth" });
    setTimeout(() => setIndex(computeIndexFromScroll()), 250);
  };

  const scrollRight = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getStep();
    el.scrollBy({ left: step, behavior: "smooth" });
    setTimeout(() => setIndex(computeIndexFromScroll()), 250);
  };

  return (
    <section>
      {/* Bande principale */}
      <div
        id="testimonials"
        className="bg-[#F5F5F5] relative z-10 -my-[2px] py-16 mobile:py-20"
        style={{
          backgroundImage: "url('/img/bg-noise.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-10 items-start tablet:items-center pl-6 mobile:pl-8 tablet:pl-[10%] pr-6 mobile:pr-8">
          {/* Colonne gauche */}
          <div className="tablet:w-[520px]">
            <h2 className="tracking-tight font-light uppercase opacity-40 text-black">
              Témoignages
            </h2>
            <h1 className="tracking-tighter mt-3 mobile:mt-4 text-[32px] leading-[36px] mobile:text-4xl mobile:leading-tight tablet:text-5xl font-light text-black">
              De vrais moments, de
              <br /> vraies expériences.
            </h1>
            <a
              href="#contact"
              className="mt-6 mobile:mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-light shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow"
            >
              Contactez nous ↗
            </a>
          </div>

          {/* Carrousel */}
          <div
            ref={scrollContainerRef}
            className="
              relative custom-scrollbar
              w-full overflow-x-auto
              pb-2
            "
          >
            <div className="flex gap-6 pl-1 mobile:pl-2 desktop:pl-[5vw]">
              {RAW.map((review, i) => {
                const number = String(i + 1).padStart(2, "0");
                return (
                  <div
                    key={i}
                    className="
                      relative bg-white/70 flex flex-col justify-between
                      p-6 mobile:p-7
                      rounded-2xl
                      h-[350px]
                      w-[300px] mobile:w-[320px] desktop:w-[450px]
                      shrink-0
                    "
                  >
                    <span className="absolute top-3 right-4 text-xs text-black/40">
                      ({number})
                    </span>

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

                    <blockquote className="text-sm mobile:text-base italic leading-relaxed text-black/40">
                      “{review.quote}”
                    </blockquote>

                    <div className="flex gap-2 mt-6">
                      <div className="flex flex-col">
                        <p className="text-sm mobile:text-base text-black/70">
                          {review.author}
                        </p>
                        <p className="text-xs mobile:text-sm text-black/40">
                          {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="shrink-0 w-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Flèches + progression */}
      <div className="bg-[#F5F5F5] w-full flex flex-col mobile:flex-row gap-6 mobile:gap-0 items-center justify-between pl-6 mobile:pl-8 tablet:pl-[10%] pr-6 mobile:pr-[5%] pb-16 mobile:pb-20 z-10 relative">
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            disabled={index === 0}
            className={[
              "h-11 w-11 rounded-full grid place-items-center bg-black/40 text-white",
              index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black/60",
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
              index === RAW.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black/60",
            ].join(" ")}
            aria-label="Suivant"
          >
            →
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
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
