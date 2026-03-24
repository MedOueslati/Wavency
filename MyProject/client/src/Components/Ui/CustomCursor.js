import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa"; // ← you can replace this with any icon

const CustomCursor = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <FaReact size={30} color="#80AFD1" />
    </div>
  );
};

export default CustomCursor;
