import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiGrid, FiList } from "react-icons/fi";
import { Menu } from "@headlessui/react";
import { Button } from "@nextui-org/react";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "@/zustand/store/useStore";

function SearchUI({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  city,
  setCity,
  propertyType,
  setPropertyType,
  sellOrRent,
  setSellOrRent,
  onSearch,
  isGrid,
  setIsGrid,
  itemsPerPage,
  setItemsPerPage,
  isRu,
}) {
  const [resetKey, setResetKey] = useState(0);
  const [sliderMaxPrice, setSliderMaxPrice] = useState(250000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useStore();

  const handleCityChange = (city) => {
    setCity(city === "All" || city === "Все" ? "" : city);
  };

  const handlePropertyTypeChange = (propertyType) => {
    setPropertyType(
      propertyType === "All" || propertyType === "Все" ? "" : propertyType
    );
  };

  const handleSellOrRentChange = (sellOrRent) => {
    setSellOrRent(
      sellOrRent === "All" || sellOrRent === "Все" ? "" : sellOrRent
    );
    setSliderMaxPrice(
      sellOrRent === "Rent" || sellOrRent === "Аренда" ? 2000 : 250000
    );
    setResetKey(resetKey + 1);
  };

  const handleResetFilters = () => {
    setResetKey(resetKey + 1);
    setMinPrice(0);
    setMaxPrice(250000);
    setCity("");
    setPropertyType("");
    setSellOrRent("");
    setSliderMaxPrice(250000);
  };

  return (
    <div className="relative -mt-24 max-w-5xl mx-auto p-2 xl:p-0">
      <div
        className={`fixed inset-0 ${
          isMenuOpen ? "backdrop-blur-md" : ""
        } transition duration-300`}
      />{" "}
      {/* Блюр фон */}
      <div className="grid grid-cols-1 relative z-10">
        {" "}
        {/* Добавил z-индекс */}
        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-green-700">
          <div className="text-dark text-start">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 text-xl">
              <div className="lg:pr-2">
                <p className="text-slate-900 dark:text-white">
                  {isRu ? "Город:" : "City:"}
                </p>
                <Menu
                  as="div"
                  className="relative"
                  onOpenChange={setIsMenuOpen}
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium w-full [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-default/50 bg-default text-default-foreground data-[hover=true]:opacity-hover z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased text-lg mt-2">
                        {city || (isRu ? "Все" : "All")}
                        <IoMdArrowDropdown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <AnimatePresence>
                        {open && (
                          <Menu.Items
                            as={motion.div}
                            static
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                          >
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } block px-4 py-2 text-sm cursor-pointer`}
                                    onClick={() => handleCityChange("All")}
                                  >
                                    {isRu ? "Все" : "All"}
                                  </a>
                                )}
                              </Menu.Item>
                              {[
                                "Tirana",
                                "Durres",
                                "Vlore",
                                "Saranda",
                                "Shengjin",
                              ].map((city) => (
                                <Menu.Item key={city}>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-4 py-2 text-sm cursor-pointer`}
                                      onClick={() => handleCityChange(city)}
                                    >
                                      {city}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Menu>
              </div>
              <div className="lg:pr-2">
                <p className="text-slate-900 dark:text-white">
                  {isRu ? "Недвижимость:" : "Property:"}
                </p>
                <Menu
                  as="div"
                  className="relative"
                  onOpenChange={setIsMenuOpen}
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium w-full [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-default/50 bg-default text-default-foreground data-[hover=true]:opacity-hover z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased text-lg mt-2">
                        {sellOrRent || (isRu ? "Все" : "All")}
                        <IoMdArrowDropdown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <AnimatePresence>
                        {open && (
                          <Menu.Items
                            as={motion.div}
                            static
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                          >
                            <div className="py-1">
                              <Menu.Item key={isRu ? "Все" : "All"}>
                                {({ active }) => (
                                  <a
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } block px-4 py-2 text-sm cursor-pointer`}
                                    onClick={() =>
                                      handleSellOrRentChange(
                                        isRu ? "Все" : "All"
                                      )
                                    }
                                  >
                                    {isRu ? "Все" : "All"}
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item key={isRu ? "Покупка" : "Buy"}>
                                {({ active }) => (
                                  <a
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } block px-4 py-2 text-sm cursor-pointer`}
                                    onClick={() =>
                                      handleSellOrRentChange(
                                        isRu ? "Покупка" : "Buy"
                                      )
                                    }
                                  >
                                    {isRu ? "Покупка" : "Buy"}
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item key={isRu ? "Аренда" : "Rent"}>
                                {({ active }) => (
                                  <a
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } block px-4 py-2 text-sm cursor-pointer`}
                                    onClick={() =>
                                      handleSellOrRentChange(
                                        isRu ? "Аренда" : "Rent"
                                      )
                                    }
                                  >
                                    {isRu ? "Аренда" : "Rent"}
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Menu>
              </div>
              <div className="lg:pr-4">
                <p className="text-slate-900 dark:text-white">
                  {isRu ? "Тип:" : "Type:"}
                </p>
                <Menu
                  as="div"
                  className="relative"
                  onOpenChange={setIsMenuOpen}
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium w-full [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-default/50 bg-default text-default-foreground data-[hover=true]:opacity-hover z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased text-lg mt-2">
                        {city || (isRu ? "Все" : "All")}
                        <IoMdArrowDropdown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <AnimatePresence>
                        {open && (
                          <Menu.Items
                            as={motion.div}
                            static
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                          >
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } block px-4 py-2 text-sm cursor-pointer`}
                                    onClick={() =>
                                      handlePropertyTypeChange("All")
                                    }
                                  >
                                    {isRu ? "Все" : "All"}
                                  </a>
                                )}
                              </Menu.Item>
                              {[
                                translations.Search.typeVilla,
                                translations.Search.typeRooms,
                                "1 + 1",
                                "2 + 1",
                                "3 + 1",
                                "4 + 1",
                              ].map((type) => (
                                <Menu.Item key={type}>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-4 py-2 text-sm cursor-pointer`}
                                      onClick={() =>
                                        handlePropertyTypeChange(type)
                                      }
                                    >
                                      {type}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Menu>
              </div>
              {/* Другие дропдауны */}
            </div>
            <div className="mt-6 space-y-6 sm:space-y-0 sm:flex items-center">
              <Button
                className="bg-green-500 w-full lg:w-[24.5%] text-lg mr-2"
                variant="shadow"
                onPress={onSearch}
              >
                {isRu ? "Подобрать" : "Search"}
              </Button>
              <Button
                className="border-green-500 w-full lg:w-[24.5%] text-lg mr-2"
                variant="bordered"
                onPress={handleResetFilters}
              >
                {isRu ? "Сбросить фильтры" : "Reset filters"}
              </Button>
              {/* Кнопки переключения представления и дропдаун количества элементов на странице */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchUI;
