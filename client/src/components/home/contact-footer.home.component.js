import { useEffect, useState } from "react";

export default function ContactFooterHomeComponent({
  setIsContactFixed,
  isContactFixed,
}) {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    vousEtes: "Une entreprise",
    services: {
      video: false,
      photo: false,
      social: false,
    },
    message: "",
    accept: false,
  });

  const [zIndexClass, setZIndexClass] = useState("-z-20");

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 1.5;
      if (scrollY > threshold) {
        setZIndexClass("z-0");
      } else {
        setZIndexClass("-z-20");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const above = document.getElementById("faq");

    function onScroll() {
      if (!above) return;
      const rect = above.getBoundingClientRect();

      if (rect.bottom <= 1) {
        setIsContactFixed(false);
      } else {
        setIsContactFixed(true);
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [setIsContactFixed]);

  function updateField(e) {
    const { name, value, type, checked } = e.target;
    // checkboxes des services
    if (name.startsWith("service_")) {
      const key = name.replace("service_", "");
      setForm((f) => ({ ...f, services: { ...f.services, [key]: checked } }));
      return;
    }
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

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

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      ...form,
      // services sélectionnés en tableau lisible
      servicesChoisis: Object.entries(form.services)
        .filter(([, v]) => v)
        .map(([k]) =>
          k === "video"
            ? "Vidéo sur mesure"
            : k === "photo"
              ? "Photographie professionnelle"
              : "Accompagnement réseaux sociaux"
        ),
    });
  }

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.1); // déplacement léger
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact"
      className={`bg-[#171717] mx-auto flex flex-col top-0 w-full min-h-[100vh] overflow-hidden ${zIndexClass} flex items-center  ${
        isContactFixed ? "fixed" : "relative"
      }`}
      style={{
        backgroundImage: "url('/img/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <img
        src="/img/logos/trame.png"
        alt="trame"
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none pt-12"
      />
     <img
        className="absolute w-full h-full left-1/2 -translate-x-1/2 object-cover opacity-20"
        src="/img//traits-hero.png"
        alt="traits-hero"
      />

      <div className="w-full">
        <div className="max-w-[1240px] w-[90%] z-10 mx-auto flex flex-col tablet:flex-row gap-16 tablet:gap-24 pt-44">
          {/* Colonne gauche - titres */}
          <div className="text-white  flex flex-col gap-6">
            <h2 className="font-light uppercase opacity-40 tracking-tight">
              Contact
            </h2>
            <h1 className="text-[9vw] leading-[12vw] mobile:leading-[65px] tablet:text-[60px] font-light">
              Comment pouvons-
              <br className="hidden tablet:block" />
              nous vous aider ?
            </h1>
            <h3 className="max-w-[520px] text-lg opacity-60 font-light mt-6">
              Chaque projet est unique, trouvons ensemble la
              <br />
              meilleure façon de le mettre en lumière.
            </h3>
          </div>

          {/* Colonne droite - formulaire */}
          <div className="flex-1">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-[#F5F5F5] backdrop-blur p-6 tablet:p-10 shadow/30 shadow-black/10 border border-black/5 flex flex-col gap-6"
            >
              {/* Ligne 1 : Nom / Prénom */}
              <div className="flex flex-col tablet:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm opacity-60 mb-2">Nom</label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={updateField}
                    className="w-full rounded-xl bg-white px-4 py-3 border border-black/10 outline-none focus:border-black/30"
                    placeholder=""
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm opacity-60 mb-2">
                    Prénom
                  </label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={updateField}
                    className="w-full rounded-xl bg-white px-4 py-3 border border-black/10 outline-none focus:border-black/30"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Ligne 2 : Email / Téléphone */}
              <div className="flex flex-col tablet:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm opacity-60 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    className="w-full rounded-xl bg-white px-4 py-3 border border-black/10 outline-none focus:border-black/30"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm opacity-60 mb-2">
                    Téléphone
                  </label>
                  <input
                    name="telephone"
                    value={form.telephone}
                    onChange={updateField}
                    className="w-full rounded-xl bg-white px-4 py-3 border border-black/10 outline-none focus:border-black/30"
                  />
                </div>
              </div>

              {/* Ligne 3 : Vous êtes */}
              <div>
                <label className="block text-sm opacity-60 mb-2">
                  Vous êtes :
                </label>

                <div className="relative">
                  <select
                    name="vousEtes"
                    value={form.vousEtes}
                    onChange={updateField}
                    className="w-full rounded-xl bg-white px-4 pr-12 py-3 border border-black/10 outline-none focus:border-black/30 appearance-none"
                  >
                    <option>Une entreprise</option>
                    <option>Un particulier</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Ligne 4 : Formules */}
              <div>
                <p className="text-sm opacity-60 mb-3">
                  Par quelle formule êtes vous intéressé ?
                </p>
                <div className="flex items-center gap-x-8 gap-y-3">
                  <label className="inline-flex opacity-80 items-center gap-4 w-1/3">
                    <input
                      type="checkbox"
                      name="service_video"
                      checked={form.services.video}
                      onChange={updateField}
                      className="min-w-4 rounded border border-black/30"
                    />
                    <span className="text-sm">Vidéo sur mesure</span>
                  </label>

                  <label className="inline-flex opacity-80 items-center gap-4 w-1/3">
                    <input
                      type="checkbox"
                      name="service_photo"
                      checked={form.services.photo}
                      onChange={updateField}
                      className="min-w-4 rounded border border-black/30"
                    />
                    <span className="text-sm">
                      Photographie professionnelle
                    </span>
                  </label>

                  <label className="inline-flex opacity-80 items-center gap-4 w-1/3">
                    <input
                      type="checkbox"
                      name="service_social"
                      checked={form.services.social}
                      onChange={updateField}
                      className="min-w-4 rounded border border-black/30"
                    />
                    <span className="text-sm">
                      Accompagnement réseaux sociaux
                    </span>
                  </label>
                </div>
              </div>

              {/* Ligne 5 : Message */}
              <div>
                <label className="block text-sm opacity-60 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  className="w-full min-h-[140px] rounded-xl bg-white px-4 py-3 border border-black/10 outline-none focus:border-black/30 resize-none"
                  placeholder="Écrire mon message..."
                />
              </div>

              {/* Ligne 6 : RGPD */}
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="accept"
                  checked={form.accept}
                  onChange={updateField}
                  className="min-w-4 rounded border border-black/30"
                />
                <span className=" opacity-60">
                  J'accepte la politique de confidentialité
                </span>
              </label>

              {/* Bouton */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-light shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow"
                >
                  Envoyer <span className="font-light">↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer
        className="text-white relative w-full pt-36"
        style={{
          backgroundImage: "url('/img/bg-noise.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      >
        {/* Colonnes */}
        <div className="mx-auto flex justify-between w-[90%] gap-12 pb-24">
          {/* Logo */}
          <div className="flex items-start">
            {/* Remplace par ton image si tu veux */}
            <img
              src="/img/logo.png"
              alt="APPRO Production"
              className="h-14 w-auto"
            />
          </div>

          {/* Coordonnées */}
          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="uppercase text-sm opacity-50 font-light">
              Coordonnées
            </p>

            <div className="mt-6 space-y-6 font-light">
              <p>+33 (0)6 14 92 38 97</p>

              <p>
                34 Rue Léopold Sédar Senghor
                <br />
                29900 Concarneau
              </p>

              <p>
                <a
                  href="mailto:contact@appro-production.com"
                  className="hover:opacity-80"
                >
                  contact@appro-production.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="uppercase text-sm opacity-50 font-light">
              Navigation
            </p>
            <ul className="mt-6 space-y-3 font-light">
              <li>
                <button
                  onClick={() => handleScrollToSection("#what-we-do")}
                  className="cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("#skills")}
                  className="cursor-pointer"
                >
                  Méthode
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollToSection("#why-us")}
                  className="cursor-pointer"
                >
                  Pourquoi nous ?
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollToSection("#social")}
                  className="cursor-pointer"
                >
                  Réalisations
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollToSection("#testimonials")}
                  className="cursor-pointer"
                >
                  Témoignages
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollToSection("#faq")}
                  className="cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="uppercase text-sm opacity-50 font-light">Social</p>
            <ul className="mt-6 space-y-3 font-light">
              <li>
                <a
                  href="https://www.linkedin.com/company/appro-production"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{ color: "#FEFEA2" }}
                >
                  Linkedin <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/approproduction/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{ color: "#FEFEA2" }}
                >
                  Instagram <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Appro-Production/61575018824175"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{ color: "#FEFEA2" }}
                >
                  Facebook <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div>
          <div className="w-[90%] mx-auto py-6 flex justify-between">
            <p className="text-sm opacity-70 font-light">
              © Appro Production 2025. Tous droits réservés.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="/legales"
                className="opacity-70 hover:opacity-100"
              >
                Mentions légales
              </a>
              <a
                href="/privacy"
                className="opacity-70 hover:opacity-100"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
