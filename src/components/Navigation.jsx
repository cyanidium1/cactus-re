import { Link } from '@nextui-org/react'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

function Navigation(props) {
  const menuItems = [
    {
      label: 'Каталог',
      linkTo: 'https://cactus-realestate.ru/#preimushchestva',
    },
    {
      label: 'Подать объявление',
      linkTo: 'https://cactus-realestate.ru/#uslugi',
    },
    {
      label: 'Мы в Instagram',
      linkTo: 'https://cactus-realestate.ru/#instagram',
    },
  ]

  return (
    <ul className="flex flex-col gap-[15px]">
      {menuItems.map(({ label, linkTo }, index) => (
        <li key={`${label}-${index}`}>
          <Link
            className="w-full text-customGreen hover:text-neutral-400 focus:text-neutral-400 text-lg font-normal focus:font-semibold hover:font-semibold transition-all"
            href={linkTo}
            size="lg"
          >
            {label}
          </Link>
        </li>
      ))}
      <li key='switch'>
        <ThemeSwitcher />
      </li>
      <li>

      </li>
    </ul>
  )
}

export default Navigation
