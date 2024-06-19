import { useEffect } from "react";

const SetBodyWidth = () => {
  useEffect(() => {
    // Функция для установки ширины body
    const setBodyWidth = () => {
      document.body.style.width = `${window.innerWidth}px`;
    };

    setBodyWidth();

    window.addEventListener("resize", setBodyWidth);

    return () => {
      window.removeEventListener("resize", setBodyWidth);
    };
  }, []);

  return null;
};

export default SetBodyWidth;
