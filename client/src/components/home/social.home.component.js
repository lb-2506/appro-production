"use client";
import { useMemo, useState } from "react";

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
  {
    title: "Bref, 1ère voiture",
    url: "https://youtube.com/shorts/o13chOWNKug",
  },
  { title: "Appro Logistique", url: "https://youtube.com/shorts/Qh2TxCtoZgc" },
  { title: "Tournoi RCC 2025", url: "https://youtube.com/shorts/Ca4fMPSnxl0" },
  { title: "DEFICOM – Habitat", url: "https://youtube.com/shorts/OBr7FAjYNMM" },
  {
    title: "Villa – S. Guézingar",
    url: "https://youtube.com/shorts/V7Skw1jljs8",
  },
  { title: "Vlog Festival irréductibles", url: "https://youtu.be/pn1OuQoRUzU" },
];

// placeholders photos
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

export default function SocialHomeComponent() {
  const TABS = ["videos", "photos", "social"];
  const [tab, setTab] = useState("videos");

  const { items, perPage, playable } = useMemo(() => {
    if (tab === "videos")
      return {
        items: VIDEO_LINKS.map((v) => ({ ...v, thumb: ytThumb(v.url) })),
        perPage: 2,
        playable: true,
      };
    if (tab === "social")
      return {
        items: SOCIAL_LINKS.map((v) => ({ ...v, thumb: ytThumb(v.url) })),
        perPage: 2,
        playable: true,
      };
    return {
      items: PHOTO_URLS.map((u) => ({ url: u })),
      perPage: 2,
      playable: false,
    };
  }, [tab]);

  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const onTab = (t) => {
    setTab(t);
    setPage(0);
  };

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  // largeur d’un item pour remplir la ligne (avec 24px de gap ~ Tailwind gap-6)
  const GAP = 24;
  const itemBasis = `calc((100% - ${(perPage - 1) * GAP}px) / ${perPage})`;

  // slice des items de la page courante
  const sliceStart = page * perPage;
  const current = items.slice(sliceStart, sliceStart + perPage);

  return (
    <section
      id="social"
      className="bg-[#171717] py-36"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="max-w-[1240px] w-[90%] mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-white max-w-[850px] flex flex-col gap-6 items-center text-center">
          <h2 className="font-light uppercase opacity-40 tracking-tight">
            Ils sont devenus mémorables
          </h2>
          <h1 className="text-[9vw] leading-[12vw] mobile:leading-[65px] tablet:text-[60px] font-light">
            Des vidéos et des photos
            <br /> qui parlent pour eux.
          </h1>
          <h3 className="max-w-[600px] text-lg opacity-60 font-light">
            Personal branding, storytelling, prise de parole stratégique :
            chaque contenu qu’on crée a un objectif clair… et des résultats
            concrets.
          </h3>

          {/* Filtres */}
          <div className="mb-6 mt-10 flex gap-3">
            {TABS.map((k) => (
              <button
                key={k}
                onClick={() => onTab(k)}
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

        {/* Ligne de médias (toujours en ligne) */}
        <div className="w-full">
          <div className="flex gap-6" style={{ willChange: "transform" }}>
            {current.map((item, i) => {
              const image = item.thumb || item.url;
              const url = item.url;
              return (
                <SquareCard
                  key={i}
                  image={image}
                  playable={playable}
                  onClick={url ? () => window.open(url, "_blank") : undefined}
                  style={{ flex: `0 0 ${itemBasis}` }}
                />
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={prev}
                disabled={page === 0}
                className={[
                  "h-10 w-10 rounded-full flex items-center justify-center bg-white text-black",
                  page === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90",
                ].join(" ")}
                aria-label="Précédent"
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={page === pageCount - 1}
                className={[
                  "h-10 w-10 rounded-full flex items-center justify-center bg-white text-black",
                  page === pageCount - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90",
                ].join(" ")}
                aria-label="Suivant"
              >
                →
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <span
                  key={i}
                  className={[
                    "inline-block h-1.5 rounded-full transition-all",
                    i === page ? "w-6 bg-white" : "w-2 bg-white/40",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- carte carrée --- */
function SquareCard({ image, onClick, playable = false, style }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] opacity-90"
      />
      {playable && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-10 w-10 rounded-full bg-white/90 text-black grid place-items-center shadow">
            ▶
          </span>
        </span>
      )}
      <span className="absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
    </button>
  );
}
