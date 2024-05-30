import React, { useState } from "react";
import { Menu, Switch, Listbox, Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiGrid, FiList } from "react-icons/fi";

function SearchUi({
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
  isRU,
}) {
  const [resetKey, setResetKey] = useState(0);
  const [sliderMaxPrice, setSliderMaxPrice] = useState(250000);

  const handleCityChange = (selectedCity) => {
    setCity(
      selectedCity === "All" || selectedCity === "Все" ? "" : selectedCity
    );
  };

  const handlePropertyTypeChange = (selectedPropertyType) => {
    setPropertyType(
      selectedPropertyType === "All" || selectedPropertyType === "Все"
        ? ""
        : selectedPropertyType
    );
  };

  const handleSellOrRentChange = (selectedSellOrRent) => {
    setSellOrRent(
      selectedSellOrRent === "All" || selectedSellOrRent === "Все"
        ? ""
        : selectedSellOrRent
    );

    if (selectedSellOrRent === "Rent" || selectedSellOrRent === "Аренда") {
      setSliderMaxPrice(2000);
      setResetKey(resetKey + 1);
    } else {
      setSliderMaxPrice(250000);
      setResetKey(resetKey + 1);
    }
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
      <div className="grid grid-cols-1">
        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-green-700">
          <div className="text-dark text-start">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 text-xl">
              <div className="lg:pr-2">
                <p className="text-slate-900 dark:text-white">
                  {isRU ? "Город:" : "City:"}
                </p>
                <Listbox value={city} onChange={handleCityChange}>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
                      <span className="block truncate">
                        {city || (isRU ? "Все" : "All")}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <IoMdArrowDropdown />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <Listbox.Option key="All" value={isRU ? "Все" : "All"}>
                          {isRU ? "Все" : "All"}
                        </Listbox.Option>
                        <Listbox.Option key="Tirana" value="Tirana">
                          Tirana
                        </Listbox.Option>
                        <Listbox.Option key="Durres" value="Durres">
                          Durres
                        </Listbox.Option>
                        <Listbox.Option key="Vlore" value="Vlore">
                          Vlore
                        </Listbox.Option>
                        <Listbox.Option key="Saranda" value="Saranda">
                          Saranda
                        </Listbox.Option>
                        <Listbox.Option key="Shengjin" value="Shengjin">
                          Shengjin
                        </Listbox.Option>
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="lg:pr-2">
                <p className="text-slate-900 dark:text-white">
                  {isRU ? "Недвижимость:" : "Property:"}
                </p>
                <Listbox value={sellOrRent} onChange={handleSellOrRentChange}>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
                      <span className="block truncate">
                        {sellOrRent || (isRU ? "Вся" : "All")}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <IoMdArrowDropdown />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <Listbox.Option key="All" value={isRU ? "Все" : "All"}>
                          {isRU ? "Все" : "All"}
                        </Listbox.Option>
                        <Listbox.Option
                          key="Buy"
                          value={isRU ? "Покупка" : "Buy"}
                        >
                          {isRU ? "Покупка" : "Buy"}
                        </Listbox.Option>
                        <Listbox.Option
                          key="Rent"
                          value={isRU ? "Аренда" : "Rent"}
                        >
                          {isRU ? "Аренда" : "Rent"}
                        </Listbox.Option>
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="lg:pr-4">
                <p className="text-slate-900 dark:text-white">
                  {isRU ? "Тип:" : "Type:"}
                </p>
                <Listbox
                  value={propertyType}
                  onChange={handlePropertyTypeChange}
                >
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
                      <span className="block truncate">
                        {propertyType || (isRU ? "Все" : "All")}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <IoMdArrowDropdown />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <Listbox.Option key="All" value={isRU ? "Все" : "All"}>
                          {isRU ? "Все" : "All"}
                        </Listbox.Option>
                        <Listbox.Option
                          key="House"
                          value={isRU ? "Дом" : "House"}
                        >
                          {isRU ? "Дом" : "House"}
                        </Listbox.Option>
                        <Listbox.Option
                          key="Apartment"
                          value={isRU ? "Квартира" : "Apartment"}
                        >
                          {isRU ? "Квартира" : "Apartment"}
                        </Listbox.Option>
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white">
                  {isRU ? "Цена:" : "Price:"}
                </p>
                <input
                  type="range"
                  key={resetKey}
                  className="mt-2"
                  min={0}
                  max={sliderMaxPrice}
                  step={100}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  type="range"
                  key={resetKey}
                  className="mt-2"
                  min={0}
                  max={sliderMaxPrice}
                  step={100}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="mt-6 space-y-6 sm:space-y-0 sm:flex items-center">
              <button
                type="button"
                className="bg-green-500 w-full lg:w-[24.5%] text-lg mr-2 rounded-lg shadow-md py-2"
                onClick={onSearch}
              >
                {isRU ? "Подобрать" : "Search"}
              </button>
              <button
                type="button"
                className="border border-green-500 w-full lg:w-[24.5%] text-lg mr-2 rounded-lg shadow-md py-2"
                onClick={handleResetFilters}
              >
                {isRU ? "Сбросить фильтры" : "Reset filters"}
              </button>
              <div className="flex items-center w-full lg:w-[24%] text-lg mr-2 space-x-2">
                <button
                  type="button"
                  onClick={() => setIsGrid(true)}
                  className={`w-1/2 py-2 rounded-lg shadow-md ${
                    isGrid
                      ? "bg-green-500 text-white"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <FiGrid />
                </button>
                <button
                  type="button"
                  onClick={() => setIsGrid(false)}
                  className={`w-1/2 py-2 rounded-lg shadow-md ${
                    !isGrid
                      ? "bg-green-500 text-white"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <FiList />
                </button>
              </div>
              <Listbox value={itemsPerPage} onChange={setItemsPerPage}>
                <div className="relative w-full lg:w-[26%]">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
                    <span className="block truncate">
                      {isRU ? "Объектов на странице: " : "Items per page: "}
                      {itemsPerPage}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <IoMdArrowDropdown />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      <Listbox.Option key="12" value={12}>
                        12
                      </Listbox.Option>
                      <Listbox.Option key="24" value={24}>
                        24
                      </Listbox.Option>
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchUi;
