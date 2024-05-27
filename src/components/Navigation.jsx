import { Button, Link } from '@nextui-org/react'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

function Navigation({ isRU, setIsRu }) {
  const menuItems = [
    {
      label: 'Каталог',
      labelEn: 'Catalogue',
      linkTo: 'https://cactus-realestate.ru/#preimushchestva',
    },
    {
      label: 'Подать объявление',
      labelEn: 'Post an ad',
      linkTo: 'https://cactus-realestate.ru/#uslugi',
    },
    {
      label: 'Мы в Instagram',
      labelEn: 'Our instagram',
      linkTo: 'https://cactus-realestate.ru/#instagram',
    },
  ]

  return (
    <ul className="flex flex-col gap-[15px]">
      {menuItems.map(({ label, linkTo, labelEn }, index) => (
        <li key={`${label}-${index}`}>
          <Link
            className="w-full text-customGreen text-lg font-normal hover:text-green-400 duration-300 transition-all"
            href={linkTo}
            size="lg"
          >
            {isRU ? label : labelEn}
          </Link>
        </li>
      ))}
      <li key='switch'>
        <ThemeSwitcher />
        <Button onClick={() => setIsRu(!isRU)}>{isRU ? 'RU' : 'EN'}</Button>
      </li>
      <li>

      </li>
    </ul>
  )
}

export default Navigation
