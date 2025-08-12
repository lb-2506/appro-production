import Head from "next/head";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import HeroHomeComponent from "@/components/home/hero.home.component";
import NavbarComponent from "@/components/_shared/nav/nav.component";
import ExpertisesHomeComponent from "@/components/home/expertises.home.component";
import SkillsHomeComponent from "@/components/home/skills.home.component";
import TeamHomeComponent from "@/components/home/team.home.component";
import PartnersHomeComponent from "@/components/home/partners.home.component";
import FooterComponent from "@/components/_shared/footer/footer.component";
import LogosHomeComponent from "@/components/home/logos.home.component";

export default function HomePage(props) {
  let title;
  let description;

  switch (i18n.language) {
    case "en":
      title =
        "Gusto Manager by Modjoy Studio Food - Gestion, communication et identité digitale pour les restaurants";
      description =
        "La solution complète pour les restaurateurs : gestion des réservations, cartes et menus, ventes en ligne, communication et identité visuelle pour booster votre restaurant.";
      break;
    default:
      title =
        "Gusto Manager by Modjoy Studio Food - Gestion, communication et identité digitale pour les restaurants";
      description =
        "La solution complète pour les restaurateurs : gestion des réservations, cartes et menus, ventes en ligne, communication et identité visuelle pour booster votre restaurant.";
  }

  return (
    <>
      <Head>
        <title>{title}</title>

        <>
          {description && <meta name="description" content={description} />}
          {title && <meta property="og:title" content={title} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          <meta
            property="og:url"
            content="https://www.modjoy-studio.com/food"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/food/open-graph.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      </Head>

      <div className="select-none">
        <NavbarComponent />

        <HeroHomeComponent />

        {/* <ExpertisesHomeComponent /> */}

        <LogosHomeComponent />

        <SkillsHomeComponent />

        {/* <TeamHomeComponent /> */}

        <PartnersHomeComponent />

        <FooterComponent />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "expertises",
        "hero-section",
        "skills",
        "projects",
        "team",
        "work",
        "faq",
        "partners",
      ])),
    },
  };
}
