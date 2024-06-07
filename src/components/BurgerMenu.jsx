import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Close from "@/icons/Close";
import Navigation from "./Navigation";
import Socials from "./Socials";

function BurgerMenu({ isBurgerOpen, onClose, isRU, setIsRu }) {
  return (
    <Transition.Root show={isBurgerOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 " onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden ">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative bg-white w-[300px] dark:bg-black">
                  <div className="px-[20px] py-[20px] mx-auto flex flex-col justify-between h-full md:px-[40px] md:pb-[40px] md:max-w-full">
                    <div>
                      <div className="py-[8px] flex justify-between items-center  md:py-[22px]">
                        <button
                          type="button"
                          onClick={onClose}
                          aria-label="Закрытие модального окна"
                          className="ml-auto"
                        >
                          <Close className="w-[24px] h-[24px] stroke-customGreen stroke-2 hover:stroke-green-400 transition-[stroke] duration-300" />
                        </button>
                      </div>

                      <Navigation isRU={isRU} setIsRu={setIsRu} />
                    </div>
                    <div className="flex flex-col gap-5">
                      <Socials className="lg:hidden" />

                      <p className="text-black uppercase text-[15px] dark:text-slate-400">
                        {isRU
                          ? "КЛЮЧИ ОТ КВАРТИРЫ ВАШЕЙ МЕЧТЫ"
                          : "KEYS TO YOUR DREAM APARTMENT"}
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default BurgerMenu;
