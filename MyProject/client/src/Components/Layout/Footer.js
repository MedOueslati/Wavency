import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
<footer
  className="pt-20 pb-10 text-white  bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/assets/images/landscape.jpg')" }}
>      <div className="container ">
        {/* Top Section */}
        <div className="grid gap-10 row-gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img src="/assets/images/logo.png" alt="Logo" className="h-16" />
            </Link>
            <div className="mt-6  text-balance ">
              <p className="text-sm">
                {t("footer.description")}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-base font-bold tracking-wide mb-4">{t("nav.navigation")}</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-customColor1 transition">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/nosoffres" className="hover:text-customColor1 transition">
                  {t("nav.offers")}
                </Link>
              </li>
              <li>
                <Link to="/realisation" className="hover:text-customColor1 transition">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-customColor1 transition">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="text-base font-bold tracking-wide mb-4">{t("footer.contact")}</p>
            <p className="text-sm mb-1">contact@wavency.tn</p>
            <p className="text-sm mb-10">+216 52 816 831</p>

            <div>
              <p className="text-base font-bold tracking-wide mb-2">{t("footer.follow")}</p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=61573086719291" className="hover:text-customColor1 transition" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/wavencytn/" className="hover:text-customColor1 transition" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/wavency-tunisie/" className="hover:text-customColor1 transition" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse items-center justify-between border-t pt-6 lg:flex-row text-sm">
          <p className="text-white mt-4  "> 
            © {new Date().getFullYear()} <strong>Wavency </strong>. {t("footer.rights")}
          </p>
          <ul className="flex space-x-5 ">
            <li>
              <Link to="/MentionsLegales" className="hover:text-customColor1 transition">{t("footer.privacy")}</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
