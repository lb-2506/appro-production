import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContactFooterHomeComponent({
  setIsContactFixed,
  isContactFixed,
}) {
  const [status, setStatus] = useState({
    sending: false,
    ok: false,
    error: null,
  });

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

  // erreurs par champ (true = invalide)
  const [errors, setErrors] = useState({
    nom: false,
    prenom: false,
    email: false,
    telephone: false,
    vousEtes: false,
    services: false, // groupe (au moins une case)
    message: false,
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

    // checkboxes des services (groupe)
    if (name.startsWith("service_")) {
      const key = name.replace("service_", "");
      setForm((f) => {
        const next = { ...f, services: { ...f.services, [key]: checked } };
        // recalcul validation du groupe services à la volée
        const any = Object.values(next.services).some(Boolean);
        setErrors((er) => ({ ...er, services: !any }));
        return next;
      });
      return;
    }

    // champs classiques
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));

    // clear l'erreur du champ au fur et à mesure
    setErrors((er) => ({ ...er, [name]: false }));
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

  function servicesChoisisFromState(services) {
    return Object.entries(services)
      .filter(([, v]) => v)
      .map(([k]) =>
        k === "video"
          ? "Vidéo sur mesure"
          : k === "photo"
            ? "Photographie professionnelle"
            : "Accompagnement réseaux sociaux"
      );
  }

  function validateAll() {
    const emailOk =
      !!form.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    const servicesAny = Object.values(form.services).some(Boolean);

    const nextErrors = {
      nom: !form.nom.trim(),
      prenom: !form.prenom.trim(),
      email: !emailOk,
      telephone: !form.telephone.trim(),
      vousEtes: !form.vousEtes?.trim(),
      services: !servicesAny,
      message: !form.message.trim(),
      accept: !form.accept,
    };

    setErrors(nextErrors);
    const hasError = Object.values(nextErrors).some(Boolean);
    return { valid: !hasError, nextErrors };
  }

  async function onSubmit(e) {
    e.preventDefault();

    // payload tenté (log demandé)
    const attemptedPayload = {
      nom: form.nom,
      prenom: form.prenom,
      email: form.email,
      telephone: form.telephone,
      vousEtes: form.vousEtes,
      services: form.services,
      servicesChoisis: servicesChoisisFromState(form.services),
      message: form.message,
      accept: form.accept,
    };
    console.log("[Contact] tentative d’envoi:", attemptedPayload);

    const { valid, nextErrors } = validateAll();

    if (!valid) {
      console.warn(
        "[Contact] champs invalides:",
        Object.keys(nextErrors).filter((k) => nextErrors[k])
      );
      setStatus({
        sending: false,
        ok: false,
        error: "Merci de remplir tous les champs requis.",
      });
      return;
    }

    setStatus({ sending: true, ok: false, error: null });

    try {
      const res = await fetch("/api/contact-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attemptedPayload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || "Erreur réseau");
      }

      setStatus({ sending: false, ok: true, error: null });
      console.log("[Contact] envoi réussi");

      // reset "soft" (on garde vousEtes)
      setForm({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        vousEtes: form.vousEtes,
        services: { video: false, photo: false, social: false },
        message: "",
        accept: false,
      });
      setErrors({
        nom: false,
        prenom: false,
        email: false,
        telephone: false,
        vousEtes: false,
        services: false,
        message: false,
        accept: false,
      });
    } catch (err) {
      console.error("[Contact] erreur d’envoi:", err);
      setStatus({
        sending: false,
        ok: false,
        error: err.message || "Erreur inconnue",
      });
    }
  }

  return (
    <section
      className={`bg-[#171717] mx-auto flex flex-col top-0 w-full min-h-[100vh] overflow-hidden ${zIndexClass} flex items-center  ${
        isContactFixed ? "fixed" : "relative"
      }`}
      style={{
        backgroundImage: "url('/img/bg-noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full pt-12 pointer-events-none opacity-50 h-[33px]">
        <Image
          src="/img/logos/trame.avif"
          alt="trame"
          layout="fill"
          className="object-contain"
        />
      </div>

      <Image
        src="/img/traits-hero.avif"
        alt="traits-hero"
        layout="fill"
        className="object-cover absolute w-full h-full  opacity-20"
      />

      <div className="w-full">
        <div className="max-w-[1240px] w-[90%] z-10 mx-auto flex flex-col tablet:flex-row gap-16 tablet:gap-24 pt-36">
          {/* Colonne gauche - titres */}
          <div className="text-white  flex flex-col gap-6">
            <h1 className="tracking-tight font-light uppercase opacity-40">
              Contact
            </h1>

            <h2 className="tracking-tighter text-[9vw] leading-[12vw] mobile:leading-[65px] tablet:text-[60px] font-light">
              Comment pouvons-
              <br className="hidden tablet:block" />
              nous vous aider ?
            </h2>

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
              noValidate
              className="rounded-3xl bg-[#F5F5F5] backdrop-blur p-6 tablet:p-10 shadow/30 shadow-black/10 border border-black/5 flex flex-col gap-6"
            >
              {/* Ligne 1 : Nom / Prénom */}
              <div className="flex flex-col tablet:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="nom"
                    className="block text-sm opacity-60 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    value={form.nom}
                    onChange={updateField}
                    className={`w-full rounded-xl bg-white px-4 py-3 border outline-none ${
                      errors.nom
                        ? "border-red focus:border-red"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="prenom"
                    className="block text-sm opacity-60 mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    value={form.prenom}
                    onChange={updateField}
                    className={`w-full rounded-xl bg-white px-4 py-3 border outline-none ${
                      errors.prenom
                        ? "border-red focus:border-red"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />
                </div>
              </div>

              {/* Ligne 2 : Email / Téléphone */}
              <div className="flex flex-col tablet:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm opacity-60 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    className={`w-full rounded-xl bg-white px-4 py-3 border outline-none ${
                      errors.email
                        ? "border-red focus:border-red"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="telephone"
                    className="block text-sm opacity-60 mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    value={form.telephone}
                    onChange={updateField}
                    className={`w-full rounded-xl bg-white px-4 py-3 border outline-none ${
                      errors.telephone
                        ? "border-red focus:border-red"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />
                </div>
              </div>

              {/* Ligne 3 : Vous êtes */}
              <div>
                <label
                  htmlFor="vousEtes"
                  className="block text-sm opacity-60 mb-2"
                >
                  Vous êtes :
                </label>
                <div className="relative">
                  <select
                    id="vousEtes"
                    name="vousEtes"
                    value={form.vousEtes}
                    onChange={updateField}
                    className={`w-full rounded-xl bg-white px-4 pr-12 py-3 border outline-none appearance-none ${
                      errors.vousEtes
                        ? "border-red focus:border-red"
                        : "border-black/10 focus:border-black/30"
                    }`}
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
              <fieldset>
                <legend className="text-sm opacity-60 mb-3">
                  Par quelle formule êtes-vous intéressé ?
                </legend>

                <div
                  className={`grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-y-3 gap-x-6 ${
                    errors.services
                      ? "outline outline-1 outline-red rounded-md"
                      : ""
                  }`}
                >
                  <label className="inline-flex items-center gap-4 opacity-80">
                    <input
                      type="checkbox"
                      name="service_video"
                      checked={form.services.video}
                      onChange={updateField}
                      className={`min-w-4 rounded border ${
                        errors.services ? "border-red" : "border-black/30"
                      }`}
                    />
                    <span className="text-sm">Vidéo sur mesure</span>
                  </label>

                  <label className="inline-flex items-center gap-4 opacity-80">
                    <input
                      type="checkbox"
                      name="service_photo"
                      checked={form.services.photo}
                      onChange={updateField}
                      className={`min-w-4 rounded border ${
                        errors.services ? "border-red" : "border-black/30"
                      }`}
                    />
                    <span className="text-sm">
                      Photographie professionnelle
                    </span>
                  </label>

                  <label className="inline-flex items-center gap-4 opacity-80">
                    <input
                      type="checkbox"
                      name="service_social"
                      checked={form.services.social}
                      onChange={updateField}
                      className={`min-w-4 rounded border ${
                        errors.services ? "border-red" : "border-black/30"
                      }`}
                    />
                    <span className="text-sm">
                      Accompagnement réseaux sociaux
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* Ligne 5 : Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm opacity-60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  className={`w-full min-h-[140px] rounded-xl bg-white px-4 py-3 border outline-none resize-none ${
                    errors.message
                      ? "border-red focus:border-red"
                      : "border-black/10 focus:border-black/30"
                  }`}
                  placeholder="Écrire mon message..."
                />
              </div>

              {/* Ligne 6 : RGPD */}
              <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  id="accept"
                  name="accept"
                  checked={form.accept}
                  onChange={updateField}
                  className={`min-w-4 rounded border cursor-pointer ${
                    errors.accept ? "border-red" : "border-black/30"
                  }`}
                />
                <span className="opacity-60">
                  J'accepte la{" "}
                  <a href="/privacy" className="underline hover:opacity-100">
                    politique de confidentialité
                  </a>
                </span>
              </label>

              {/* Bouton */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.sending}
                  className={`group relative inline-flex items-center rounded-full font-light bg-black text-white px-6 py-3 shadow/30 shadow-black/40 hover:shadow-black/60 transition-shadow overflow-hidden ${
                    status.sending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {status.sending ? "Envoi…" : "Envoyer"}
                  <span className="relative inline-block w-6 h-6 overflow-visible">
                    <span className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-11 group-hover:-translate-y-11">
                      <span
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute w-4 h-4 text-white opacity-100"
                        style={{ transform: "translate(-40px, 40px)" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        ↗
                      </span>

                      <span
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute w-4 h-4 text-white opacity-100"
                        style={{ transform: "translate(3px, -3px)" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        ↗
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer
        className="text-white relative w-full pt-36"
        style={{
          backgroundImage: "url('/img/bg-noise.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "100%",
        }}
      >
        {/* Colonnes */}
        <div className="mx-auto flex flex-col text-center tablet:text-start tablet:flex-row justify-between w-[90%] gap-12 pb-24">
          {/* Logo */}
          <div className="flex items-center justify-center tablet:items-start">
            {/* Remplace par ton image si tu veux */}
            <img
              src="/img/logo.avif"
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
          <div className="w-[90%] max-w-[1240px] mx-auto py-6 flex flex-col-reverse mobile:flex-row gap-4 mobile:gap-6 items-start mobile:items-center justify-between">
            <p className="text-sm opacity-70 font-light mx-auto tablet:mx-0">
              © Appro Production 2025. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm pr-0 tablet:pr-[220px] mx-auto tablet:mx-0">
              <a href="/legales" className="opacity-70 hover:opacity-100">
                Mentions légales
              </a>
              <a href="/privacy" className="opacity-70 hover:opacity-100">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
