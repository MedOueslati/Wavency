import { useTranslation } from "react-i18next";
import ContactSubmit from "../Components/Ui/ContactSubmit";
import { HiLocationMarker } from "react-icons/hi";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36 "
        loading="lazy"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')",
        }}
      >
        <div className=" text-center text-3xl font-bold text-white pt-12">
          {t("contactForm.contactUs")}
        </div>
      </div>
      <section className="container my-32">
          {/* Text on the left */}
          <div className="mb-16 text-left">
            <h3>{t("contactForm.title")}</h3>
            <h2>{t("contactForm.msgdescription")}</h2>

          {/* Offices - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full border-t pt-4 my-16">
            {/* Item 1: Address */}
            <div className="border-l pl-4 flex items-start gap-3">
              <HiLocationMarker className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">
                  {t("contactForm.address")}
                </h4>
                <p className="text-gray-600">Kalâa Seghira, Sousse</p>
              </div>
            </div>

            {/* Item 2: Phone */}
            <div className="border-l pl-4 flex items-start gap-3">
              <FiPhone className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">
                  {t("contactForm.phone")}:
                </h4>
                <p className="text-gray-600">+216 52 816 831</p>
              </div>
            </div>

            {/* Item 3: Email */}
            <div className="border-l pl-4 flex items-start gap-3">
              <FiMail className=" text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">
                  {t("contactForm.email")}:
                </h4>
                <p className="text-gray-600">contact@wavency.tn</p>
              </div>
            </div>

            {/* Item 4: Hours */}
            <div className="border-l pl-4 flex items-start gap-3">
              <FiClock className="ttext-xl mt-1" />
              <div>
                <h4 className="font-semibold text-black">
                  {t("contactForm.horaires")}:
                </h4>
                <p className="text-gray-600">Lun - Ven : 9h - 17h</p>
              </div>
            </div>
          </div>
        </div>

        <ContactSubmit />
      </section>
    </>
  );
};

export default Contact;
