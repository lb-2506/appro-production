import Head from "next/head";
import { useState } from "react";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import NavbarComponent from "@/components/_shared/nav/nav.component";
import ContactFooterHomeComponent from "@/components/home/contact-footer.home.component";
import TextLegalesComponent from "@/components/legales/text.legales.component";

export default function LegalesPage(props) {
  let title;
  let description;

  switch (i18n.language) {
    case "en":
      title = "Appro Production";
      description =
        "Appro Production à Concarneau : vidéos sur mesure, photographie professionnelle et accompagnement réseaux sociaux pour faire grandir votre marque.";
      break;
    default:
      title = "Appro Production";
      description =
        "Appro Production à Concarneau : vidéos sur mesure, photographie professionnelle et accompagnement réseaux sociaux pour faire grandir votre marque.";
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
            content="https://approproduction.fr"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/open-graph.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      </Head>

      <div className="select-none">
        <NavbarComponent />

        <TextLegalesComponent />

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
