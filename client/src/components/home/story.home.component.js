"use client";
import Image from "next/image";

const TEAM = [
  {
    name: "Laurent",
    role: "Fondateur & vidéaste",
    img: "/img/story/laurent.avif",
    about:
      "Il conçoit et réalise les vidéos pour les clients d’Appro Production. Il pilote les projets audiovisuels de A à Z : préparation, tournage, montage et livraison. Il définit aussi la vision globale de l’entreprise et accompagne les clients dans leurs projets.",
  },
  {
    name: "Margaux",
    role: "Alternante communication & réseaux sociaux",
    img: "/img/story/margaux.avif",
    about:
      "Elle gère la création de contenus visuels (photos, retouches, visuels pour les réseaux sociaux). Elle organise et met en place la stratégie de communication et le marketing digital, tout en contribuant aux projets audiovisuels.",
  },
  {
    name: "Léa",
    role: "Photographe & responsable communication",
    img: "/img/story/lea.avif",
    about:
      "Photographe, elle coordonne les prises de vues, gère la direction artistique et le suivi de production. Elle veille à la cohérence de marque et à l’impact des images sur tous les supports.",
  },
  {
    name: "Jade",
    role: "Alternante communication digitale",
    img: "/img/story/jade.avif",
    about:
      "Elle participe à la création de contenus (visuels, stories, making-of), anime les réseaux sociaux et contribue à la planification des publications. Elle aide aussi à la préparation des tournages et à la mise en place des projets marketing.",
  },
];

export default function StoryHomeComponent() {
  return (
    <section
      id="story"
      className="bg-[#F5F5F5] py-36 z-10 relative"
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-[#EAEAEA] max-w-[1240px] w-[90%] mx-auto rounded-[20px] p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-2 gap-10">
          {/* Colonne gauche : titre + texte + CTA */}
          <div className="rounded-[18px]ring-1 ring-black/5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-black/50">
                À propos
              </p>
              <h2 className="tracking-tight mt-4 text-5xl leading-tight font-light text-black">
                Notre histoire
              </h2>
            </div>

            <div className="mt-10 max-w-[48ch] text-black/50 flex flex-col gap-4">
              <p className="leading-relaxed">
                Appro Production est née de l’envie d’élargir les services du
                groupe Appro, fondé par Bastien et Mickaël, en y ajoutant la
                photo, la vidéo et la communication digitale.
              </p>
              <p className="leading-relaxed">
                Laurent, vidéaste et fondateur, s’entoure rapidement d’une
                équipe complémentaire : Margaux, en alternance depuis 2 ans déjà
                dans le groupe Appro, Léa, photographe et responsable
                communication, et Jade, dernière arrivée en alternance marketing
                digital.
              </p>
              <p className="leading-relaxed">
                Ensemble, nous mettons nos talents au service des entreprises et
                des particuliers, avec la même exigence qui fait la force du
                groupe Appro.
              </p>
            </div>
          </div>

          {/* Colonne droite : cartes en 2×2 */}
          <div className="grid grid-cols-2 gap-6">
            {TEAM.map((m, i) => (
              <FlipCard key={m.name} member={m} darkBack={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= */
/*          FLIP  CARD           */
/* ============================= */
function FlipCard({ member, darkBack = false }) {
  return (
    <div
      className="group relative [perspective:1200px]"
      aria-label={`${member.name} – ${member.role}`}
    >
      {/* inner */}
      <div
        className={[
          "relative h-[320px] w-full rounded-[20px]",
          "transition-transform duration-500",
          "[transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)]",
          "ring-1 ring-black/10",
          "bg-white",
        ].join(" ")}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[20px] overflow-hidden [backface-visibility:hidden]"
          style={{ WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0">
            <Image
              src={member.img}
              alt={member.name}
              layout="fill"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>

          {/* bouton + */}
          <span className="absolute top-3 right-3 h-6 w-6 grid place-items-center rounded-full bg-white/90 text-black text-sm shadow">
            +
          </span>

          {/* texte */}
          <div className="absolute left-4 right-4 bottom-4 text-white drop-shadow">
            <h3 className="text-xl font-medium">{member.name}</h3>
            <p className="text-sm opacity-90">{member.role}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={[
            "absolute inset-0 rounded-[20px] p-6 sm:p-7",
            "bg-[#111]/90 text-white",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            "flex",
          ].join(" ")}
          style={{ WebkitBackfaceVisibility: "hidden" }}
        >
          {/* bouton + (mirroir) */}
          <span
            className={[
              "absolute top-3 right-3 h-6 w-6 grid place-items-center rounded-full",
              "bg-white/90 text-black",
              "text-sm shadow",
            ].join(" ")}
          >
            +
          </span>

          <div className="my-auto">
            <h4 className="text-lg font-medium mb-2">{member.name}</h4>
            <p className="text-sm opacity-80 leading-relaxed">{member.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
