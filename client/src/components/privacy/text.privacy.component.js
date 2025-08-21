export default function TextPrivacyComponent() {
  return (
    <section
      id="politique-confidentialite"
      className="bg-[#171717] relative z-10 mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="pb-12 pt-48 max-w-[1240px] w-[90%] mx-auto">
        {/* Header */}
        <header className="text-white flex flex-col items-start gap-3 mb-10">
          <h1 className="tracking-tighter text-[9vw] leading-[12vw] mobile:leading-[75px] tablet:text-[60px] font-light">
            Politique de confidentialité
          </h1>
          <p className="opacity-60 font-light">En vigueur au 21 août 2025</p>
        </header>

        <div className="space-y-10 text-white">
          {/* 1. Collecte des informations */}
          <section aria-labelledby="pc-collecte" className="break-inside-avoid">
            <h3 id="pc-collecte" className="text-xl font-light mb-3">
              1. Collecte des informations
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5 space-y-4">
              <p className="font-light">
                Lors de votre visite sur notre site, nous pouvons collecter les informations suivantes :
              </p>
              <ul className="font-light space-y-1">
                <li>
                  <strong>Données saisies dans le formulaire de contact :</strong> nom, prénom, email, téléphone, message.
                </li>
                <li>
                  <strong>Données techniques :</strong> adresse IP, type de navigateur, pages consultées (via cookies et outils de mesure d’audience).
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Utilisation des données */}
          <section aria-labelledby="pc-usage" className="break-inside-avoid">
            <h3 id="pc-usage" className="text-xl font-light mb-3">
              2. Utilisation des données
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5 space-y-4">
              <p className="font-light">Les données collectées servent uniquement à&nbsp;:</p>
              <ul className="font-light space-y-1">
                <li>Répondre à vos demandes de contact ou devis.</li>
                <li>Échanger avec vous dans le cadre d’un projet ou d’une prestation.</li>
                <li>Améliorer l’expérience utilisateur et analyser la fréquentation du site.</li>
              </ul>
              <p className="font-light">
                Aucune donnée personnelle n’est vendue, échangée ou transmise à des tiers, sauf obligation légale.
              </p>
            </div>
          </section>

          {/* 3. Conservation des données */}
          <section aria-labelledby="pc-duree" className="break-inside-avoid">
            <h3 id="pc-duree" className="text-xl font-light mb-3">
              3. Conservation des données
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <ul className="font-light space-y-1">
                <li><strong>Formulaire de contact :</strong> conservation pendant 12 mois maximum.</li>
                <li><strong>Données techniques (cookies et statistiques) :</strong> conservation pendant 13 mois maximum.</li>
              </ul>
            </div>
          </section>

          {/* 4. Partage des données */}
          <section aria-labelledby="pc-partage" className="break-inside-avoid">
            <h3 id="pc-partage" className="text-xl font-light mb-3">
              4. Partage des données
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                Vos données sont accessibles uniquement à l’équipe d’Appro Production et, le cas échéant, à nos prestataires
                techniques (hébergeur, webmaster), dans le cadre strict de leur mission.
              </p>
            </div>
          </section>

          {/* 5. Cookies */}
          <section aria-labelledby="pc-cookies" className="break-inside-avoid">
            <h3 id="pc-cookies" className="text-xl font-light mb-3">
              5. Cookies
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5 space-y-4">
              <p className="font-light">Le site utilise des cookies pour&nbsp;:</p>
              <ul className="font-light space-y-1">
                <li>Améliorer la navigation et l’affichage.</li>
                <li>Mesurer la fréquentation (Google Analytics ou outil équivalent).</li>
              </ul>
              <p className="font-light">
                Vous pouvez gérer ou refuser les cookies via les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          {/* 6. Vos droits */}
          <section aria-labelledby="pc-droits" className="break-inside-avoid">
            <h3 id="pc-droits" className="text-xl font-light mb-3">
              6. Vos droits
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5 space-y-4">
              <p className="font-light">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants&nbsp;:
              </p>
              <ul className="font-light space-y-1">
                <li>Accès à vos données</li>
                <li>Rectification ou suppression</li>
                <li>Limitation ou opposition au traitement</li>
                <li>Portabilité des données</li>
              </ul>
              <p className="font-light">Pour exercer vos droits, contactez-nous à&nbsp;:</p>
              <ul className="font-light space-y-1">
                <li>
                  📧 Email :{" "}
                  <a href="mailto:contact@approproduction.fr" className="underline underline-offset-4">
                    contact@approproduction.fr
                  </a>
                </li>
                <li>📮 Adresse : 17, rue Léopold Sédar Senghor, 29900 Concarneau</li>
              </ul>
            </div>
          </section>

          {/* 7. Contact */}
          <section aria-labelledby="pc-contact" className="break-inside-avoid">
            <h3 id="pc-contact" className="text-xl font-light mb-3">
              7. Contact
            </h3>
            <div className="rounded-2xl p-6 ring-1 ring-black/5">
              <p className="font-light">
                Pour toute question relative à cette politique ou à vos données personnelles, vous pouvez nous écrire à l’adresse ci-dessus.
              </p>
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
