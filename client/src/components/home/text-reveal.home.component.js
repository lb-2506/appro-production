import ScrollReveal from "@/_assets/utils/scroll-reveal.utils";

export default function TextRevealHomeComponent() {
  return (
    <section
      className="bg-[#F5F5F5] py-24 relative z-10 -my-[2px]"
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[900px] mx-auto tracking-tighter">
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          baseRotation={0}
          blurStrength={10}
        >
          <div className="reveal-block block text-right">
            Des projets, des rencontres,
            <br />
            des histoires à raconter.
          </div>

          <div className="reveal-block block text-left py-12">
            Derrière chaque logo, il y a une
            <br />
            équipe, un lieu, un savoir-faire.
          </div>

          <div className="reveal-block block text-right">
            On les a filmés,
            <br />
            photographiés, mis en lumière.
            <br />
            Et ce n'est que le début.
          </div>

          <div className="reveal-block block pt-12">
            <div
              className="flex gap-4 items-center text-base leading-tight justify-end"
              data-nosplit
            >
              <img
                src="/img/text-reveal/img-reveal.png"
                className="h-12 w-12 rounded-2xl object-cover"
                alt="Appro Production"
              />
              <div>
                <span className="block font-semibold">Appro Production</span>
                <span className="block text-sm opacity-70">
                  Agence de production audiovisuelle
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
