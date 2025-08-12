// I18N
import { useTranslation } from "next-i18next";

// DATA
import { teamFoodData } from "@/_assets/data/team.food.data";

export default function TeamHomeComponent() {
  const { t } = useTranslation("team");

  return (
    <section
      id="team"
      className="bg-white relative"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <img
        className="absolute max-w-[75%] left-1/3 -rotate-45 top-02 -translate-x-1/2 z-[2]"
        src="/img/food/bg-plate.webp"
        alt="bg-plate"
      />

      <div className="max-w-[90%] w-[1200px] text-darkBlue mx-auto py-12 tablet:py-24 tablet:pb-48 bg-white flex flex-col gap-8">
        <div className="flex flex-col items-center tablet:items-start gap-6 z-[3]">
          <h2 className="font-light uppercase border border-black border-opacity-10 w-fit rounded-full px-4 py-1">
            {t("food.sectionName")}
          </h2>

          <h1
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-3xl tablet:text-5xl"
          >
            {t("food.title")}
          </h1>
        </div>

        <div className="max-w-[80%] tablet:max-w-full mx-auto grid gap-y-24 mobile:grid-cols-2 tablet:grid-cols-3 gap-6 mt-6 z-[3]">
          {teamFoodData.map((data, i) => {
            return (
              <div key={i} className="relative">
                <img src={data.img} alt="team" />

                <div className="absolute right-6 left-6 -bottom-12 shadow-lg flex flex-col tablet:flex-row text-center tablet:text-start items-center justify-between gap-2 mobile:gap-4 tablet:gap-6 bg-white py-2 mobile:py-4 tablet:py-8 tablet:px-6 rounded-3xl">
                  <div>
                    <h2
                      className="text-2xl mb-2 tablet:mb-4"
                      style={{ fontFamily: "'Satoshi Bold', sans-serif" }}
                    >
                      {data.name}
                    </h2>

                    <p className="opacity-70 font-light">
                      {data.job} <span className="font-medium">@modjoy</span>
                    </p>
                  </div>

                  <div className="flex gap-4">
                    {data.linkedIn && (
                      <a
                        href={data.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-lightGrey w-12 h-12 rounded-full flex items-center justify-center"
                      >
                        <img
                          src="/img/linkedin.png"
                          alt="linkedin"
                          draggable={false}
                          className="max-w-[20px]"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
