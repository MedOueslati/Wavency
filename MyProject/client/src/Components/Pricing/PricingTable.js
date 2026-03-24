import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PricingTable = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing.plan1.name"), // e.g. "site vitrine"
      price: "500 TND",
      subText: "",
      description: t("pricing.plan1.description"),
      total: "US$ 143.52",
      renewal: "US$ 10.99/mo",
      features: [
        t("pricing.plan1.feature1"),
        t("pricing.plan1.feature2"),
        t("pricing.plan1.feature3"),
      ],
      badge: false,
    },
    {
      name: t("pricing.plan2.name"), // e.g. "Site Vitrine Avancé"
      price: "1500 TND",
      subText: t("pricing.plan2.subText"),
      description: t("pricing.plan2.description"),
      total: "US$ 181.92",
      renewal: "US$ 13.99/mo",
      features: [
        t("pricing.plan2.feature1"),
        t("pricing.plan2.feature2"),
        t("pricing.plan2.feature3"),
        t("pricing.plan2.feature4"),
        t("pricing.plan2.feature5"),
        t("pricing.plan2.feature6"),
      ],
      badge: "-50% ",
      bestDeal: true,
    },
    {
      name: t("pricing.plan3.name"), // e.g. "Site E-commerce"
      price: "5000 TND",
      // subText: "Includes free domain for 1 year",
      total: "US$ 383.52",
      renewal: "US$ 25.99/mo",
      features: [
        t("pricing.plan3.feature1"),
        t("pricing.plan3.feature2"),
        t("pricing.plan3.feature3"),
        t("pricing.plan3.feature4"),
        t("pricing.plan3.feature5"),
      ],
      // badge: "71% OFF",
    },
    {
      name: t("pricing.plan4.name"), // e.g. "Site E-commerce avancé"
      price: "6790 TND",
      total: "US$ 383.52",
      renewal: "US$ 25.99/mo",
      features: [
        t("pricing.plan4.feature1"),
        t("pricing.plan4.feature2"),
        t("pricing.plan4.feature3"),
        t("pricing.plan4.feature4"),
        t("pricing.plan4.feature5"),
        t("pricing.plan4.feature6"),
      ],
      // badge: "71% OFF",
    },
  ];

  const design = [
    {
      name: t("design.creation.name"),
      price: t("design.creation.price"),
      features: [
        t("design.creation.feature1"),
        t("design.creation.feature2"),
        t("design.creation.feature3"),
        t("design.creation.feature4"),
        t("design.creation.feature5"),
      ],
    },
    {
      name: t("design.charte.name"),
      price: t("design.charte.price"),
      features: [
        t("design.charte.feature1"),
        t("design.charte.feature2"),
        t("design.charte.feature3"),
        t("design.charte.feature4"),
        t("design.charte.feature5"),
        t("design.charte.feature6"),
      ],
    },
    {
      name: t("design.social.name"),
      price: t("design.social.price"),
      features: [
        t("design.social.feature1"),
        t("design.social.feature2"),
        t("design.social.feature3"),
      ],
    },
    {
      name: "Pack Vidéo Editing",
      price: "À partir de 100 TND",
      features: [
        "Montage de vidéos courtes (Reels, Stories, TikTok, Youtube...)",
        "Ajout de sous-titres animés",
        "Transitions dynamiques et effets visuels",
        "Habillage graphique personnalisé (logo, couleurs)",
      ],
    },
  ];

  return (
    <>
      <section>
        <div className="text-left">
<h3 className="text-xl font-semibold">
  {t("pricing.chooseTitle")}
</h3>
<h2 className="text-3xl font-bold">
  {t("pricing.chooseSubtitle")}
</h2>        </div>
        <div className="grid md:grid-cols-4 gap-8 px-6 items-stretch my-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl p-6 shadow-md transition hover:shadow-xl flex flex-col h-full ${
                plan.bestDeal
                  ? "border-black scale-105 z-10"
                  : "border-gray-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {plan.badge}
                </div>
              )}
              <div className="text-left">
                <h3 className="text-xl font-semibold py-4 text-black ">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-customColor1 ">
                  {plan.price}
                </p>
                <p className="text-sm text-gray-700 mt-2 ">{plan.subText}</p>
              </div>
              <ul className="mt-6 mb-6 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 justify-left">
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="mt-auto w-full">
                <button className="w-full bg-customColor1 text-white font-medium py-2 rounded-xl transition">
                  {t("pricing.order")}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-4 gap-8 px-6 items-stretch my-16">
          {design.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-md transition hover:shadow-xl flex flex-col h-full"
            >
              <div className="text-left">
                <h3 className="text-xl font-semibold py-4  text-black">
                  {item.name}
                </h3>
                <p className="text-3xl font-bold text-customColor1">
                  {item.price}
                </p>
              </div>

              <ul className="mt-6 mb-6 space-y-2 text-sm">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 justify-left">
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="mt-auto w-full">
                <button className="w-full bg-customColor1 text-white font-medium py-2 rounded-xl transition">
                  {t("pricing.order")}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingTable;
