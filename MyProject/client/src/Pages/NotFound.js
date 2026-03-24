import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover "
              loading="lazy"

        style={{ backgroundImage: `url(/assets/images/Hero-image.jpg)` }} // Reference directly from the public folder
      />
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white px-6 z-10">
        {/* 404 Error Text */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
          404 - Page Not Found
        </h1>
        <p className="font-light text-xl sm:text-2xl mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Button to go home */}
        <button
          className="bg-customColor1 text-white py-3 px-6 rounded-full mt-8 text-lg flex items-center justify-center gap-2 group"
          onClick={handleGoHome}
        >
          Go Home
          <FiArrowRight className="transform transition-transform duration-300 group-hover:rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
