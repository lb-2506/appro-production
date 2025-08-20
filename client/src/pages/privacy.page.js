import Head from "next/head";
import { useState } from "react";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import NavbarComponent from "@/components/_shared/nav/nav.component";
import ContactFooterHomeComponent from "@/components/home/contact-footer.home.component";
import TextPrivacyComponent from "@/components/privacy/text.privacy.component";

export default function PrivacyPage(props) {
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

  const [isContactFixed, setIsContactFixed] = useState(true);

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

        <TextPrivacyComponent />

        <ContactFooterHomeComponent
          setIsContactFixed={setIsContactFixed}
          isContactFixed={false}
        />
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
