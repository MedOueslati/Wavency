import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OfferModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleGetOffer = () => {
    closeModal();
    navigate("/contact");
  };

  const handleDeclineOffer = () => {
    closeModal();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-white to-[#C8E2EC] rounded-3xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-3xl flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Close Button inside the modal */}
        <button
          className="absolute top-4 right-4 text-2xl text-black hover:text-gray-600"
          onClick={handleDeclineOffer}
        >
          &times;
        </button>

        {/* Left Side: Image (Hidden on Mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-3xl  ">
          <img
            src="/assets/images/image-3-site.png"
            alt="Forever 21 Promotion"
            className="w-full h-auto object-cover hidden md:block animate-pulse my-16"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 py-6 md:px-8 md:py-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-center">
            Créez votre site web dès maintenant !
          </h2>
          <div className="flex justify-center mb-3">
            <span className="bg-slate-100 font-semibold px-4 py-1 rounded text-red-700">
              Offre Exclusive :
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-center mb-10">
            Hébergement pendant 3 mois +  Nom de domaine GRATUIT
          </p>

          <button
            className="w-full bg-black text-white font-bold rounded py-3 mb-2 hover:bg-customColor1 transition"
            onClick={handleGetOffer}
          >
            👉 Je profite de l'offre
          </button>
          <button
            className="w-full text-black font-semibold rounded py-3 mb-2 hover:bg-transparent transition underline"
            onClick={handleDeclineOffer}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
