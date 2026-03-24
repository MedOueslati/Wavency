import { useTranslation } from "react-i18next";
import {  FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../Components/Layout/Hero";
import InfiniteLogoScroll from "../Components/Ui/InfiniteLogoScroll";
import InfiniteIconsScroll from "../Components/Ui/InfiniteIconsScroll";
import InfiniteTemplatesScroll from "../Components/Ui/InfiniteTemplatesScroll";
import Button from "../Components/Ui/Button";
import { galeries } from "../data";
import { fadeUp } from "../utils/Motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      <div className="container my-32">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
        >
          <div className="flex flex-col md:flex-row gap-32">
            {/* Text content on the left */}
            <div className="md:w-1/2 ">
              <h2>
                {t("home.word")}
                <span className="text-customColor1">
                  <Typewriter
                    words={[t("home.subtitle")]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <p className=" text-justify text-gray-600 pb-10 ">
                {t("home.description1")}
              </p>
              <Link to="/services">
                <Button />
              </Link>
            </div>
            {/* Video on the right */}
            <div className="md:w-1/2 w-full aspect-video overflow-hidden rounded-lg">
              <video
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                src="/assets/videos/wavency-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
          <InfiniteLogoScroll />
        </motion.section>
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
        >
          <div className="pt-32">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/2 w-full">
                <h3>{t("home.services.title")}</h3>
                <h2>{t("home.subtitle2")}</h2>
                <p className="text-justify text-gray-600 mb-6">
                  {t("home.description2")}
                </p>
                <ul className="space-y-4 text-base shrink-0">
                  {[
                    "home.services.li1",
                    "home.services.li2",
                    "home.services.li3",
                    "home.services.li4",
                    "home.services.li5",
                    "home.services.li6",
                  ].map((key) => (
                    <li key={key} className="flex items-center gap-3">
                      <FiCheckCircle className="text-xl text-customColor1 shrink-0" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
              {/* img on the right */}
              <div className="md:w-1/2  ">
                <figure className="w-full flex justify-center items-start">
                  <img
                    src="/assets/images/image-3-site.png"
                    alt="Design d'identité visuelle"
                    className=" object-cover rounded-2xl"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
            <InfiniteIconsScroll />
          </div>
        </motion.section>
        {/* Nos Réalisation */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
        >
          <div className="text-left pt-32">
            <h3>{t("home.realisations.title")}</h3>
            <h2>{t("home.realisations.description")}</h2>
          </div>
          <figure className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 cursor-pointer">
            {galeries?.map((galerie, index) => (
              <div
                key={index}
                className="relative group rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/2] w-full ">
                  <img
                    src={galerie.src}
                    alt={galerie.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 "
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {galerie.title}
                  </h3>
                </div>
              </div>
            ))}
          </figure>
        </motion.section>
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
        >
          <div className="text-left pt-32 ">
            <h3>{t("home.modelels")}</h3>
            <h2>{t("home.modeles.subtitle")}</h2>
            <InfiniteTemplatesScroll />
          </div>
        </motion.section>
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
        >
          <div className="pt-32 flex flex-col md:flex-row gap-12 ">
            <div className="md:w-1/2">
              <h3>Contactez-Nous</h3>
              <h2>{t("home.rdvtitle")}</h2>
              <p className="text-gray-700 pb-10">{t("home.rdvdescription")}</p>
              <div className="space-y-4 ">
                <div className="flex items-center ">
                  <img
                    src="/assets/images/horlogeicon.png"
                    alt="Horloge"
                    className="w-6 h-6 mr-2 "
                  />
                  <span>{t("home.rdvstep1")}</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/assets/images/entretienicon.png"
                    alt="Entretien"
                    className="w-6 h-6 mr-2 "
                  />
                  <span>{t("home.rdvstep2")}</span>
                </div>
              </div>
              <Link to="/contact">
                <motion.button className="text-white font-medium py-3 px-6 mt-10 rounded-full transition duration-300 bg-gradient-to-r from-customColor1 to-customColor2 hover:from-[#2C2E2D] hover:to-[#2C2E2D]">
                  {t("hero.button")}
      <FaArrowUpRightFromSquare className="inline-block align-middle ml-4 text-lg" />
                </motion.button>
              </Link>
            </div>
            <div className="md:w-1/2 flex">
              <img
                src="https://res.cloudinary.com/wavency/image/upload/v1760271061/contact_us_pcjkfq.jpg"
                alt=""
                className="object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
