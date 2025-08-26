"use client";
import { useMemo, useState, useEffect, useRef, useCallback } from "react";

/* --- helpers --- */
const ytId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2];
    if (u.searchParams.get("v")) return u.searchParams.get("v");
  } catch {}
  return "";
};
const ytThumb = (url) =>
  ytId(url) ? `https://img.youtube.com/vi/${ytId(url)}/maxresdefault.jpg` : "";

/* --- data --- */
const VIDEO_LINKS = [
  { title: "Appro Concept", url: "https://youtu.be/U0lM7dgQzxI" },
  { title: "Nordestinoz", url: "https://youtu.be/1w3O6MOCG4U" },
  { title: "ITW DBC", url: "https://youtu.be/BD6Z19LrBSg" },
  { title: "Concours DBC CITROËN", url: "https://youtu.be/Smb2Mmfx0Pw" },
  { title: "Mariage Litta & Bastien", url: "https://youtu.be/ZNUEhO0fHrk" },
  { title: "Miss 15–17 Finistère", url: "https://youtu.be/PqfVhe4Evzo" },
];

const SOCIAL_LINKS = [
  { title: "Bref, 1ère voiture", url: "https://youtube.com/shorts/o13chOWNKug" },
  { title: "Appro Logistique", url: "https://youtube.com/shorts/Qh2TxCtoZgc" },
  { title: "Tournoi RCC 2025", url: "https://youtube.com/shorts/Ca4fMPSnxl0" },
  { title: "DEFICOM – Habitat", url: "https://youtube.com/shorts/OBr7FAjYNMM" },
  { title: "Villa – S. Guézingar", url: "https://youtube.com/shorts/V7Skw1jljs8" },
  { title: "Vlog Festival irréductibles", url: "https://youtu.be/pn1OuQoRUzU" },
];

const PHOTO_URLS = [
  "/img/social/1.avif",
  "/img/social/2.avif",
  "/img/social/3.avif",
  "/img/social/4.avif",
  "/img/social/5.avif",
  "/img/social/6.avif",
  "/img/social/7.avif",
  "/img/social/8.avif",
  "/img/social/9.avif",
  "/img/social/10.avif",
  "/img/social/11.avif",
  "/img/social/12.avif",
];

