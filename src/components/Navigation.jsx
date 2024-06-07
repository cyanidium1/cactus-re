import { Link } from "@nextui-org/react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import useStore from "@/zustand/store/useStore";

function Navigation() {
  const { translations, language, setLanguage } = useStore();
  //const isRu = language === "ru";
  const menuItems = [
    {
      label: translations.BurgerMenu.catalogue,
      linkTo: "https://cactus-realestate.ru/#preimushchestva",
    },
    {
      label: translations.BurgerMenu.postAnAd,
      linkTo: "https://cactus-realestate.ru/#uslugi",
    },
    {
      label: translations.BurgerMenu.instagram,
      linkTo: "https://cactus-realestate.ru/#instagram",
    },
  ];

  return (
    <ul className="flex flex-col gap-[15px]">
      {menuItems.map(({ label, linkTo }, index) => (
        <li key={`${label}-${index}`}>
          <Link
            className="w-full text-customGreen text-lg font-normal hover:text-green-400 duration-300 transition-all"
            href={linkTo}
            size="lg"
          >
            {label}
          </Link>
        </li>
      ))}
      <li>
        <LanguageSwitcher setLanguage={setLanguage} />
      </li>
      <li key="switch">
        <ThemeSwitcher />
      </li>
    </ul>
  );
}

export default Navigation;
