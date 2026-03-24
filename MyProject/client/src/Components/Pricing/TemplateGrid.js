import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";
import { templates } from "../../data";

const TemplateGrid = ({ onSelectImage }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ useMemo for performance
  const filteredTemplates = useMemo(
    () =>
      templates.filter((template) =>
        template.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  return (
    <div>
      {/* 🔍 Search Bar */}
      <div className="flex justify-end mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder={t("model.search")}
            className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            maxLength={50}
          />
          <FiSearch className="absolute right-4 top-3.5 text-gray-400 text-xl" />
        </div>
      </div>

      {/* 🖼️ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              {/* Title & Price */}
              <div className="p-5 flex justify-between items-center border-b">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                  {template.title}
                </h3>
                <span className="font-light">{template.price}</span>
              </div>

              {/* Image */}
              <div
                className="overflow-hidden cursor-pointer aspect-square"
                onClick={() => onSelectImage(template.image)}
              >
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover object-top 
                             transition-all duration-[60s] ease-out 
                             group-hover:object-bottom"
                />
              </div>

              {/* Subtitle + CTA */}
              <div className="p-5 flex flex-col flex-grow">
                {template.subtitle && (
                  <p className="text-sm text-gray-600 mb-4">
                    {template.subtitle}
                  </p>
                )}

                <div className="mt-auto">
                  <p className="text-xs font-semibold text-gray-600 mb-2 text-center">
                    Disponible à tout moment sur demande
                  </p>
                  <a
                    href="/contact"
                    className="w-full block text-center border border-gray-700 text-black py-2 
                               rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                  >
                    Voir la démo
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Aucun modèle trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier votre recherche ou explorez nos catégories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateGrid;