export default function SocialHomeComponent({ setIsPopupOpen }) {
  const TABS = ["videos", "photos", "social"];
  const [tab, setTab] = useState("videos");

  // Index pour l'indicateur (0 → dernier)
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const listRef = useRef(null);

  // Constantes cartes/gap
  const MOBILE_CARD = 320;
  const DESKTOP_CARD = 450;
  const GAP = 24;

  const getIsDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1220px)").matches;

  const getStep = () => (getIsDesktop() ? DESKTOP_CARD + GAP : MOBILE_CARD + GAP);

  // Bloque le scroll quand un popup est ouvert
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      setIsPopupOpen(true);
    } else {
      document.body.style.overflow = "";
      setIsPopupOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
      setIsPopupOpen(false);
    };
  }, [selected, setIsPopupOpen]);

  const { items, playable } = useMemo(() => {
    if (tab === "videos")
      return {
        items: VIDEO_LINKS.map((v) => ({ ...v, thumb: ytThumb(v.url) })),
        playable: true,
      };
    if (tab === "social")
      return {
        items: SOCIAL_LINKS.map((v) => ({ ...v, thumb: ytThumb(v.url) })),
        playable: true,
      };
    return {
      items: PHOTO_URLS.map((u) => ({ url: u })),
      playable: false,
    };
  }, [tab]);

  const dotsCount = items.length; // on garde un dot par item

  // --- CALCUL D'INDEX VIA RATIO (fiable au bout du scroll) ---
  const computeIndexFromScroll = useCallback(() => {
    const el = listRef.current;
    if (!el) return 0;
    const maxScroll = Math.max(1, el.scrollWidth - el.clientWidth);
    const ratio = el.scrollLeft / maxScroll; // 0 → 1
    const idx = Math.round(ratio * (dotsCount - 1));
    return Math.min(dotsCount - 1, Math.max(0, idx));
  }, [dotsCount]);

  // Sync de l'index au scroll manuel (trackpad/tactile/molette)
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const onScroll = () => {
      const newIndex = computeIndexFromScroll();
      if (newIndex !== index) setIndex(newIndex);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [index, computeIndexFromScroll]);

  // Recalage au resize: garde la même progression visuelle (ratio)
  useEffect(() => {
    const onResize = () => {
      const el = listRef.current;
      if (!el || dotsCount <= 1) return;
      const targetRatio = index / (dotsCount - 1);
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      el.scrollTo({ left: targetRatio * maxScroll });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [index, dotsCount]);

  // Reset & recale au changement d'onglet
  useEffect(() => {
    setIndex(0);
    const t = setTimeout(() => {
      const el = listRef.current;
      if (el) el.scrollTo({ left: 0 });
    }, 0);
    return () => clearTimeout(t);
  }, [tab]);

  // Flèches: scroll d'une carte à la fois + maj d'index par ratio après scroll
  const scrollLeft = () => {
    const el = listRef.current;
    if (!el) return;
    const step = getStep();
    el.scrollBy({ left: -step, behavior: "smooth" });

    // Après l'animation, fixe l'index via ratio
    // (petit timeout suffisant pour suivre le smooth)
    setTimeout(() => setIndex(computeIndexFromScroll()), 250);
  };

  const scrollRight = () => {
    const el = listRef.current;
    if (!el) return;
    const step = getStep();
    el.scrollBy({ left: step, behavior: "smooth" });
    setTimeout(() => setIndex(computeIndexFromScroll()), 250);
  };

  return (
    <section
      id="social"
      className="bg-[#171717] py-36 relative z-10"
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="max-w-[1240px] w-[90%] mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-white max-w-[850px] flex flex-col gap-6 items-center text-center">
          <h1 className="tracking-tight font-light uppercase opacity-40">
            Ils sont devenus mémorables
          </h1>

          <h2 className="tracking-tighter text-[9vw] leading-[12vw] mobile:leading-[65px] tablet:text-[60px] font-light">
            Des vidéos et des photos
            <br /> qui parlent pour eux.
          </h2>

          <h3 className="max-w-[600px] text-lg opacity-60 font-light">
            Personal branding, storytelling, prise de parole stratégique :
            chaque contenu qu’on crée a un objectif clair… et des résultats
            concrets.
          </h3>

          {/* Tabs */}
          <div className="mb-6 mt-10 flex gap-3">
            {TABS.map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={[
                  "px-4 py-2 rounded-lg text-sm transition-all",
                  tab === k
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/40 hover:bg-white/15",
                ].join(" ")}
              >
                {k === "videos"
                  ? "Vidéos"
                  : k === "photos"
                  ? "Photographie"
                  : "Réseaux sociaux"}
              </button>
            ))}
          </div>
        </div>

        {/* Liste */}
        <div className="w-full">
          <div
            ref={listRef}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") scrollRight();
              if (e.key === "ArrowLeft") scrollLeft();
            }}
            className="
              relative overflow-x-auto pb-2
              scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-6 pl-1 mobile:pl-2">
              {items.map((item, i) => {
                const image = item.thumb || item.url;
                return (
                  <div
                    key={i}
                    className="shrink-0 w-[300px] mobile:w-[320px] desktop:w-[450px]"
                  >
                    <SquareCard
                      image={image}
                      playable={playable}
                      onClick={() => setSelected(item)}
                    />
                  </div>
                );
              })}
              <div className="shrink-0 w-2" />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={scrollLeft}
                disabled={index === 0}
                className={[
                  "h-10 w-10 rounded-full flex items-center justify-center bg-white text-black",
                  index === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90",
                ].join(" ")}
                aria-label="Précédent"
              >
                ←
              </button>
              <button
                onClick={scrollRight}
                disabled={index === dotsCount - 1}
                className={[
                  "h-10 w-10 rounded-full flex items-center justify-center bg-white text-black",
                  index === dotsCount - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90",
                ].join(" ")}
                aria-label="Suivant"
              >
                →
              </button>
            </div>

            {/* Indicateurs (index basé sur ratio → à fond quand on est au bout) */}
            <div className="flex items-center gap-2">
              {Array.from({ length: dotsCount }).map((_, i) => (
                <span
                  key={i}
                  className={[
                    "inline-block h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-white" : "w-2 bg-white/40",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-[90%] h-[90%] bg-black rounded-xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-3xl z-10"
            >
              ✕
            </button>

            {ytId(selected.url) ? (
              <iframe
                src={`https://www.youtube.com/embed/${ytId(selected.url)}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={selected.url}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* --- carte carrée --- */
function SquareCard({ image, onClick, playable = false }) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] opacity-90"
      />
      {playable && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-12 w-12 rounded-full bg-white/90 text-black grid place-items-center shadow">
            ▶
          </span>
        </span>
      )}
    </button>
  );
}
