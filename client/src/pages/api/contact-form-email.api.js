// /pages/api/contact-form-email.js
import SibApiV3Sdk from "sib-api-v3-sdk";

async function sendTransactionalEmail(params) {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  // jolis libellés pour les services cochés
  const mapServiceLabel = (k) =>
    k === "video"
      ? "Vidéo sur mesure"
      : k === "photo"
        ? "Photographie professionnelle"
        : "Accompagnement réseaux sociaux";

  const servicesArray = Array.isArray(params.servicesChoisis)
    ? params.servicesChoisis
    : Object.entries(params.services || {})
        .filter(([, v]) => v)
        .map(([k]) => mapServiceLabel(k));

  const fullName =
    params.prenom || params.nom
      ? [params.prenom, params.nom].filter(Boolean).join(" ")
      : params.name || "—";

  const sendSmtpEmail = {
    sender: { email: "no-reply@approproduction.fr", name: "Formulaire Contact" },
    to: params.to,
    subject:
      params.subject ||
      `Nouveau message via le site — ${params.vousEtes || "—"} — ${fullName}`,
    htmlContent: `
      <html>
        <body style="font-family: Arial, sans-serif; color:#111; line-height:1.5;">
          <h2 style="margin-top:0;">Nouveau message via le formulaire de contact</h2>
          <p><strong>Nom :</strong> ${params.nom || "—"}</p>
          <p><strong>Prénom :</strong> ${params.prenom || "—"}</p>
          <p><strong>Email :</strong> ${params.email || "—"}</p>
          <p><strong>Téléphone :</strong> ${params.telephone || params.phone || "—"}</p>
          <p><strong>Vous êtes :</strong> ${params.vousEtes || "—"}</p>
          <p><strong>Formules choisies :</strong> ${
            servicesArray.length ? servicesArray.join(", ") : "—"
          }</p>
          <p><strong>Message :</strong><br/>${(params.message || "").replace(/\n/g, "<br/>")}</p>
          <hr style="border:none; border-top:1px solid #ddd; margin:16px 0;" />
          <p style="font-size:12px; color:#555;">
            Provenance: appro-production.com — RGPD accepté: ${
              params.accept ? "oui" : "non"
            }
          </p>
        </body>
      </html>`,
    replyTo: {
      email: params.email || "contact@approproduction.fr",
      name: fullName,
    },
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de l'envoi de l'email:",
      error?.response?.body || error
    );
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const data = req.body || {};
  const {
    nom,
    prenom,
    email,
    telephone,
    phone, // alias toléré
    vousEtes,
    services,
    message,
    accept,
  } = data;

  // validations simples
  if (!accept) {
    return res
      .status(400)
      .json({ message: "Merci d'accepter la politique de confidentialité." });
  }
  if (!email || !message || !nom) {
    return res
      .status(400)
      .json({ message: "Nom, email et message sont requis." });
  }

  const params = {
    to: [{ email: "contact@approproduction.fr", name: "Appro Production" }],
    subject: "Nouveau message via le formulaire de contact",
    nom,
    prenom,
    email,
    telephone: telephone || phone || "",
    vousEtes,
    services,
    message,
    accept: !!accept,
  };

  try {
    await sendTransactionalEmail(params);
    return res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de l'envoi de l'email" });
  }
}
