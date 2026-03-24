import { useParams, Link } from "react-router-dom";
import blogData from "../../data";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));
  const { t } = useTranslation();

  if (!blog) {
    return (
      <div className="container mx-auto my-32 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link to="/blog" className="text-blue-600 underline">
          {t("blogs.blogDetail.title")}
        </Link>
      </div>
    );
  }

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
      <div className="container my-32 max-w-4xl space-y-6">
        <Link to="/blog" className="text-customColor1 underline block">
          {t("blogs.blogDetail.title")}
        </Link>
        <h1 className="text-4xl font-bold ">{t(blog.title)}</h1>
        <p className="text-sm text-gray-500">
          {t(blog.category)} • {t(blog.date)}
        </p>
        <p className="text-gray-600 ">{t(blog.introduction)}</p>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover my-16 rounded-lg shadow-md"
        />

        <h3 className="underline ">{t(blog.headingh1)}</h3>
        <ul className="list-decimal list-inside">
          {blog.content.keyTakeawaysList.map((item, index) => (
            <li key={index}>{t(item)}</li>
          ))}
        </ul>
        {blog.content.sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold ">{t(section.heading)}</h4>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600">
                {t(p)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogDetails;
