import BounceCards from "@/_assets/utils/bounce-card.utils";
import { InstagramSvg } from "../_shared/_svgs/instagram.svg";

export default function WhyUsHomeComponent() {
  const images = [
    "/img/why-us/1.avif",
    "/img/why-us/2.avif",
    "/img/why-us/3.avif",
    "/img/why-us/4.avif",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
  ];

  return (
    <section
      id="why-us"
      className="bg-[#F5F5F5] relative z-10 mx-auto overflow-hidden -my-[2px]"
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="py-20 mobile:py-28 tablet:py-36 max-w-[1240px] w-[90%] mx-auto flex flex-col items-center gap-16 mobile:gap-24 tablet:gap-36">
        {/* Titre + CTA */}
        <div className="text-black max-w-[850px] flex flex-col gap-6 mobile:gap-8 items-center justify-center text-center">
          <h1 className="tracking-tighter text-[9vw] leading-[12vw] mobile:text-[54px] mobile:leading-[64px] tablet:text-[70px] tablet:leading-[75px] font-light">
            Pourquoi nous choisir
            <br />
            comme agence ?
          </h1>

          <h2 className="max-w-[600px] text-base mobile:text-lg opacity-60 font-light">
            On transforme vos idées en images, et vos images en résultats.
          </h2>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center rounded-full font-light bg-black text-white px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
            >
              Contactez nous
              <span className="relative inline-block w-6 h-6 overflow-visible">
                <span className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-11 group-hover:-translate-y-11">
                  <span className="absolute w-4 h-4 text-white opacity-100" style={{ transform: "translate(-40px, 40px)" }}>
                    ↗
                  </span>
                  <span className="absolute w-4 h-4 text-white opacity-100" style={{ transform: "translate(3px, -3px)" }}>
                    ↗
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <div className="mx-auto max-w-[1240px]">
            {/* ===== HAUT : 1 col → 2 cols ===== */}
            <div className="grid grid-cols-1 mobile:grid-cols-2 gap-6 h-[220px] mobile:h-[300px] tablet:h-[330px]">
              {/* Carte 1 */}
              <div
                className="h-full rounded-3xl p-6 mobile:p-8 tablet:p-9 flex flex-col justify-end bg-no-repeat bg-cover bg-center relative text-white"
                style={{ backgroundImage: "url('/img/why-us/card-1.avif')" }}
              >
                {/* Overlay dégradé bas → haut */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/25 via-black/0 to-transparent" />

                <img
                  src="/img/why-us/picto-1.avif"
                  className="absolute top-6 right-6 tablet:top-10 tablet:right-9 max-w-4"
                  alt="picto"
                />

                <div className="relative z-10">
                  <h2 className="text-4xl mobile:text-5xl tablet:text-7xl">2022</h2>
                  <p className="text-lg mt-1 mobile:mt-2">La force d'un groupe</p>
                  <p className="opacity-90">
                    Appro Production, c’est une filiale du groupe Appro :
                    solide, structuré, fiable.
                  </p>
                </div>
              </div>

              {/* Carte 2 */}
              <div
                className="hidden h-full rounded-3xl p-6 mobile:p-8 tablet:p-9 mobile:flex flex-col justify-end bg-no-repeat bg-cover bg-center relative text-black"
                style={{ backgroundImage: "url('/img/why-us/card-2.avif')" }}
              >
                <h3 className="text-xl mobile:text-2xl font-semibold">
                  Des vidéos et des photos qui marquent
                </h3>
                <p className="opacity-70 mt-2">
                  Des formats vivants, humains, efficaces. Qui laissent une
                  trace.
                </p>
              </div>
            </div>

            {/* ===== BAS : 1 → 2 → 3 colonnes ===== */}
            <div className="mt-6 grid gap-6 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 auto-rows-[200px] mobile:auto-rows-[220px] tablet:auto-rows-[200px]">
              {/* Grande carte gauche (span 3 lignes dès tablet) */}
              <div
                className="
                  rounded-3xl p-6 mobile:p-8 flex flex-col bg-no-repeat bg-cover bg-center relative
                  tablet:col-start-1 tablet:col-end-2 tablet:row-start-1 tablet:row-end-4
                "
                style={{ backgroundImage: "url('/img/why-us/card-3-1.avif')" }}
              >
                <InstagramSvg
                  fillColor="#7E7E7F"
                  className="absolute top-6 right-6 tablet:top-10 tablet:right-9"
                  width={23}
                  height={24}
                />

                <img
                  src="/img/why-us/card-3-2.avif"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-[20px] w-[78%] mobile:w-[70%] hidden tablet:block"
                  alt="instagram"
                />

                <h4 className="text-xl mobile:text-2xl font-semibold">
                  Découvrez les coulisses
                  <br />
                  sur Instagram
                </h4>

                <a
                  href="https://www.instagram.com/approproduction/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 group w-fit relative inline-flex items-center rounded-full font-light bg-white text-black px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
                >
                  Suivez-nous
                  <span className="relative inline-block w-6 h-6 overflow-visible">
                    <span className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-11 group-hover:-translate-y-11">
                      <span className="absolute w-4 h-4 text-black opacity-100" style={{ transform: "translate(-40px, 40px)" }}>
                        ↗
                      </span>
                      <span className="absolute w-4 h-4 text-black opacity-100" style={{ transform: "translate(3px, -3px)" }}>
                        ↗
                      </span>
                    </span>
                  </span>
                </a>
              </div>

              {/* 2x1 (span 2 lignes) */}
              <div
                className="
                  text-white rounded-3xl justify-end p-6 mobile:p-8 flex flex-col bg-no-repeat bg-cover bg-center relative
                  tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3
                "
                style={{ backgroundImage: "url('/img/why-us/card-4.avif')" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                <img
                  src="/img/why-us/picto-4.avif"
                  className="absolute top-6 right-6 tablet:top-10 tablet:right-9 max-w-6"
                  alt="picto"
                />
                <h4 className="text-xl mobile:text-2xl font-semibold z-10">Des projets utiles</h4>
                <p className="mt-2 z-10">
                  Chaque image sert un objectif : attirer, fidéliser, faire
                  comprendre ou faire ressentir.
                </p>
              </div>

              {/* 1x1 */}
              <div className="rounded-3xl p-6 mobile:p-8 justify-end flex flex-col bg-white relative tablet:col-start-2 tablet:col-end-3 tablet:row-start-3 tablet:row-end-4">
                <img
                  src="/img/why-us/picto-5.avif"
                  className="absolute top-6 right-6 tablet:right-9 max-w-[35%]"
                  alt="picto"
                />
                <h4 className="text-5xl mobile:text-6xl tablet:text-7xl font-semibold">60+</h4>
                <p className="opacity-70 mt-2">Clients satisfaits</p>
              </div>

              {/* 1x1 */}
              <div
                className="
                  rounded-3xl justify-end p-6 mobile:p-8 flex flex-col bg-no-repeat bg-cover bg-center relative
                  tablet:col-start-3 tablet:col-end-4 tablet:row-start-1 tablet:row-end-2
                "
                style={{ backgroundImage: "url('/img/why-us/card-6.avif')" }}
              >
                <img
                  src="/img/why-us/picto-6.avif"
                  className="absolute top-6 right-6 tablet:top-10 tablet:right-9 max-w-6"
                  alt="picto"
                />
                <h4 className="text-xl mobile:text-2xl font-semibold">Une vraie relation humaine</h4>
                <p className="opacity-70 mt-2">
                  Pas de process à rallonge. On vous écoute, on vous comprend,
                  on avance ensemble.
                </p>
              </div>

              {/* 1x2 (span 2 lignes) */}
              <div
                className="
                  rounded-3xl text-white justify-end p-6 mobile:p-8 flex flex-col bg-no-repeat bg-cover bg-center relative
                  tablet:col-start-3 tablet:col-end-4 tablet:row-start-2 tablet:row-end-4
                "
                style={{ backgroundImage: "url('/img/why-us/card-7.avif')" }}
              >
                <img
                  src="/img/why-us/picto-7.avif"
                  className="absolute top-6 right-6 tablet:top-10 tablet:right-9 max-w-6"
                  alt="picto"
                />
                <h4 className="text-xl mobile:text-2xl font-semibold">Spécialistes de l’image</h4>
                <p className="opacity-70 mt-2">
                  Vidéo, photo, réseaux : on maîtrise les outils pour valoriser
                  ce que vous faites.
                </p>
              </div>
            </div>
          </div>

          {/* BounceCards — visible dès mobile, masqué en très petit écran */}
          <div className="hidden mobile:block absolute -top-8 tablet:-top-12 right-4 tablet:right-6 desktop:right-[50px]">
            <div className="origin-top-right scale-[0.8] tablet:scale-90 desktop:scale-100">
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={400}
                containerHeight={250}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
