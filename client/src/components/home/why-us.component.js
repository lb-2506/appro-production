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
      <div className="py-36 max-w-[1240px] w-[90%] mx-auto flex flex-col items-center gap-36">
        <div className="text-black max-w-[850px] flex flex-col gap-8 items-center justify-center text-center">
          <h1 className="tracking-tighter text-[9vw] leading-[12vw] mobile:leading-[75px] tablet:text-[70px] font-light">
            Pourquoi nous choisir
            <br />
            comme agence ?
          </h1>

          <h3 className="max-w-[600px] text-lg opacity-60 font-light">
            On transforme vos idées en images, et vos images en résultats.
          </h3>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center rounded-full font-light bg-black text-white px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
            >
              Contactez nous
              <span className="relative inline-block w-6 h-6 overflow-visible">
                <span className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-11 group-hover:-translate-y-11">
                  <span
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-4 h-4 text-white opacity-100"
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
                    className="absolute w-4 h-4 text-white opacity-100"
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

        <div className="relative">
          <div className="mx-auto max-w-[1240px]">
            {/* ===== HAUT : 2 colonnes ===== */}
            <div className="grid grid-cols-2 gap-6 h-[330px]">
              {/* div1 : 1 / 1 / 2 / 2 */}
              <div
                className="h-full rounded-3xl p-9 flex flex-col justify-end bg-no-repeat bg-cover bg-center relative text-white"
                style={{ backgroundImage: "url('/img/why-us/card-1.avif')" }}
              >
                {/* Overlay dégradé bas → haut */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-black/0 to-transparent" />

                <img
                  src="/img/why-us/picto-1.avif"
                  className="absolute top-10 right-9 max-w-4"
                  alt="picto"
                />

                {/* Contenu */}
                <div className="relative z-10">
                  <h2 className="text-7xl">2022</h2>
                  <p className="text-xl mt-2">La force d'un groupe</p>

                  <p className="opacity-90">
                    Appro Production, c’est une filiale du groupe Appro :
                    solide, structuré, fiable.
                  </p>
                </div>
              </div>

              {/* div2 : 1 / 2 / 2 / 3 */}
              <div
                className="h-full rounded-3xl p-9 flex flex-col justify-end bg-no-repeat bg-cover bg-center relative"
                style={{ backgroundImage: "url('/img/why-us/card-2.avif')" }}
              >
                <h3 className="text-2xl font-semibold">
                  Des vidéos et des photos qui marquent
                </h3>
                <p className="opacity-70 mt-2">
                  Des formats vivants, humains, efficaces. Qui laissent une
                  trace.
                </p>
              </div>
            </div>

            {/* ===== BAS : 3x3 avec tes grid-areas ===== */}
            <div className="mt-6 grid  gap-6 grid-cols-3 auto-rows-[200px]">
              {/* div1 { grid-area: 1 / 1 / 4 / 2; } */}
              <div
                className="rounded-3xl p-9 col-start-1 col-end-2 row-start-1 row-end-4 h-[auto] flex flex-col bg-no-repeat bg-cover bg-center relative"
                style={{ backgroundImage: "url('/img/why-us/card-3-1.avif')" }}
              >
                <InstagramSvg
                  fillColor="#7E7E7F"
                  className="absolute top-10 right-9"
                  width={23}
                  height={24}
                />

                <img
                  src="/img/why-us/card-3-2.avif"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-[20px] max-w-[70%]"
                />

                <h4 className="text-2xl font-semibold">
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

              {/* div2 { grid-area: 1 / 2 / 3 / 3; } */}
              <div
                className="text-white rounded-3xl justify-end p-9 col-start-2 col-end-3 row-start-1 row-end-3 h-[auto] flex flex-col bg-no-repeat bg-cover bg-center relative"
                style={{ backgroundImage: "url('/img/why-us/card-4.avif')" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-black/0 to-transparent" />

                <img
                  src="/img/why-us/picto-4.avif"
                  className="absolute top-10 right-9 max-w-6"
                  alt="picto"
                />

                <h4 className="text-2xl font-semibold z-10">
                  Des projets utiles
                </h4>
                <p className="mt-2 z-10">
                  Chaque image sert un objectif : attirer, fidéliser, faire
                  comprendre ou faire ressentir.
                </p>
              </div>

              {/* div3 { grid-area: 3 / 2 / 4 / 3; } */}
              <div className="rounded-3xl p-9 justify-end col-start-2 col-end-3 row-start-3 row-end-4 h-auto flex flex-col bg-white relative">
                <img
                  src="/img/why-us/picto-5.avif"
                  className="absolute top-6 right-9 max-w-[35%]"
                  alt="picto"
                />

                <h4 className="text-7xl font-semibold">60+</h4>
                <p className="opacity-70 mt-2">Clients satisfaits</p>
              </div>

              {/* div4 { grid-area: 1 / 3 / 2 / 4; } */}
              <div
                className="rounded-3xl justify-end p-6 col-start-3 col-end-4 row-start-1 row-end-2 h-auto flex flex-col bg-no-repeat bg-cover bg-center relative"
                style={{ backgroundImage: "url('/img/why-us/card-6.avif')" }}
              >
                <img
                  src="/img/why-us/picto-6.avif"
                  className="absolute top-10 right-9 max-w-6"
                  alt="picto"
                />

                <h4 className="text-2xl font-semibold">
                  Une vraie relation humaine
                </h4>
                <p className="opacity-70 mt-2">
                  Pas de process à rallonge. On vous écoute, on vous comprend,
                  on avance ensemble.
                </p>
              </div>

              {/* div5 { grid-area: 2 / 3 / 4 / 4; } */}
              <div
                className="rounded-3xl text-white justify-end p-9 col-start-3 col-end-4 row-start-2 row-end-4 h-auto flex flex-col bg-no-repeat bg-cover bg-center relative"
                style={{ backgroundImage: "url('/img/why-us/card-7.avif')" }}
              >
                <img
                  src="/img/why-us/picto-7.avif"
                  className="absolute top-10 right-9 max-w-6"
                  alt="picto"
                />

                <h4 className="text-2xl font-semibold">
                  Spécialistes de l’image
                </h4>
                <p className="opacity-70 mt-2">
                  Vidéo, photo, réseaux : on maîtrise les outils pour valoriser
                  ce que vous faites.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-12 right-[50px]">
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
    </section>
  );
}
