import Button from "../Components/Ui/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaReact,
  FaPalette,
  FaVideo,
  FaMobileAlt,
  FaShoppingCart,
} from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{t("seo.servicesPage.title")}</title>
      <meta name="description" content={t("seo.servicesPage.description")} />
      <meta name="keywords" content={t("seo.servicesPage.keywords")} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={t("seo.servicesPage.ogTitle")} />
      <meta
        property="og:description"
        content={t("seo.servicesPage.ogDescription")}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wavency.tn/services" />
      <meta
        property="og:image"
        content="https://wavency.tn/assets/images/logowavency.png"
      />
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36 "
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')"
        }}
      >
        <div className="text-center text-3xl font-bold text-white pt-12">
          {t("services.title1")}
        </div>
      </div>

      <section className="container my-32">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
          {/* Texte à gauche */}
          <div className="md:w-1/2 ">
            <h3>{t("services.title2")}</h3>
            <h2>{t("services.subtitle")}</h2>
            <p className="text-gray-600 mb-6 ">{t("services.description1")}</p>
            <h5 className="text-lg font-medium mt-6 mb-2">
              {t("services.identity.title")}
            </h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("services.identity.li1")}</li>
              <li>{t("services.identity.li2")}</li>
              <li>{t("services.identity.li3")}</li>
            </ul>

            <h5 className="text-lg font-medium mt-6 mb-2">
              {t("services.website.title")}
            </h5>
            <p className="text-gray-700 mb-3">{t("services.website.intro")}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-16">
              <li>{t("services.website.li1")}</li>
              <li>{t("services.website.li2")}</li>
              <li>{t("services.website.li3")}</li>
              <li>{t("services.website.li4")}</li>
            </ul>

            <Link to="/nosoffres">
              <Button />
            </Link>
          </div>

          {/* img à droite */}
          <div className="md:w-1/2 ">
            <figure className="w-full flex justify-start ">
              <img
                src="https://res.cloudinary.com/wavency/image/upload/v1760271018/banner6s_obacor.png"
                alt="Design d'identité visuelle"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
        <div className="text-center pt-32">
          {/* Section Heading */}

          <h4 className=" mb-12">{t("services.overview.subtitle")}</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Hosting */}
            <div className="p-6 rounded-xl bg-slate-50 hover:bg-slate-200 transition text-left">
              <FaGlobe className="text-customColor1 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {t("services.overview.hosting.title")}
              </h3>
              <p className="text-gray-700">
                {t("services.overview.hosting.desc")}
              </p>
            </div>

            {/* React Development */}
            <div className="p-6 rounded-xl bg-slate-50 hover:bg-slate-200 transition text-left">
              <FaReact className="text-customColor1 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {t("services.overview.react.title")}
              </h3>
              <p className="text-gray-700">
                {t("services.overview.react.desc")}
              </p>
            </div>

            {/* Design */}
            <div className="p-6 rounded-xl bg-slate-50 hover:bg-slate-200 transition text-left">
              <FaPalette className="text-customColor1 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {t("services.overview.design.title")}
              </h3>
              <p className="text-gray-700">
                {t("services.overview.design.desc")}
              </p>
            </div>

            {/* Video Editing */}
            <div className="p-6 rounded-xl bg-slate-50 hover:bg-slate-200 transition text-left">
              <FaVideo className="text-customColor1 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {t("services.overview.video.title")}
              </h3>
              <p className="text-gray-700">
                {t("services.overview.video.desc")}
              </p>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-xl bg-slate-50 hover:bg-slate-200 transition text-left">
              <FaMobileAlt className="text-customColor1 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {t("services.overview.social.title")}
              </h3>
              <p className="text-gray-700">
                {t("services.overview.social.desc")}
              </p>
            </div>
            {/* E-commerce */}
            <div className="p-6 rounded-xl bg-slate-50 hover:bg-slate-200 transition text-left">
              <FaShoppingCart className="text-customColor1 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {t("services.overview.ecommerce.title")}
              </h3>
              <p className="text-gray-700">
                {t("services.overview.ecommerce.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
