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

export default function Header({ isRU, setIsRu }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const onBurgerMenuClose = () => setIsBurgerOpen(false);

  return (
    <Navbar height={"70px"} isBordered className=" header">
      <Socials className="!hidden lg:!flex" />

      <NavbarBrand className="md:mr-40">
        <Link href="/">
          <Logo />
        </Link>
      </NavbarBrand>

      <MenuButton onClick={() => setIsBurgerOpen(true)} />

      <BurgerMenu isRU={isRU} setIsRu={setIsRu} isBurgerOpen={isBurgerOpen} onClose={onBurgerMenuClose} />
    </Navbar>
  );
}
