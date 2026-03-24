import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const InfiniteIconsScroll = () => {
  const icons = [
    { id: 1, name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" /> }, // Adobe Illustrator Color
    { id: 2, name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> }, // Adobe Photoshop Color
    { id: 3, name: "React", icon: <FaReact className="text-[#61DAFB]" /> }, // React Color
    { id: 4, name: "NodeJs", icon: <FaNodeJs className="text-[#68A063]" /> }, // Node.js Color
    { id: 5, name: "Express", icon: <SiExpress className="text-[#000000]" /> }, // Express Color
    { id: 6, name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }, // MongoDB Color
    { id: 7, name: "HTML5", icon: <FaHtml5 className="text-[#E44D26]" /> }, // HTML5 Color
    { id: 8, name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> }, // CSS3 Color
    { id: 9, name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
    { id: 10, name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
    { id: 11, name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { id: 12, name: "NodeJs", icon: <FaNodeJs className="text-[#68A063]" /> },
    { id: 13, name: "Express", icon: <SiExpress className="text-[#000000]" /> },
    { id: 14, name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { id: 15, name: "HTML5", icon: <FaHtml5 className="text-[#E44D26]" /> },
    { id: 16, name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  ];

  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="relative w-full overflow-hidden py-16">
      <div className="flex items-center">
        <div className="flex animate-infinite-scroll-left items-center">
          {duplicatedIcons.map((item, i) => (
            <div
              key={i}
              className="mx-8 flex-shrink-0"
            >
              <div className="flex flex-col items-center text-gray-500 hover:text-customColor1 transition-colors duration-300 cursor-pointer">
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {item.icon}
                </div>
                {/* Centered Text */}
                <span className="text-sm font-medium text-center">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteIconsScroll;
