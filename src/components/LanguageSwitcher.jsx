import useStore from "@/zustand/store/useStore";
import { Button } from "@nextui-org/react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useStore();

  return (
    <button onClick={toggleLanguage} className="dark:text-slate-400">
      {language === "en" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
