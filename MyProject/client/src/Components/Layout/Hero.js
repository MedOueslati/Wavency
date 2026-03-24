import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiPhoneCall } from "react-icons/bi";
import { FaCompass } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <figure className="min-h-screen flex items-center">
      {/* Lazy-loaded background image */}
      <img
        src="/assets/images/Hero-image.jpg"
        alt="Hero background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Foreground content */}
      <section
        className="container text-center relative z-10"
      >
        <h2 className="text-white font-semibold text-3xl md:text-5xl lg:text-7xl text-balance">
          {t("hero.title1")}
          <span className="font-light block">{t("hero.title2")}</span>
        </h2>

        {/* Button group with spacing */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link to="/contact">
            <button
              type="button"
              className="bg-gradient-to-r from-customColor1 to-customColor2 hover:opacity-90 text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center gap-2"
            >
              {t("hero.button")}
              <BiPhoneCall className="text-lg" />
            </button>
          </Link>
          <Link to="/nosmodeles">
            <button
              type="button"
              className=" border border-gray-50 hover:opacity-90 text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center gap-2"
            >
              {t("hero.button2")}
              <FaCompass className="text-lg" />
            </button>
          </Link>
        </div>
      </section>
    </figure>
  );
};

export default Hero;
