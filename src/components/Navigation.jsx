import { Link, useDisclosure } from "@nextui-org/react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import useStore from "@/zustand/store/useStore";
import SubmitRequestModal from "./Modals/SubmitRequestModal/SubmitRequestModal";
import ModalContentSubmitRequest from "./Modals/SubmitRequestModal/ModalContentSubmitRequest";

function Navigation() {
  const { translations, setLanguage } = useStore();
  const { onOpen, isOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <ul className="flex flex-col gap-[15px]">
      <a
        href="tel:+355685577016"
        className="dark:text-green-600 dark:fill-green-600 w hover:text-green-600 transition duration-300 text-xl flex mb-1 items-center hover:fill-green-600"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5  me-3"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg> <span>+355 68 557 7016</span>
      </a>
      <li>
        <Link
          className="w-full text-customGreen text-lg font-normal hover:text-green-400 duration-300 transition-all"
          href="/"
          size="lg"
        >
          {translations.BurgerMenu.catalogue}
        </Link>
      </li>
      <li>
        <button
          type="button"
          className=" text-customGreen text-lg font-normal hover:text-green-400 duration-300 transition-all"
          onClick={onOpen}
        >
          {translations.BurgerMenu.postAnAd}
        </button>
        <SubmitRequestModal
          isOpen={isOpen}
          onClose={onClose}
          onOpenChange={onOpenChange}
          title={translations.Modal.submitRequest}
        >
          <ModalContentSubmitRequest
            // onSubmitSuccess={handleSubmitSuccess}
            // onSubmitFailure={handleSubmitFailure}
            onClose={onClose}
            context="sideBar"
          />
        </SubmitRequestModal>
      </li>
      <li>
        <LanguageSwitcher setLanguage={setLanguage} />
      </li>
      <li key="switch">
        <ThemeSwitcher />
      </li>
    </ul>
  );
}

export default Navigation;
