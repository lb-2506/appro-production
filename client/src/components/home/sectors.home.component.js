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
      image: "/img/sectors/1.avif",
    },
    {
      number: "02",
      title: "Évènementiel",
      subtitle: "Du rythme, de l’engagement, des moments à revivre.",
      description:
        "Qu’il s’agisse d’un concert, d’un festival, d’un évènement d’entreprise ou d’une action associative, on capte ce qui se vit sur le moment : ambiance, émotions, messages et regards. Des images vraies, pensées pour durer.",
      image: "/img/sectors/4.avif",
    },
    {
      number: "03",
      title: "Restauration & métiers de bouche",
      subtitle:
        "Des plats, des gestes, des moments à filmer dans le feu de l’action.",
      description:
        "Captation d’événements, mise en valeur de menus, portraits d’équipe, ambiance de service : on raconte ce qui se vit dans vos cuisines.",
      image: "/img/sectors/2.avif",
    },
    {
      number: "04",
      title: "Mariages & évènements privés",
      subtitle: "Pour les particuliers aussi, on crée des souvenirs forts.",
      description:
        "Filmer des moments de vie, des instants vrais, avec émotion et justesse. On adapte notre approche à chaque couple, chaque histoire.",
      image: "/img/sectors/5.avif",
    },
    {
      number: "05",
      title: "Commerces, artisans & professions libérales",
      subtitle: "Valoriser un savoir-faire, c’est notre spécialité.",
      description:
        "Que vous soyez bijoutier, coiffeur ou architecte, on met en image votre activité et vos valeurs.",
      image: "/img/sectors/3.avif",
    },
  ];

  // 3 max dans la colonne gauche, le reste à droite
  const leftCount = Math.min(3, sectors.length);
  const leftCol = sectors.slice(0, leftCount);
  const rightCol = sectors.slice(leftCount);
  const lastNumber = sectors[sectors.length - 1]?.number;

  return (
    <section
      className="text-white w-full max-w-[1240px] mx-auto px-5 mobile:px-8 tablet:px-0"
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Conteneur en grille : 1 col base, 2 cols dès tablet */}
      <div
        className="
          grid grid-cols-1 gap-12 tablet:gap-16
          tablet:grid-cols-[0.45fr_0.55fr]
        "
      >
        {/* Colonne gauche (intro) */}
        <div className="flex flex-col pt-16 mobile:pt-24 tablet:pt-48">
          <div>
            <p className="uppercase text-xs tracking-wide text-white">
              Secteurs
            </p>
            <h2
              className="
                tracking-tight mt-4 font-light leading-tight
                text-3xl mobile:text-4xl tablet:text-5xl
              "
            >
              Notre terrain de jeu
            </h2>
            <p className="mt-4 text-white/70 max-w-[42ch]">
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
                    className="absolute w-4 h-4 text-black opacity-100"
                    style={{ transform: "translate(-40px, 40px)" }}
                  >
                    ↗
                  </span>
                  <span
                    className="absolute w-4 h-4 text-black opacity-100"
                    style={{ transform: "translate(3px, -3px)" }}
                  >
                    ↗
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Colonne droite */}
        <div
          className="
            relative
            border-t border-white/10 tablet:border-t-0 tablet:border-l tablet:border-white/10
            pt-6 tablet:pt-0
          "
        >
          {/* ligne verticale centrale — uniquement dès tablet */}
          <div className="hidden tablet:block pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />

          <div className="grid grid-cols-1 tablet:grid-cols-2">
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

            {/* Colonne droite : cartes centrées verticalement (dès tablet) */}
            <div className="flex flex-col items-stretch tablet:justify-center">
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
        "relative w-full p-6 mobile:p-8 flex flex-col gap-3",
        isLast ? "" : "border-b border-white/10",
        // Bordure latérale uniquement dès tablet pour éviter la double bordure en mobile
        side === "left" ? "tablet:border-l tablet:border-white/10" : "",
        side === "right" ? "tablet:border-l tablet:border-white/10" : "",
        // Grands espacements atténués en mobile
        isFirst ? "pt-10 mobile:pt-14 tablet:pt-48" : "",
        isThird ? "pb-10 mobile:pb-14 tablet:pb-48" : "",
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
      <h3 className="text-base mobile:text-lg font-medium">{sector.title}</h3>
      <p className="italic text-[#FEFEA2]">{sector.subtitle}</p>
      <p className="text-white/60">{sector.description}</p>

      {/* Numéro en haut à droite (position adaptée mobile/tablet) */}
      <span
        className={[
          "absolute right-6 text-xs text-white/40",
          // En mobile on garde proche du bord; en tablet on remonte beaucoup sur la 1ère carte
          isFirst ? "top-6 tablet:top-48" : "top-6 tablet:top-4",
        ].join(" ")}
      >
        ({sector.number})
      </span>
    </div>
  );
}
