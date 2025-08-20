import Head from "next/head";
import { useState } from "react";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import HeroHomeComponent from "@/components/home/hero.home.component";
import NavbarComponent from "@/components/_shared/nav/nav.component";
import TextRevealComponent from "@/components/home/text-reveal.home.component";
import SkillsHomeComponent from "@/components/home/skills.home.component";
import WhatWeDoHomeComponent from "@/components/home/what-we-do.home.component";
import LogosHomeComponent from "@/components/home/logos.home.component";
import SectorsHomeComponent from "@/components/home/sectors.home.component";
import WhyUsHomeComponent from "@/components/home/why-us.component";
import SocialHomeComponent from "@/components/home/social.home.component";
import StoryHomeComponent from "@/components/home/story.home.component";
import DisponibilitiesHomeComponent from "@/components/home/disponibilities.home.component";
import TestimonialsHomeComponent from "@/components/home/testimonials.home.component";
import FaqHomeComponent from "@/components/home/faq.home.component";
import ContactFooterHomeComponent from "@/components/home/contact-footer.home.component";

export default function HomePage(props) {
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
            content="https://www.modjoy-studio.com/food"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/open-graph.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      </Head>

      <div className="select-none">
        <NavbarComponent />

        <DisponibilitiesHomeComponent />

        <HeroHomeComponent />

        <LogosHomeComponent />

        <TextRevealComponent />

        <div
          className="bg-[#171717] relative z-10"
          style={{
            backgroundImage: "url('/img/bg-noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "100%",
            backgroundAttachment: "fixed",
          }}
        >
          <WhatWeDoHomeComponent />

          <SectorsHomeComponent />
        </div>

        <SkillsHomeComponent />

        <WhyUsHomeComponent />

        <SocialHomeComponent />

        <StoryHomeComponent />

        <TestimonialsHomeComponent />

        <FaqHomeComponent isContactFixed={isContactFixed} />

        <ContactFooterHomeComponent
          setIsContactFixed={setIsContactFixed}
          isContactFixed={isContactFixed}
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
