import { useTranslation } from "react-i18next";
import PricingTable from "../Components/Pricing/PricingTable";

const NosOffres = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36"
        loading="lazy"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')"
        }}
      >
        <div className=" text-center text-3xl font-bold text-white pt-12">
          {t("offers.title")}
        </div>
      </div>
      <section className="container my-32 ">
        <PricingTable />
      </section>
    </>
  );
};

export default NosOffres;
