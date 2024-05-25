import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Slider, cn } from '@nextui-org/react';
import React, { useMemo, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

function Search(props) {
    const [selectedCity, setSelectedCity] = useState(new Set(["Tirana"]));
    const [selectedProperty, setSelectedProperty] = useState(new Set(["Все"]));
    const [selectedType, setSelectedType] = useState(new Set(["Все"]));

    const selectedCityValue = useMemo(
        () => Array.from(selectedCity).join(", ").replaceAll("_", " "),
        [selectedCity]
    );

    const selectedPropertyValue = useMemo(
        () => Array.from(selectedProperty).join(", ").replaceAll("_", " "),
        [selectedProperty]
    );

    const selectedTypeValue = useMemo(
        () => Array.from(selectedType).join(", ").replaceAll("_", " "),
        [selectedType]
    );


    return (
        <div className="relative -mt-24 max-w-5xl mx-auto p-2">
            <div className="grid grid-cols-1">
                <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-green-700">
                    <div className="text-dark text-start">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                            <div>
                                <p className="text-slate-900 dark:text-white ">Город:</p>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button className='w-28 mt-2' endContent={<IoMdArrowDropdown />}>
                                            {selectedCityValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        className='dark:text-white'
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedCity}
                                        onSelectionChange={setSelectedCity}
                                    >
                                        <DropdownItem key="All">All</DropdownItem>
                                        <DropdownItem key="Tirana">Tirana</DropdownItem>
                                        <DropdownItem key="Durres">Durres</DropdownItem>
                                        <DropdownItem key="Vlore">Vlore</DropdownItem>
                                        <DropdownItem key="Saranda">Saranda</DropdownItem>
                                        <DropdownItem key="Shengjin">Shengjin</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div>
                                <p className="text-slate-900 dark:text-white ">Недвижимость:</p>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button className='w-28 mt-2' endContent={<IoMdArrowDropdown />}>
                                            {selectedPropertyValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        className='dark:text-white'
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedProperty}
                                        onSelectionChange={setSelectedProperty}
                                    >
                                        <DropdownItem key="Все">Все</DropdownItem>
                                        <DropdownItem key="Купить">Купить</DropdownItem>
                                        <DropdownItem key="Продать">Продать</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div>
                                <p className="text-slate-900 dark:text-white ">Тип:</p>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button className='w-28 mt-2' endContent={<IoMdArrowDropdown />}>
                                            {selectedTypeValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        className='dark:text-white'
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedType}
                                        onSelectionChange={setSelectedType}
                                    >
                                        <DropdownItem key="Все">Все</DropdownItem>
                                        <DropdownItem key="Дом">Дом</DropdownItem>
                                        <DropdownItem key="Квартира">Квартира</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div>
                                <Slider
                                    className='dark:text-white'
                                    size="lg"
                                    label="Цена:"
                                    maxValue={250000}
                                    step={100}
                                    defaultValue={[100, 80000]}
                                    formatOptions={{
                                        style: "currency",
                                        currency: "EUR",
                                        maximumFractionDigits: 0
                                    }}
                                    classNames={{
                                        base: "max-w-md gap-3",
                                        filler: "bg-gradient-to-r from-gray-300 to-green-300 dark:from-gray-600 dark:to-green-800",
                                    }}
                                    renderThumb={({ index, ...props }) => (
                                        <div
                                            {...props}
                                            className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                                        >
                                            <span
                                                className={cn(
                                                    "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                                                    index === 0
                                                        ? "from-gray-200 to-gray-500 dark:from-gray-400 dark:to-gray-600"
                                                        : "from-green-200 to-green-600 dark:from-green-600 dark:to-green-800",
                                                )}
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="lg:mt-6">
                            <Button className='bg-green-500 w-56 ' variant="shadow">
                                Подобрать
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
