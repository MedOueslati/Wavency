import { useTranslation } from "react-i18next";
import TemplateGrid from "../../Components/Pricing/TemplateGrid";

const NosModeles = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36"
        loading="lazy"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')"
        }}
      >
        <div className="text-center text-3xl font-bold text-white pt-12">
          {t("model.title")}
        </div>
      </div>
      <div className="container my-32">
        <h3>{t("model.title1")}</h3>
        <h2 className="text-3xl font-semibold mb-10 pt-4">
          {t("model.subtitle")}
        </h2>

        <TemplateGrid />
      </div>
    </>
  );
};
export default NosModeles;
