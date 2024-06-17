import { useState, useEffect } from "react";

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <a
        id="back-to-top"
        className="fixed text-lg rounded-full z-20 bottom-5 left-1/2 transform -translate-x-1/2 size-10 hover:scale-110 transition-all duration-300 cursor-pointer text-center bg-customGreen text-white justify-center items-center flex"
        onClick={handleClick}
        style={{ bottom: "2rem" }} // Add bottom spacing to avoid overlap with modals
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </a>
    )
  );
};

export default ButtonUp;
