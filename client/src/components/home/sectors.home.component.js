"use client";

export default function SectorsHomeComponent() {
  const sectors = [
    {
      number: "01",
      title: "Automobile & garages",
      subtitle:
        "On connaît le métier, l’atelier, et la passion des pros de la route.",
      description:
        "Vidéos de présentation d’atelier, portraits de mécanos, photos d’ambiance, teasing de véhicules… Appro Production est né dans un groupe qui connaît le terrain.",
      image: "/img/sectors/1.png",
    },
    {
      number: "02",
      title: "Évènementiel",
      subtitle: "Du rythme, de l’engagement, des moments à revivre.",
      description:
        "Qu’il s’agisse d’un concert, d’un festival, d’un évènement d’entreprise ou d’une action associative, on capte ce qui se vit sur le moment : ambiance, émotions, messages et regards. Des images vraies, pensées pour durer.",
      image: "/img/sectors/4.png",
    },
    {
      number: "03",
      title: "Restauration & métiers de bouche",
      subtitle:
        "Des plats, des gestes, des moments à filmer dans le feu de l’action.",
      description:
        "Captation d’événements, mise en valeur de menus, portraits d’équipe, ambiance de service : on raconte ce qui se vit dans vos cuisines.",
      image: "/img/sectors/2.png",
    },
    {
      number: "04",
      title: "Mariages & évènements privés",
      subtitle: "Pour les particuliers aussi, on crée des souvenirs forts.",
      description:
        "Filmer des moments de vie, des instants vrais, avec émotion et justesse. On adapte notre approche à chaque couple, chaque histoire.",
      image: "/img/sectors/5.png",
    },
    {
      number: "05",
      title: "Commerces, artisans & professions libérales",
      subtitle: "Valoriser un savoir-faire, c’est notre spécialité.",
      description:
        "Que vous soyez bijoutier, coiffeur ou architecte, on met en image votre activité et vos valeurs.",
      image: "/img/sectors/3.png",
    },
  ];

  // 3 max dans la colonne gauche, le reste à droite
  const leftCount = Math.min(3, sectors.length);
  const leftCol = sectors.slice(0, leftCount);
  const rightCol = sectors.slice(leftCount);
  const lastNumber = sectors[sectors.length - 1]?.number;

  return (
    <section
      className="text-white max-w-[90%] w-[1240px] mx-auto"
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex gap-16">
        {/* Colonne gauche (intro) */}
        <div className="w-[40%] flex flex-col pt-48">
          <div>
            <p className="uppercase text-xs tracking-wide text-white">
              Secteurs
            </p>
            <h2 className="tracking-tight mt-4 text-5xl font-light leading-tight">
              Notre terrain de jeu
            </h2>
            <p className="mt-4 text-white/70 max-w-[38ch]">
              On excelle dans ces domaines… mais on aime aussi sortir de notre
              zone de confort pour explorer de nouveaux horizons !
            </p>
          </div>

          <div className="flex mt-8">
          <a
            href="#contact"
            className="group relative inline-flex items-center rounded-full font-light bg-white text-black px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
          >
            Je veux un devis
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

        {/* Colonne droite */}
        <div className="w-[60%] relative border-l border-white/10">
          {/* ligne verticale centrale */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />

          <div className="grid grid-cols-2">
            {/* Colonne gauche : jusqu'à 3 cartes */}
            <div className="flex flex-col">
              {leftCol.map((sector, idx) => (
                <Card
                  key={sector.number}
                  sector={sector}
                  side="left"
                  isFirst={idx === 0}
                  isThird={idx === 2}
                  isLast={sector.number === lastNumber}
                />
              ))}
            </div>

            {/* Colonne droite : cartes centrées verticalement */}
            <div className="flex flex-col items-stretch justify-center">
              {rightCol.map((sector) => (
                <Card
                  key={sector.number}
                  sector={sector}
                  side="right"
                  isLast={sector.number === lastNumber}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Carte secteur --- */
function Card({
  sector,
  side = "left",
  isFirst = false,
  isThird = false,
  isLast = false,
}) {
  return (
    <div
      className={[
        "relative w-full p-8 flex flex-col gap-3",
        isLast ? "" : "border-b border-white/10",
        side === "left" ? "border-l border-white/10" : "",
        side === "right" ? "border-l border-white/10" : "",
        isFirst ? "pt-48" : "",
        isThird ? "pb-48" : "",
      ].join(" ")}
    >
      {/* Image / icône arrondie */}
      <div className="h-10 w-10 overflow-hidden rounded-xl">
        <img
          src={sector.image}
          alt={sector.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Texte */}
      <h3 className="text-lg font-medium">{sector.title}</h3>
      <p className="italic text-[#FEFEA2]">{sector.subtitle}</p>
      <p className="text-white/60">{sector.description}</p>

      {/* Numéro en haut à droite */}
      <span
        className={[
          "absolute right-6 text-xs text-white/40",
          sector.number === "01" ? "top-48" : "top-4",
        ].join(" ")}
      >
        ({sector.number})
      </span>
    </div>
  );
}
