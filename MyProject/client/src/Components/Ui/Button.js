import { useTranslation } from "react-i18next";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Button = () => {
  const { t } = useTranslation();
  return (
    <button className="text-white font-medium py-3 px-6 rounded-full transition duration-300 bg-gradient-to-r from-customColor1 to-customColor2 hover:from-[#2C2E2D] hover:to-[#2C2E2D]">
      {t("ui.button")}
      <FaArrowUpRightFromSquare className="inline-block align-middle ml-4 text-lg" />
    </button>
  );
};

export default Button;
