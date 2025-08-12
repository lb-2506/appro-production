// I18N
import { useTranslation } from "next-i18next";

// MARQUEE
import Marquee from "react-fast-marquee";

// SVG
import {
  AlpazeSvg,
  CadulisSvg,
  CorsairSvg,
  KfcSvg,
  LesPtitsMotsSvg,
  LpbnSvg,
  LvsSvg,
  MirrorBotSvg,
  OrangeSvg,
  PluxeeSvg,
  PowerSvg,
  SfrSvg,
  SodexoSvg,
  TreefleSvg,
  TrippnySvg,
} from "../_shared/_svgs/_index";

export default function LogosFoodComponent() {
  const { t } = useTranslation("hero-section");

  return (
    <section
      className="text-center mt-[100vh] w-[100vw] bg-[#F5F5F5]"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <Marquee>
        <div className="py-24 flex gap-32 items-center">
          <AlpazeSvg fillColor="#001D25" />
          <LpbnSvg fillColor="#001D25" />
          <CadulisSvg fillColor="#001D25" />
          <TrippnySvg fillColor="#001D25" />
          <PluxeeSvg fillColor="#001D25" />
          <SfrSvg fillColor="#001D25" fillColor2="#FFFFFF" />
          <LvsSvg fillColor="#001D25"/>
          <LesPtitsMotsSvg fillColor="#001D25"/>
          <MirrorBotSvg fillColor="#001D25"/>
          <KfcSvg fillColor="#001D25"/>
          <TreefleSvg fillColor="#001D25"/>
          <OrangeSvg fillColor="#001D25" fillColor2="#FFFFFF"/>
          <CorsairSvg fillColor="#001D25"/>
          <PowerSvg fillColor="#001D25"/>
          <SodexoSvg fillColor="#001D25"/>
        </div>
      </Marquee>
    </section>
  );
}
