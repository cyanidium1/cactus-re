import { Link, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'

import Facebook from '@/icons/Facebook.jsx'
import Instagram from '@/icons/Instagram.jsx'
import Telegram from '@/icons/Telegram.jsx'
import Phone from '@/icons/Phone.jsx'

function Socials({ className }) {
  const socialList = [
    {
      ariaLabel: 'Facebook',
      linkTo: 'https://www.facebook.com/CactusRealEstateAlbania/',
      icon: <Facebook className="hover:scale-125 transition cursor-pointer" />,
      isExternal: true,
    },
    {
      ariaLabel: 'Instagram',
      linkTo: 'https://www.instagram.com/cactus_realestate/',
      icon: (
        <Instagram className="hover:scale-125 focus:scale-125 transition cursor-pointer" />
      ),
      isExternal: true,
    },
    {
      ariaLabel: 'Telegram',
      linkTo: 'https://cactus-realestate.ru/cactus_realestate',
      icon: (
        <Telegram className="hover:scale-125 focus:scale-125 transition cursor-pointer" />
      ),
      isExternal: true,
    },
    {
      ariaLabel: 'Номер телефона',
      linkTo: 'tel:+355695589030',
      icon: (
        <Phone className="hover:scale-125 focus:scale-125 transition cursor-pointer" />
      ),
      isExternal: false,
    },
  ]
  return (
    <NavbarContent className={`hidden sm:flex gap-4 ${className}`}>
      {socialList.map(({ linkTo, icon, ariaLabel, isExternal }) => (
        <NavbarItem key={linkTo}>
          <Link href={linkTo} isExternal={isExternal} aria-label={ariaLabel}>
            {icon}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  )
}

export default Socials
