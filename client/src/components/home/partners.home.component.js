// I18N
import { useTranslation } from "next-i18next";

export default function PartnersHomeComponent() {
  const { t } = useTranslation("partners");

  return (
    <section
      className="bg-white text-darkBlue relative"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <img
        src="/img/food/cherry-2.png"
        alt="cherry"
        className="absolute right-[10%] top-0 max-w-[8%] min-w-[50px] -rotate-6"
      />

      <img
        src="/img/food/lemon-2.png"
        alt="lemon"
        className="absolute left-[10%] bottom-[15%] max-w-[8%] min-w-[50px] -rotate-6"
      />

      <div className="flex max-w-[90%] mx-auto rounded-b-[48px] justify-center items-center relative overflow-hidden pt-36 py-24">
        <div className="max-w-[850px] flex flex-col gap-8 items-center justify-center text-center z-[3]">
          <h1
            className="text-[9vw] leading-[12vw] mobile:leading-[85px] tablet:text-[80px]  flex flex-col gap-3"
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          >
            {t("food.title")}
          </h1>

          <h2 className="max-w-[550px] opacity-70 font-light text-lg">
            {t("food.subtitle")}
          </h2>

          <div className="text-sm flex items-center gap-4">
            <img
              src="/img/food/list-resto.png"
              alt="list"
              className="max-w-[120px]"
            />
            <div>
              <span className="font-bold">30</span> {t("food.users")}
            </div>
          </div>

          <button
            className="bg-darkBlue text-white px-4 py-2 rounded-full w-fit  flex items-center gap-3 group"
            data-cal-namespace="appel-decouverte-30-min"
            data-cal-link="modjoystudio/appel-decouverte-30-min"
            data-cal-config='{"layout":"month_view"}'
          >
            {t("food.button")}
          </button>
        </div>
      </div>
    </section>
  );
}
