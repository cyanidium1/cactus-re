import { Link } from '@nextui-org/react'
import React from 'react'

function Navigation(props) {
  const menuItems = [
    {
      label: 'Преимущества',
      linkTo: 'https://cactus-realestate.ru/#preimushchestva',
    },
    {
      label: 'Наши услуги',
      linkTo: 'https://cactus-realestate.ru/#uslugi',
    },
    {
      label: 'Примеры недвижимости',
      linkTo: 'https://cactus-realestate.ru/#primery',
    },
    {
      label: 'Отзывы',
      linkTo: 'https://cactus-realestate.ru/#otzyvy',
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
    </ul>
  )
}

export default Navigation
