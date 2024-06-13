import useStore from "@/zustand/store/useStore";
import { Button } from "@nextui-org/react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useStore();

  return (
    <button onClick={toggleLanguage} className="text-black dark:text-slate-400">
      {language === "ru" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
