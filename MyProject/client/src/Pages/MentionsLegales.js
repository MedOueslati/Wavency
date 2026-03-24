import { useTranslation } from "react-i18next";

const MentionsLegales = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')",
        }}
      >
        <div className="text-center text-3xl font-bold text-white pt-12">
          {t("Mentions Légales et Politique de Confidentialité")}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-lg text-gray-800 my-16 px-6">
        <h4 className="text-xl font-semibold mb-4">
          {t("1. Présentation du site")}
        </h4>
        <p className="mb-6">
          {t("Siège social : Kalâa Seghira, Sousse")}
          <br />
          {t("Téléphone : +216 52 816 831")}
          <br />
          {t("E-mail : contact@wavency.tn")}
          <br />
          {t("Créateur et responsable de la publication : WAVENCY")}
          <br />
          {t("Hébergeur : Hostinger, www.hostinger.com")}
        </p>

        <h4 className="text-xl font-semibold mb-4">
          {t("2. Conditions Générales d'Utilisation")}
        </h4>
        <p className="mb-6">
          {t(
            "L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-dessous."
          )}
          <br />
          {t(
            "Mise à jour : Le site de Wavency est régulièrement mis à jour. Les mentions légales et la politique de confidentialité peuvent être modifiées sans préavis. Nous invitons donc les utilisateurs à consulter régulièrement ces informations."
          )}
          <br />
          {t(
            "Objet du site : Le site de Wavency a pour vocation de fournir des informations concernant les services de la société, incluant des informations sur l'entreprise, ses activités et ses offres."
          )}
          <br />
          {t(
            "Exactitude des informations : Wavency met tout en œuvre pour fournir des informations exactes et à jour. Cependant, aucune garantie n'est donnée quant à l'exactitude, la précision ou l'exhaustivité des informations diffusées."
          )}
        </p>

        <h4 className="text-xl font-semibold mb-4">
          {t("3. Politique de Confidentialité")}
        </h4>
        <p className="mb-6">
          {t(
            "Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez notre site."
          )}
        </p>

        <h5 className="font-semibold mb-2">{t("3.1. Données Collectées")}</h5>
        <p className="mb-6">
          {t(
            "Lors de votre navigation sur notre site ou de votre contact avec nous via le formulaire ou par e-mail, nous pouvons collecter les données suivantes :"
          )}
          <ul className="list-disc pl-6 mt-2">
            <li>
              {t(
                "Informations personnelles : Nom, prénom, adresse e-mail, numéro de téléphone."
              )}
            </li>
            <li>
              {t(
                "Données de navigation : Adresse IP, type de navigateur, pages visitées, durée de la session."
              )}
            </li>
          </ul>
        </p>

        <h5 className="font-semibold mb-2">
          {t("3.2. Utilisation des Données")}
        </h5>
        <p className="mb-6">
          {t("Les données que nous recueillons sont utilisées pour :")}
          <ul className="list-disc pl-6 mt-2">
            <li>{t("Améliorer l'expérience utilisateur")}</li>
            <li>{t("Répondre aux demandes")}</li>
            <li>{t("Communication commerciale (avec votre consentement)")}</li>
          </ul>
        </p>

        <h5 className="font-semibold mb-2">
          {t("3.3. Protection des Données")}
        </h5>
        <p className="mb-6">
          {t(
            "Nous prenons des mesures appropriées pour protéger vos informations personnelles contre toute perte, utilisation abusive ou accès non autorisé."
          )}
        </p>

        <h5 className="font-semibold mb-2">{t("3.4. Partage des Données")}</h5>
        <p className="mb-6">
          {t(
            "Vos données personnelles ne sont pas vendues, échangées ou cédées à des tiers à des fins commerciales. Cependant, nous pouvons être amenés à partager vos informations avec des prestataires de services tiers dans le cadre de l'exécution de nos activités."
          )}
        </p>

        <h5 className="font-semibold mb-2">{t("3.5. Vos Droits")}</h5>
        <p className="mb-6">
          {t(
            "Vous disposez des droits suivants sur vos données personnelles :"
          )}
          <ul className="list-disc pl-6 mt-2">
            <li>{t("Droit d'accès")}</li>
            <li>{t("Droit de rectification")}</li>
            <li>{t("Droit à l'effacement")}</li>
            <li>{t("Droit d'opposition")}</li>
            <li>{t("Droit à la portabilité")}</li>
          </ul>
        </p>

        <h5 className="font-semibold mb-2">{t("3.6. Cookies")}</h5>
        <p className="mb-6">
          {t(
            "Le site www.Wavency.tn utilise des cookies pour améliorer l'expérience utilisateur. Ces petits fichiers sont stockés sur votre appareil afin de nous permettre de mieux comprendre vos préférences et d'optimiser la navigation sur le site."
          )}
        </p>

        <h5 className="font-semibold mb-2">
          {t("3.7. Modification de la Politique de Confidentialité")}
        </h5>
        <p className="mb-6">
          {t(
            "Wavency se réserve le droit de modifier cette politique de confidentialité à tout moment."
          )}
        </p>

        <h4 className="text-xl font-semibold mb-4">{t("5. Responsabilité")}</h4>
        <p className="mb-6">
          {t(
            "Wavency ne peut être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site."
          )}
        </p>

        <h4 className="text-xl font-semibold mb-4">{t("6. Contact")}</h4>
        <p className="mb-6">
          {t(
            "Pour toute question concernant les mentions légales ou la politique de confidentialité, vous pouvez nous contacter par :"
          )}
          <ul className="list-disc pl-6 mt-2">
            <li>{t("• Email : contact@wavency.tn")}</li>
            <li>{t("• Adresse :Kalâa Seghira, Sousse Rue Ibn Jubaier")}</li>
            <li>{t("• Téléphone : +216 52 816 831")}</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
