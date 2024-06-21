import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiGrid, FiList } from "react-icons/fi";
import { Menu } from "@headlessui/react";
import { Slider, cn, Button, ButtonGroup } from "@nextui-org/react";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import useStore from "@/zustand/store/useStore";

function SearchUI({
  cityList,
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
  const [isBackdropBlur, setIsBackdropBlur] = useState(false);
  const [value, setValue] = useState([0, 500]);
  const { translations } = useStore();

  const router = useRouter();
  useEffect(() => {
    // Загрузка значений фильтров из URL при начальной загрузке
    const { query } = router;
    console.log("Query Parameters:", query);
    if (query.minPrice) {
      const parsedMinPrice = parseInt(query.minPrice, 10);
      console.log("Parsed Min Price:", parsedMinPrice);
      setMinPrice(parsedMinPrice);
    }
    if (query.maxPrice) {
      const parsedMaxPrice = parseInt(query.maxPrice, 10);
      console.log("Parsed Max Price:", parsedMaxPrice);
      setMaxPrice(parsedMaxPrice);
    }
    if (query.city) setCity(query.city);
    if (query.propertyType) setPropertyType(query.propertyType);
    if (query.sellOrRent) setSellOrRent(query.sellOrRent);
    if (query.itemsPerPage) setItemsPerPage(parseInt(query.itemsPerPage, 10));
    if (query.isGrid !== undefined) setIsGrid(query.isGrid === "true");
    console.log(router.query);
  }, [router.query]);

  const updateUrlParams = (params) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          ...params,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleCityChange = (city) => {
    const newCity = city === "All" || city === "Все" ? "" : city;
    setCity(newCity);

    updateUrlParams({ city: newCity });
  };

  const handlePropertyTypeChange = (propertyType) => {
    const newPropertyType =
      propertyType === "All" || propertyType === "Все" ? "" : propertyType;
    setPropertyType(newPropertyType);

    updateUrlParams({ propertyType: newPropertyType });
  };

  const handleSellOrRentChange = (sellOrRent) => {
    const newSellOrRent =
      sellOrRent === "All" || sellOrRent === "Все" ? "" : sellOrRent;
    setSellOrRent(newSellOrRent);
    setSliderMaxPrice(
      newSellOrRent === "Rent" || newSellOrRent === "Аренда" ? 2000 : 250000
    );
    setMinPrice(0);
    setMaxPrice(
      newSellOrRent === "Rent" || newSellOrRent === "Аренда" ? 2000 : 250000
    );
    setResetKey(resetKey + 1);
    updateUrlParams({
      sellOrRent: newSellOrRent,
      minPrice: 0,
      maxPrice:
        newSellOrRent === "Rent" || newSellOrRent === "Аренда" ? 2000 : 250000,
    });
  };

  const handlePriceChange = (newMinPrice, newMaxPrice) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);

    const params = { minPrice: newMinPrice, maxPrice: newMaxPrice };
    updateUrlParams(params);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    updateUrlParams({ itemsPerPage: newItemsPerPage });
  };

  const handleIsGridChange = (newIsGrid) => {
    setIsGrid(newIsGrid);
    updateUrlParams({ isGrid: newIsGrid });
  };

  const handleResetFilters = () => {
    setResetKey(resetKey + 1);
    setMinPrice(0);
    setMaxPrice(250000);
    setCity("");
    setPropertyType("");
    setSellOrRent("");
    setSliderMaxPrice(250000);
    updateUrlParams({
      minPrice: 0,
      maxPrice: 250000,
      city: "",
      propertyType: "",
      sellOrRent: "",
      itemsPerPage: 12,
      isGrid: true,
    });
    onSearch();
  };

  return (
    <div className="relative -mt-24 max-w-5xl mx-auto p-2 xl:p-0">
      <div
        className={`fixed ${
          isBackdropBlur ? "backdrop-blur-md" : ""
        } transition duration-300`}
      />{" "}
      {/* Блюр фон */}
      <div className="grid grid-cols-1 relative z-10">
        {" "}
        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-green-700">
          <div className="text-dark text-start">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 text-xl">
              <div className="lg:pr-2 relative z-50">
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
                            className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
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
                              {cityList.map((city) => (
                                <Menu.Item key={city._id}>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-4 py-2 text-sm cursor-pointer`}
                                      onClick={() =>
                                        handleCityChange(city.name)
                                      }
                                    >
                                      {city.name}
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
                  {translations.Search.property}
                </p>
                <Menu
                  as="div"
                  className="relative"
                  onOpenChange={setIsMenuOpen}
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium w-full [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-default/50 bg-default text-default-foreground data-[hover=true]:opacity-hover z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased text-lg mt-2">
                        {sellOrRent || translations.Search.sellOrRent}
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
                            className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
                          >
                            <div className="py-1">
                              {[
                                translations.Search.sellOrRent,
                                translations.Search.buy,
                                translations.Search.rent,
                              ].map((sellRent) => (
                                <Menu.Item key={sellRent}>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-4 py-2 text-sm cursor-pointer`}
                                      onClick={() => {
                                        handleSellOrRentChange(sellRent);
                                      }}
                                    >
                                      {sellRent}
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
              <div className="lg:pr-4">
                <p className="text-slate-900 dark:text-white">
                  {translations.Search.type}
                </p>
                <Menu
                  as="div"
                  className="relative"
                  onOpenChange={setIsMenuOpen}
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium w-full [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-default/50 bg-default text-default-foreground data-[hover=true]:opacity-hover z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased text-lg mt-2">
                        {propertyType || translations.Search.typeAll}
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
                              {[
                                translations.Search.typeAll,
                                translations.Search.typeApartment,
                                translations.Search.typeVilla,
                                translations.Search.typeHouse,
                                translations.Search.typeLand,
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
              <div className="lg:pr-2">
                <Slider
                  key={resetKey}
                  className="dark:text-white"
                  size="lg"
                  label={translations.Search.price}
                  maxValue={sliderMaxPrice}
                  step={100}
                  defaultValue={[minPrice, maxPrice]}
                  onChange={([newMinPrice, newMaxPrice]) => {
                    handlePriceChange(newMinPrice, newMaxPrice);
                  }}
                  formatOptions={{
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  }}
                  classNames={{
                    base: "max-w-md gap-2 ",
                    label: "text-xl",
                    filler:
                      "bg-gradient-to-r from-gray-300 to-green-300 dark:from-gray-600 dark:to-green-800",
                  }}
                  renderThumb={({ index, ...props }) => (
                    <div
                      {...props}
                      className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                    >
                      <span
                        className={cn(
                          "transition-transform bg-gradient-to-br shadow-small rounded-full w-8 h-8 block group-data-[dragging=true]:scale-80",
                          index === 0
                            ? "from-gray-200 to-gray-500 dark:from-gray-400 dark:to-gray-600"
                            : "from-green-200 to-green-600 dark:from-green-600 dark:to-green-800"
                        )}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-6 space-y-6 md:space-y-0 md:flex items-center">
          <Button
            className="bg-green-500 w-full lg:w-[24.5%] md:text-base text-lg mr-2"
            variant="shadow"
            onPress={onSearch}
          >
            {isRu ? "Подобрать" : "Search"}
          </Button>
          <Button
            className="border-green-500 w-full lg:w-[24.5%] md:text-base text-lg mr-2"
            variant="bordered"
            onPress={handleResetFilters}
          >
            {isRu ? "Сбросить фильтры" : "Reset filters"}
          </Button>
          <ButtonGroup
            className="hidden md:flex md:w-full lg:w-[24%] md:text-lg md:mr-2"
            onChange={handleItemsPerPageChange}
            defaultValue={itemsPerPage}
          >
            <Button
              onClick={() => handleIsGridChange(true)}
              className="text-lg w-full"
            >
              <FiGrid />
            </Button>
            <Button
              onClick={() => handleIsGridChange(false)}
              className="text-lg w-full"
            >
              <FiList />
            </Button>
          </ButtonGroup>
          <Menu as="div" className="relative" onOpenChange={setIsMenuOpen}>
            {({ open }) => (
              <>
                <Menu.Button className="relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium w-full [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-default/50 bg-default text-default-foreground data-[hover=true]:opacity-hover z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased md:text-base text-lg mt-2 md:mt-0">
                  {isRu ? "Объектов на странице: " : "Items per page: "}
                  <IoMdArrowDropdown
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  {itemsPerPage}
                </Menu.Button>
                <AnimatePresence>
                  {open && (
                    <Menu.Items
                      as={motion.div}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:text-white"
                    >
                      <div className="py-1">
                        <Menu.Item as={Fragment} key="12">
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "w-full bg-gray-100 text-gray-900"
                                  : "w-full text-gray-700"
                              } block px-4 py-2 text-sm cursor-pointer`}
                              onClick={() => setItemsPerPage(12)}
                            >
                              12
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item as={Fragment} key="24">
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "w-full bg-gray-100 text-gray-900"
                                  : "w-full text-gray-700"
                              } block px-4 py-2 text-sm cursor-pointer`}
                              onClick={() => setItemsPerPage(24)}
                            >
                              24
                            </button>
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
      </div>
    </div>
  );
}

export default SearchUI;
