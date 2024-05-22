import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react'
import Logo from './Logo.jsx'
import MenuButton from './MenuButton.jsx'
import BurgerMenu from './BurgerMenu.jsx'
import Socials from './Socials.jsx'
import { ThemeSwitcher } from './ThemeSwitcher.jsx'

export default function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const onBurgerMenuClose = () => setIsBurgerOpen(false)

  return (
    <Navbar height={'70px'} isBordered className=" header">
      <Socials className="!hidden lg:!flex" />

      <NavbarBrand className="lg:flex-grow-0">
        <Logo />
      </NavbarBrand>

      <MenuButton onClick={() => setIsBurgerOpen(true)} />

      <BurgerMenu isBurgerOpen={isBurgerOpen} onClose={onBurgerMenuClose} />
    </Navbar>
  )
}
