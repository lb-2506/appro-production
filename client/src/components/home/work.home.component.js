// I18N
import { useTranslation } from "next-i18next";

// DATA
import { workData } from "@/_assets/data/work.data";

// COMPONENTS
import BallBouncingComponent from "../../_shared/bouncing/ball.bouncing.component";

export default function WorkHomeComponent() {
  const { t } = useTranslation("work");

  return (
    <section id="work" className="bg-darkGreen relative">
      <div className="py-24 max-w-[80%] mx-auto flex flex-col tablet:flex-row gap-12 pb-48">
        <div className="text-creamy flex flex-col gap-6 tablet:w-1/2">
          <h1>{t("sectionName")}</h1>

          <h2
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-3xl tablet:text-5xl max-w-[550px]"
          >
            {t("title")}
          </h2>

          {/* <button
            data-cal-namespace="appel-decouverte-30-min"
            data-cal-link="modjoystudio/appel-decouverte-30-min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-orange text-darkGreen px-4 py-2 rounded-2xl w-fit"
          >
            {t("button")}
          </button> */}
        </div>

        <div className="relative tablet:w-1/2">
          <div className="mt-6 flex flex-col gap-12">
            {workData.map((data, i) => (
              <div key={i} className="flex gap-12 text-creamy z-10">
                <p
                  className={`${data.color} border-8 border-darkGreen min-w-[46px] max-h-[46px] text-darkGreen rounded-xl flex items-center justify-center`}
                >
                  {data.id}
                </p>
                <div>
                  <h2
                    className="text-2xl"
                    style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
                  >
                    {t(data.title)}
                  </h2>

                  <p
                    className="opacity-70 pt-3"
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  >
                    {t(data.content)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="absolute w-[2px] h-full left-[23px] -translate-x-1/2 top-0 bottom-0 bg-creamy" />
        </div>
      </div>

      <BallBouncingComponent />
    </section>
  );
}
