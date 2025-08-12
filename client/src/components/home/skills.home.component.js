import { useEffect, useRef, useState } from "react";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { skillsFoodData } from "@/_assets/data/skills.food.data";

export default function SkillsHomeComponent() {
  const { t } = useTranslation("skills");
  const containerRef = useRef(null);
  const progressContainerRef = useRef(null);
  const numberRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [activeNumbers, setActiveNumbers] = useState(
    new Array(skillsFoodData.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && progressContainerRef.current) {
        const parentRect = containerRef.current.getBoundingClientRect();
        const totalScroll = parentRect.height - window.innerHeight;
        const newProgress =
          totalScroll > 0
            ? Math.min(Math.max(-parentRect.top / totalScroll, 0), 1)
            : 1;
        setProgress(newProgress);

        const progressRect =
          progressContainerRef.current.getBoundingClientRect();
        const offset = progressRect.top - parentRect.top;
        const newActiveNumbers = numberRefs.current.map((el, idx) => {
          if (!el) return false;
          if (idx === 0) return true;
          const elRect = el.getBoundingClientRect();
          const relativeTop = elRect.top - parentRect.top - offset;
          let triggerFactor = 0.5;
          if (idx === 1 || idx === 2) triggerFactor = 0.4;
          if (idx === 4) triggerFactor = 0.6;
          const padding = 28;
          const triggerPoint =
            relativeTop + elRect.height * triggerFactor - padding;
          return triggerPoint <= newProgress * progressRect.height;
        });
        setActiveNumbers(newActiveNumbers);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="bg-[#F5F5F5] relative z-10 mx-auto"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="pt-24 pb-48 max-w-[90%] mx-auto flex flex-col items-center gap-12">
        <div className="text-darkBlue max-w-[850px] flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="font-light uppercase bg-white border border-black border-opacity-10 w-fit rounded-full px-4 py-1">
            {t("food.sectionName")}
          </h2>
          <h1
            className="text-[9vw] leading-[12vw] mobile:leading-[85px] tablet:text-[80px] flex flex-col gap-3"
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          >
            {t("food.title")}
          </h1>

          <h3 className="max-w-[650px] text-lg opacity-80 font-light">
            {t("food.subtitle")}
          </h3>
        </div>

        <div
          ref={progressContainerRef}
          className="relative flex flex-col gap-12 tablet:gap-36 max-w-[1200px]"
        >
          <div className="hidden tablet:block absolute w-[2px] h-full left-1/2 -translate-x-1/2 bg-[#EDEEF1]">
            <span
              style={{
                height: `${progress * 100}%`,
                top: 0,
              }}
              className="absolute w-[2px] left-1/2 -translate-x-1/2 bg-lightBlue"
            />
          </div>

          {skillsFoodData.map((data, i) => (
            <div
              key={i}
              className={`flex flex-col tablet:flex-row items-stretch justify-center ${i % 2 ? "tablet:flex-row-reverse" : ""}`}
            >
              <div className="w-full tablet:w-1/2 flex flex-col justify-center gap-8">
                <h4
                  style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
                  className="text-3xl"
                >
                  {t(data.title)}
                </h4>

                <p className="opacity-60 font-light leading-8">
                  {t(data.content)}
                </p>

                <button
                  className="bg-darkBlue text-white px-4 py-2 rounded-full w-fit flex items-center gap-3 group"
                  data-cal-namespace="appel-decouverte-30-min"
                  data-cal-link="modjoystudio/appel-decouverte-30-min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  {t(data.button)}
                </button>
              </div>

              <div
                className="hidden w-[200px] tablet:flex justify-center text-3xl"
                style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
              >
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  style={{
                    backgroundImage: "url('/img/food/bg-noise.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "100%",
                  }}
                  className={`z-[2] bg-lightGrey h-fit ${i === 0 ? "pb-4" : "-mt-4 py-4"} ${activeNumbers[i] ? "text-lightBlue" : ""}`}
                >
                  {`0${i + 1}`}
                </span>
              </div>

              <div className="tablet:bg-[#EDEEF1] w-full tablet:w-1/2 rounded-3xl relative mt-12 tablet:mt-0">
                <img
                  src={data.img}
                  alt="gusto-manager"
                  className={`relative tablet:absolute tablet:max-w-[70%] top-1/2 tablet:-translate-y-1/2 ${i % 2 ? "tablet:-left-10" : "tablet:-right-10"}`}
                />

                {i === 0 && (
                  <img
                    src="/img/food/watermelon.png"
                    alt="picto"
                    className="hidden tablet:block absolute max-w-[90px] -right-[40px] -top-[25px]"
                  />
                )}

                {i === 1 && (
                  <img
                    src="/img/food/cherry.png"
                    alt="picto"
                    className="hidden tablet:block absolute max-w-[80px] -right-[30px] top-1/2 -translate-y-1/2 rotate-45"
                  />
                )}

                {i === 2 && (
                  <img
                    src="/img/food/broccoli.png"
                    alt="picto"
                    className="hidden tablet:block absolute max-w-[90px] -left-[30px] -bottom-[30px] transform scale-x-[-1]"
                  />
                )}

                {i === 3 && (
                  <img
                    src="/img/food/strawberry.png"
                    alt="picto"
                    className="hidden tablet:block absolute max-w-[70px] -left-[30px] -bottom-[30px]"
                  />
                )}

                {i === 4 && (
                  <img
                    src="/img/food/carrot.png"
                    alt="picto"
                    className="hidden tablet:block absolute max-w-[70px] -left-[30px] -bottom-[30px]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
