import { Button, Link } from "@nextui-org/react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import useStore from "@/zustand/store/useStore";

function Navigation({ isRU, setIsRu }) {
  const { translations } = useStore();
  const menuItems = [
    {
      label: translations.catalogue,
      linkTo: "https://cactus-realestate.ru/#preimushchestva",
    },
    {
      label: translations.postAnAd,
      linkTo: "https://cactus-realestate.ru/#uslugi",
    },
    {
      label: translations.instagram,
      linkTo: "https://cactus-realestate.ru/#instagram",
    },
  ];

  return (
    <ul className="flex flex-col gap-[15px]">
      {menuItems.map(({ label, linkTo, labelEn }, index) => (
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
        <LanguageSwitcher />
        {/* <Button onClick={() => setIsRu(!isRU)}>{isRU ? "RU" : "EN"}</Button> */}
      </li>
      <li key="switch">
        <ThemeSwitcher />
      </li>
    </ul>
  );
}

export default Navigation;
