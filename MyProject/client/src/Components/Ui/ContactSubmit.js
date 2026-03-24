import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactSubmit = () => {
  // EmailJS service and template info
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // null | "success" | "error"
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nom: "",
    nomEntreprise: "",
    email: "",
    telephone: "",
    sujet: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.nom,
          from_email: formData.email,
          subject: formData.sujet,
          message: formData.message,
          telephone: formData.telephone,
          nom_entreprise: formData.nomEntreprise,
          service: formData.service,
        },
        userID
      )
      .then(
        () => {
          setMessageStatus("success");
          setIsLoading(false);
          setFormData({
            nom: "",
            nomEntreprise: "",
            email: "",
            telephone: "",
            sujet: "",
            service: "",
            message: "",
          });
        },
        () => {
          setMessageStatus("error");
          setIsLoading(false);
        }
      );
  };

  return (
      <form onSubmit={sendEmail} className="space-y-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nom"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              {t("contactForm.namePlaceholder")}: *
            </label>
            <input
              id="nom"
              type="text"
              name="nom"
              className="p-3 border border-gray-300 rounded-md w-full"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="nomEntreprise"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              {t("contactForm.companyPlaceholder")}: *
            </label>
            <input
              id="nomEntreprise"
              type="text"
              name="nomEntreprise"
              className="p-3 border border-gray-300 rounded-md w-full"
              value={formData.nomEntreprise}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {t("contactForm.emailPlaceholder")}: *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="p-3 border border-gray-300 rounded-md w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {t("contactForm.telephonePlaceholder")}: *
          </label>
          <input
            id="telephone"
            type="number"
            name="telephone"
            className="p-3 border border-gray-300 rounded-md w-full"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="sujet"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {t("contactForm.subjectPlaceholder")}: *
          </label>
          <input
            id="sujet"
            type="text"
            name="sujet"
            className="p-3 border border-gray-300 rounded-md w-full"
            value={formData.sujet}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {t("contactForm.subjectPlacerholder")}: *
          </label>
          <select
            id="service"
            name="service"
            className="p-3 border border-gray-300 rounded-md w-full"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              {t("contactForm.offrePlaceholder")}
            </option>
            <option value="graphicDesign&developpement">
              {t("contactForm.graphicDesign&developpement")}
            </option>
            <option value="site vitrine">{t("contactForm.service1")}</option>
            <option value="site vitrine avancé">
              {t("contactForm.service2")}
            </option>
            <option value="site ecommerce">{t("contactForm.service3")}</option>
            <option value="site ecommerce avancé">
              {t("contactForm.service4")}
            </option>
            <option value="creation graphique">
              {t("contactForm.service5")}
            </option>
            <option value="chartte graphique complete">
              {t("contactForm.service6")}
            </option>
            <option value="gestion de reseaux sociaux">
              {t("contactForm.service7")}
            </option>
            <option value="Modéle">{t("contactForm.service8")}</option>
            <option value="Offre Speciale">{t("contactForm.service9")}</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {t("contactForm.MessagePlaceholder")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="p-3 border border-gray-300 rounded-md w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col items-center pt-2">
          <button
            type="submit"
            className={`w-full sm:w-auto py-3 px-8 rounded-full text-white font-semibold transition duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-customColor1 hover:bg-[#2C2E2D]"
            }`}
            disabled={isLoading}
          >
            {isLoading ? t("button.sending") : t("button.send")}
          </button>

          {messageStatus === "success" && (
            <p className="mt-3 text-green-600 text-sm font-medium">
              {t("contactForm.successMessage")}
            </p>
          )}
          {messageStatus === "error" && (
            <p className="mt-3 text-red-600 text-sm font-medium">
              {t("contactForm.errorMessage")}
            </p>
          )}
        </div>
      </form>
  );
};

export default ContactSubmit;
