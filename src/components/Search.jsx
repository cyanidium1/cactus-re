import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Slider,
  cn,
} from "@nextui-org/react";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { FiGrid } from "react-icons/fi";
import { FiList } from "react-icons/fi";

function Search({
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

  const handleCityChange = (keys) => {
    const selectedCity = Array.from(keys).join(", ");
    setCity(
      selectedCity === "All" || selectedCity === "Все" ? "" : selectedCity
    );
  };

  const handlePropertyTypeChange = (keys) => {
    const selectedPropertyType = Array.from(keys).join(", ");
    setPropertyType(
      selectedPropertyType === "All" || selectedPropertyType === "Все"
        ? ""
        : selectedPropertyType
    );
  };

  const handleSellOrRentChange = (keys) => {
    const selectedSellOrRent = Array.from(keys).join(", ");
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
    // onSearch();
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
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button
                      fullWidth
                      className="text-lg mt-2"
                      variant="shadow"
                      endContent={<IoMdArrowDropdown />}
                    >
                      {city || isRU ? "Все" : "All"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="dark:text-white"
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={new Set([city])}
                    onSelectionChange={handleCityChange}
                  >
                    <DropdownItem key={isRU ? "Все" : "All"}>
                      {isRU ? "Все" : "All"}
                    </DropdownItem>
                    <DropdownItem key="Tirana">Tirana</DropdownItem>
                    <DropdownItem key="Durres">Durres</DropdownItem>
                    <DropdownItem key="Vlore">Vlore</DropdownItem>
                    <DropdownItem key="Saranda">Saranda</DropdownItem>
                    <DropdownItem key="Shengjin">Shengjin</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="lg:pr-2">
                <p className="text-slate-900 dark:text-white">
                  {isRU ? "Недвижимость:" : "Property:"}
                </p>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button
                      fullWidth
                      className="text-lg mt-2"
                      variant="shadow"
                      endContent={<IoMdArrowDropdown />}
                    >
                      {sellOrRent || isRU ? "Вся" : "All"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="dark:text-white"
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={new Set([sellOrRent])}
                    onSelectionChange={handleSellOrRentChange}
                  >
                    <DropdownItem key={isRU ? "Все" : "All"}>
                      {isRU ? "Все" : "All"}
                    </DropdownItem>
                    <DropdownItem key={isRU ? "Покупка" : "Buy"}>
                      {isRU ? "Покупка" : "Buy"}
                    </DropdownItem>
                    <DropdownItem key={isRU ? "Аренда" : "Rent"}>
                      {isRU ? "Аренда" : "Rent"}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="lg:pr-4">
                <p className="text-slate-900 dark:text-white">
                  {isRU ? "Тип:" : "Type:"}
                </p>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button
                      fullWidth
                      className="text-lg mt-2"
                      variant="shadow"
                      endContent={<IoMdArrowDropdown />}
                    >
                      {propertyType || isRU ? "Все" : "All"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="dark:text-white"
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={new Set([propertyType])}
                    onSelectionChange={handlePropertyTypeChange}
                  >
                    <DropdownItem key={isRU ? "Все" : "All"}>
                      {isRU ? "Все" : "All"}
                    </DropdownItem>
                    <DropdownItem key={isRU ? "Дом" : "House"}>
                      {isRU ? "Дом" : "House"}
                    </DropdownItem>
                    <DropdownItem key={isRU ? "Квартира" : "Apartment"}>
                      {isRU ? "Квартира" : "Apartment"}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div>
                <Slider
                  key={resetKey}
                  className="dark:text-white"
                  size="lg"
                  label={isRU ? "Цена:" : "Price:"}
                  maxValue={sliderMaxPrice}
                  step={100}
                  defaultValue={[minPrice, maxPrice]}
                  onChange={([newMinPrice, newMaxPrice]) => {
                    setMinPrice(newMinPrice);
                    setMaxPrice(newMaxPrice);
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
            <div className="mt-6 space-y-6 sm:space-y-0 sm:flex items-center">
              <Button
                className="bg-green-500 w-full lg:w-[24.5%] text-lg mr-2"
                variant="shadow"
                onPress={onSearch}
              >
                {isRU ? "Подобрать" : "Search"}
              </Button>
              <Button
                className="border-green-500 w-full lg:w-[24.5%] text-lg mr-2"
                variant="bordered"
                onPress={handleResetFilters}
              >
                {isRU ? "Сбросить фильтры" : "Reset filters"}
              </Button>
              <ButtonGroup className="w-full lg:w-[24%] text-lg mr-2">
                <Button
                  onClick={() => setIsGrid(true)}
                  className="text-lg w-full"
                >
                  <FiGrid />
                </Button>
                <Button
                  onClick={() => setIsGrid(false)}
                  className="text-lg w-full"
                >
                  <FiList />
                </Button>
              </ButtonGroup>
              <Dropdown className="" backdrop="blur">
                <DropdownTrigger>
                  <Button
                    fullWidth
                    className="text-lg w-full lg:w-[26%]"
                    variant="shadow"
                    endContent={<IoMdArrowDropdown />}
                  >
                    {isRU ? "Объектов на странице: " : "Items per page: "}
                    {itemsPerPage}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  className="dark:text-white"
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  // selectedKeys={new Set([propertyType])}
                  // onSelectionChange={handlePropertyTypeChange}
                >
                  <DropdownItem onClick={() => setItemsPerPage(12)} key="12">
                    12
                  </DropdownItem>
                  <DropdownItem onClick={() => setItemsPerPage(24)} key="24">
                    24
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
