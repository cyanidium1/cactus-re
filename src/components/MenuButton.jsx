import React from 'react'

function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Навигационное меню"
      aria-expanded="false"
      className="w-7 h-5 cursor-pointer bg-transparent group mobile-btn select-none"
    >
      <span className="bg-customGreen h-[3px] w-full block mb-1"></span>
      <span className="bg-customGreen h-[3px] w-full block mb-1"></span>
      <span className="bg-customGreen h-[3px] w-8/12 block transform  transition-all ease-in-out duration-500 group-hover:w-full"></span>
    </button>
  )
}

export default MenuButton
