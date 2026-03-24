import { useTranslation } from "react-i18next";
import blogData from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import FacebookComments from "./FacebookComments";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Blogs = () => {
  const currentUrl = window.location.href;
  const { t } = useTranslation();
  const tabs = ["All", "Articles", "Tutorials", "News"];
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData =
    activeTab === "All"
      ? blogData
      : blogData.filter((item) => item.category === activeTab);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36"
        loading="lazy"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')"
        }}
      >
        <div className="text-center text-3xl font-bold text-white pt-12">
          {t("blogs.title")}
        </div>
      </div>

      <div className="container my-32">
        <h3>{t("blogs.title1")}</h3>
        <h2 className="text-3xl font-semibold mb-10 pt-4">
          {t("blogs.subtitle")}
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 cursor-pointer">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? "bg-customColor1 text-white" : "bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {paginatedData.map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.id}`}
              className="block rounded-lg  overflow-hidden   bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg transition duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="space-y-2">
                <h4 className="font-light text-sm  text-gray-600 transition duration-300 hover:text-customColor1 ">
                  {t(item.date)}
                </h4>
                <h3 className="flex items-start justify-between gap-16 text-lg font-semibold text-gray-800 hover:text-customColor1 transition-colors duration-300">
                  {t(item.title)}
                  <FaArrowUpRightFromSquare
                    className="text-customColor1 text-sm"
                    size={18}
                  />
                </h3>
                <p className="font-light ">{t(item.excerpt)}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from(
            { length: Math.ceil(filteredData.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-customColor1 text-white"
                    : "bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
        <FacebookComments url={currentUrl} />
      </div>
    </>
  );
};

export default Blogs;
