import BounceCards from "@/_assets/utils/bounce-card.utils";

export default function WhyUsHomeComponent() {
  const images = [
    "/img/why-us/1.png",
   "/img/why-us/2.png",
    "/img/why-us/3.png",
    "/img/why-us/4.png",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
  ];

  return (
    <section
      className="bg-[#F5F5F5] relative z-10 mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="pt-24 pb-24 max-w-[1240px] w-[90%] mx-auto flex flex-col items-center gap-36">
        <div className="text-darkBlue max-w-[850px] flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="font-light uppercase opacity-40 tracking-tight">
            Tagline
          </h2>
          <h1 className="text-[9vw] leading-[12vw] mobile:leading-[75px] tablet:text-[70px] font-light">
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
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow"
            >
              Contactez nous <span className="font-light">↗</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <img src="/img/why-us/grid.webp" alt="grid"/>

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
