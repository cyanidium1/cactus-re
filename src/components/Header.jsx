import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Logo from "./Logo.jsx";
import MenuButton from "./MenuButton.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import Socials from "./Socials.jsx";
import { ThemeSwitcher } from "./ThemeSwitcher.jsx";
import useStore from "@/zustand/store/useStore";
export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const onBurgerMenuClose = () => {
    toggleSidebar(false);
    setIsBurgerOpen(false);
  };

  return (
    <Navbar height={"70px"} isBordered className=" header">
      <Socials className="!hidden lg:!flex" />

      <NavbarBrand className="md:mr-40 ">
        <Link href="/">
          <Logo />
        </Link>
      </NavbarBrand>

      <MenuButton
        onClick={() => {
          toggleSidebar(true);
          setIsBurgerOpen(true);
        }}
      />

      <BurgerMenu isBurgerOpen={isBurgerOpen} onClose={onBurgerMenuClose} />
    </Navbar>
  );
}
