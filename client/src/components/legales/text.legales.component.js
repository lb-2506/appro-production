export default function TextLegalesComponent() {
  return (
    <section
      id="mentions-legales"
      className="bg-[#171717] relative z-10 mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="pb-12 pt-48 max-w-[1240px] w-[90%] mx-auto">
        {/* Header */}
        <header className="text-white flex flex-col items-start gap-3 mb-10">
          <h1 className="tracking-tighter text-[9vw] leading-[12vw] mobile:leading-[75px] tablet:text-[60px] font-light">
            Mentions légales
          </h1>
          <p className="opacity-60 font-light">En vigueur au 21 août 2025</p>
        </header>

        <div className="space-y-10 text-white">
          {/* 1. Editeur du site */}
          <section aria-labelledby="ml-editeur" className="break-inside-avoid">
            <h3 id="ml-editeur" className="text-xl font-light mb-3">
              1. Éditeur du site
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                <strong>APPRO PRODUCTION</strong>
              </p>
              <p className="font-light">SAS (Société par Actions Simplifiée)</p>
              <address className="not-italic font-light">
                Adresse : 17, rue Léopold Sédar Senghor, 29900 Concarneau
              </address>
              <ul className="mt-4 space-y-1 font-light">
                <li>SIREN : 942 037 078 – SIRET (siège) : 942 037 078 00014</li>
                <li>Numéro de TVA intracommunautaire : FR47 942 037 078</li>
                <li>Capital social : 1 000 €</li>
                <li>Immatriculation : RCS Quimper – 18/03/2025</li>
                <li>
                  Code APE/NAF : 59.11B – Production de films institutionnels et
                  publicitaires
                </li>
                <li>Directeur de la publication : Laurent Le Bec</li>
                <li>
                  Email :{" "}
                  <a
                    href="mailto:contact@approproduction.fr"
                    className="underline underline-offset-4"
                  >
                    contact@approproduction.fr
                  </a>
                </li>
                <li>
                  Téléphone :{" "}
                  <a
                    href="tel:+33614923897"
                    className="underline underline-offset-4"
                  >
                    06&nbsp;14&nbsp;92&nbsp;38&nbsp;97
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Hébergement */}
          <section
            aria-labelledby="ml-hebergement"
            className="break-inside-avoid"
          >
            <h3 id="ml-hebergement" className="text-xl font-light mb-3">
              2. Hébergement
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                À compléter avec le prestataire retenu (nom, adresse et contact)
              </p>
            </div>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section aria-labelledby="ml-ipi" className="break-inside-avoid">
            <h3 id="ml-ipi" className="text-xl font-light mb-3">
              3. Propriété intellectuelle
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                L’ensemble des contenus (textes, images, vidéos, logos, design,
                etc.) présents sur ce site est la propriété exclusive d’Appro
                Production ou de ses partenaires et est protégé par les lois
                françaises et internationales. Toute reproduction,
                représentation, modification ou diffusion, partielle ou totale,
                est interdite sans autorisation écrite préalable.
              </p>
            </div>
          </section>

          {/* 4. Données personnelles */}
          <section aria-labelledby="ml-rgpd" className="break-inside-avoid">
            <h3 id="ml-rgpd" className="text-xl font-light mb-3">
              4. Données personnelles
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5 space-y-3">
              <p className="font-light">
                Les données collectées via le formulaire de contact sont
                utilisées uniquement pour répondre à vos demandes. Conformément
                au RGPD et à la loi Informatique et Libertés, vous disposez d’un
                droit d’accès, de rectification, de suppression et d’opposition
                à vos données.
              </p>
              <p className="font-light">Pour exercer vos droits :</p>
              <ul className="font-light space-y-1">
                <li>
                  📧 Email :{" "}
                  <a
                    href="mailto:contact@approproduction.fr"
                    className="underline underline-offset-4"
                  >
                    contact@approproduction.fr
                  </a>
                </li>
                <li>
                  📮 Adresse : 17, rue Léopold Sédar Senghor, 29900 Concarneau
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Responsabilité */}
          <section aria-labelledby="ml-resp" className="break-inside-avoid">
            <h3 id="ml-resp" className="text-xl font-light mb-3">
              5. Responsabilité
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                Appro Production s’efforce de maintenir à jour les informations
                présentes sur ce site, mais ne peut garantir l’exactitude,
                l’exhaustivité ou l’actualité de son contenu. L’utilisation du
                site se fait sous votre seule responsabilité.
              </p>
            </div>
          </section>

          {/* 6. Liens externes */}
          <section aria-labelledby="ml-liens" className="break-inside-avoid">
            <h3 id="ml-liens" className="text-xl font-light mb-3">
              6. Liens externes
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                Ce site peut contenir des liens vers d’autres sites internet.
                Appro Production ne peut être tenue responsable de leur contenu
                ou de leurs pratiques.
              </p>
            </div>
          </section>

          {/* 7. Cookies */}
          <section aria-labelledby="ml-cookies" className="break-inside-avoid">
            <h3 id="ml-cookies" className="text-xl font-light mb-3">
              7. Cookies
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5 space-y-3">
              <p className="font-light">
                Ce site utilise des cookies pour améliorer votre expérience et
                analyser la fréquentation. Vous pouvez paramétrer votre
                navigateur pour refuser les cookies.
              </p>
            </div>
          </section>

          {/* 8. Droit applicable */}
          <section aria-labelledby="ml-droit" className="break-inside-avoid">
            <h3 id="ml-droit" className="text-xl font-light mb-3">
              8. Droit applicable
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                Le présent site est régi par le droit français. En cas de
                litige, compétence exclusive est attribuée aux tribunaux
                compétents de Quimper.
              </p>
            </div>
          </section>

          {/* 9. Crédits */}
          <section aria-labelledby="ml-credits" className="break-inside-avoid">
            <h3 id="ml-credits" className="text-xl font-light mb-3">
              9. Crédits
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <ul className="font-light space-y-1">
                <li>
                  Design et développement web : Modjoy – Axelle Heurtevent &amp;
                  Léo Baccialone
                </li>
                <li>Photographies et vidéos : Appro Production</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Bas de page */}
        <div className="mt-12 text-sm opacity-60 font-light text-white">
          Dernière mise à jour : 21/08/2025
        </div>
      </div>
    </section>
  );
}
