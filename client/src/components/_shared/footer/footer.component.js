import Link from "next/link";

// I18N
import { useTranslation } from "next-i18next";

// ROUTER
import { useRouter } from "next/router";

// SVG
import { InstagramSvg, LinkedInSvg } from "../_svgs/_index";

export default function FooterFoodComponent() {
  const { t } = useTranslation("common");
  const router = useRouter();

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleScrollToSection(id) {
    await wait(300);

    requestAnimationFrame(() => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  return (
    <footer className="py-12 tablet:py-24 bg-darkBlue rounded-t-[30px] ">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col gap-12 desktop:gap-0 desktop:flex-row items-center justify-between">
          <div className="desktop:w-[10%]">
            <img
              src="/img/logo.png"
              draggable={false}
              alt="logo"
              className="max-w-[200px]"
            />
          </div>

          <ul className="flex flex-col mobile:flex-row justify-center items-center gap-12 text-creamy desktop:w-[80%]">
            <li>
              <button
                onClick={() => handleScrollToSection("#expertises")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.food.list.1")}
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollToSection("#gusto-manager")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.food.list.2")}
              </button>
            </li>
            
            <li>
              <button
                onClick={() => handleScrollToSection("#team")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.food.list.3")}
              </button>
            </li>
          </ul>

          <ul className="flex justify-end gap-4 items-center desktop:w-[10%]">
            <li>
              <a
                href="https://www.instagram.com/modjoy_studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <InstagramSvg />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/modjoy-studio/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedIn"
              >
                <LinkedInSvg />
              </a>
            </li>
          </ul>
        </div>

        <hr className="text-creamy opacity-10 mt-24 mb-12" />

        <div
          style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
          className="flex flex-col tablet:flex-row justify-center items-center text-center gap-4 text-creamy"
        >
          <p>© 2025 Modjoy Studio. All rights reserved.</p>
          <Link href="/privacy-policy">
            <a className="underline">Privacy Policy</a>
          </Link>

          <Link href="/terms">
            <a className="underline">Terms of Use</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
