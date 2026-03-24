import { useState } from "react";
import { linkedinBanners } from "../../data";
import { useTranslation } from "react-i18next";

const Banners = () => {
  const { t } = useTranslation();
  const [openImage, setOpenImage] = useState(null);

  return (
    <>
     <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36"
        loading="lazy"
        style={{
          backgroundImage:"url('/assets/images/landscape.jpg')"
        }}
      >
        <div className="text-center text-3xl font-bold text-white pt-12">
          {t("model.bannertitle")}
        </div>
      </div>


      {/* Banners Grid */}
      <section className="container my-32">
         <h3>{t("model.bannertitle1")}</h3>
        <h2 className="text-3xl font-semibold mb-10 pt-4">
          {t("model.subtitle2")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkedinBanners.map((banner, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
              onClick={() => setOpenImage(banner.src)}
            >
              <img
                src={banner.src}
                alt={banner.name || banner.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-60 p-4 opacity-0 group-hover:opacity-100 transition-opacity">

                {banner.title && (
                  <p className="text-gray-200 text-sm">{banner.title}</p>
                )}
                {banner.price && (
                  <h3 className="text-white">
                    {banner.price}

                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {openImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setOpenImage(null)}
          >
            <img
              src={openImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Banners;
