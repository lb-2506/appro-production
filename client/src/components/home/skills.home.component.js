import { useEffect, useRef, useState } from "react";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { skillsData } from "@/_assets/data/skills.data";

export default function SkillsHomeComponent() {
  const { t } = useTranslation("skills");
  const containerRef = useRef(null);
  const progressContainerRef = useRef(null);
  const numberRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [activeNumbers, setActiveNumbers] = useState(
    new Array(skillsData.length).fill(false)
  );

  const targetProgressRef = useRef(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && progressContainerRef.current) {
        const parentRect = containerRef.current.getBoundingClientRect();
        const totalScroll = parentRect.height - window.innerHeight;
        const newProgress =
          totalScroll > 0
            ? Math.min(Math.max(-parentRect.top / totalScroll, 0), 1)
            : 1;
        targetProgressRef.current = newProgress;

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
          const padding = 12;
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

  useEffect(() => {
    progressRef.current = progress;

    const tick = () => {
      const current = progressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * 0.18;

      progressRef.current = next;
      setProgress(next);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="bg-[#FFFFFF] relative z-10 mx-auto"
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="pt-24 pb-48 max-w-[90%] mx-auto flex flex-col items-center gap-36">
        <div className="text-darkBlue max-w-[850px] flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="tracking-tight font-light uppercase opacity-40">
            Notre process
          </h2>
          <h1 className="tracking-tighter text-[9vw] leading-[12vw] mobile:leading-[85px] tablet:text-[70px] font-light">
            On vous écoute, on
            <br />
            s'adapte, on crée.
          </h1>

          <h2 className="max-w-[600px] text-lg opacity-60 font-light">
            Avec la rigueur d'un groupe et l'agilité d'une équipe proche de
            vous.
          </h2>

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

        <div
          ref={progressContainerRef}
          className="relative flex flex-col gap-6 tablet:gap-0 max-w-[1200px]"
        >
          <div className="hidden tablet:block absolute w-[2px] h-full left-1/2 -translate-x-1/2 bg-[#EDEEF1]">
            <span
              className="absolute w-[2px] -translate-x-[2px] bg-black/20 h-full origin-top"
              style={{
                transform: `scaleY(${progress})`,
                willChange: "transform",
                top: 0,
              }}
            />
          </div>

          {skillsData.map((data, i) => (
            <div
              key={i}
              className={`relative flex flex-col tablet:flex-row items-stretch justify-center ${i % 2 ? "" : "tablet:flex-row-reverse"}`}
            >
              {/* Bloc texte/image */}
              <div
                className={`relative w-full tablet:w-1/2 flex flex-col justify-center gap-4 font-extralight bg-[#C6D3CA] bg-opacity-10 rounded-[20px] transition-opacity duration-700`}
                style={{ opacity: activeNumbers[i] ? 1 : 0.1 }}
              >
                <img
                  src="/img/skills/angle.avif"
                  alt="angle"
                  className="absolute top-0 left-0 max-w-[50px] -translate-x-[2px] -translate-y-[2px]"
                />
                <img
                  src="/img/skills/angle.avif"
                  alt="angle"
                  className="absolute top-0 right-0 max-w-[50px] rotate-90 -translate-x-[3px] -translate-y-[6px]"
                />
                <img
                  src="/img/skills/angle.avif"
                  alt="angle"
                  className="absolute bottom-0 left-0 max-w-[50px] -rotate-90 translate-x-[3px] translate-y-[6px]"
                />
                <img
                  src="/img/skills/angle.avif"
                  alt="angle"
                  className="absolute bottom-0 right-0 max-w-[50px] rotate-180 translate-x-[2px] translate-y-[2px]"
                />
                <div className="flex justify-between">
                  <p className="uppercase opacity-40 p-8 pb-0">{data.step}</p>
                  <img
                    src={data.picto}
                    className=" bg-white/60 h-9 w-9 m-8 mb-0 p-2 rounded-md"
                    alt="picto"
                  />
                </div>
                <h3 className="text-4xl tracking-tight px-8">{data.title}</h3>
                <p className="p-8 pt-0 opacity-60 font-light">{data.content}</p>
              </div>

              {/* Gros point */}
              <div className="hidden w-[200px] tablet:flex justify-center text-sm">
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  style={{
                    backgroundImage: "url('/img/bg-noise.webp')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "100%",
                  }}
                  className={`z-[2] bg-[#FFFFFF] h-fit ${
                    i === 0 ? "" : "mt-12"
                  } transition-colors duration-700 ${
                    activeNumbers[i] ? "text-black/30" : "text-black/10"
                  }`}
                >
                  ●
                </span>
              </div>

              <div className="tablet:bg-[#F5F5F5] w-full tablet:w-1/2 rounded-3xl relative mt-12 tablet:mt-0 scale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
