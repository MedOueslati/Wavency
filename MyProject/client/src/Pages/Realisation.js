import { useTranslation } from "react-i18next";
import { galeries } from "../data";
import { useState } from "react";

const Realisation = () => {
  const { t } = useTranslation();
  const [openImage, setOpenImage] = useState(null);

  return (
    <>
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36 "
        loading="lazy"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')"
        }}
      >
        <div className=" text-center text-3xl font-bold text-white pt-12">
          {t("realisation.title")}
        </div>
      </div>
      <section className="container py-32">
        <div className="flex ">
          {/* Texte à gauche */}
          <div>
            <h3>{t("realisation.title")}</h3>
            <h2>{t("realisation.subtitle")}</h2>
            <p className="text-gray-600 mb-10 ">{t("services.description1")}</p>
          </div>

          {/* Vidéo à droite */}
        </div>
        <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {galeries?.map((galerie, index) => (
            <div
              key={index}
              className="relative group rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setOpenImage(galerie.originalSrc || galerie.src)}
            >
              <div className="aspect-[3/2] w-full">
                <img
                  src={galerie.src}
                  alt={galerie.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300">
                <h3 className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {galerie.title}
                </h3>
              </div>
            </div>
          ))}
        </figure>

        {/* Modal simple */}
        {openImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setOpenImage(null)}
          >
            <img
              src={openImage}
              alt="agrandie"
              className="max-w-full max-h-full rounded"
              onClick={(e) => e.stopPropagation()} // empêcher la fermeture au clic sur l’image
            />
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
              aria-label="Fermer"
            >
              x
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Realisation;
