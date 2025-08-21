import BounceCards from "@/_assets/utils/bounce-card.utils";
import { useRef, useState } from "react";

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

  const [hoverPointer, setHoverPointer] = useState(false);
  const imgRef = useRef(null);

  function handleMouseMove(e) {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Dans l'image ?
    const inImg = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
    if (!inImg) return setHoverPointer(false);

    const inLeftThird = x <= rect.width / 3.1;
    const inBottomTwoThirds = y >= rect.height / 2.7; // => zone = bas 2/3

    setHoverPointer(inLeftThird && inBottomTwoThirds);
  }

  function handleClick(e) {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const inLeftThird = x <= rect.width / 3.1;
    const inBottomTwoThirds = y >= rect.height / 2.7;

    if (inLeftThird && inBottomTwoThirds) {
      window.open(
        "https://www.instagram.com/approproduction/",
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <section
      id="why-us"
      className="bg-[#F5F5F5] relative z-10 mx-auto overflow-hidden -my-[2px]"
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
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
              className="group relative inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-light shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden"
            >
              Contactez nous
              <span className="relative inline-block">
                {/* Flèche par défaut */}
                <span className="block transition-opacity duration-200 group-hover:opacity-0">
                  ↗
                </span>

                {/* Flèche animée (pas d’animation appliquée ici directement) */}
                <span className="absolute inset-0 block opacity-0 arrow-anim">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>

        <div
          className={`relative ${hoverPointer ? "cursor-pointer" : "cursor-default"}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverPointer(false)}
          onClick={handleClick}
        >
          <img
            ref={imgRef}
            src="/img/why-us/grid.webp"
            alt="grid"
            className="block"
          />

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
