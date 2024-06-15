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
      <li>
        <Link
          className="w-full text-customGreen text-lg font-normal hover:text-green-400 duration-300 transition-all"
          href="https://cactus-realestate.ru/#preimushchestva"
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
