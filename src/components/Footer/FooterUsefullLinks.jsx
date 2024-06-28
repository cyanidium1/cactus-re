import Link from "next/link";
import ModalContentContactUs from "../Modals/ContactModal/ModalContentContactUs";
import ContactModal from "../Modals/ContactModal/ContactModal";
import { useDisclosure } from "@nextui-org/react";
import useStore from "@/zustand/store/useStore";
import { useState } from "react";

const FooterUseFullLinks = ({ isRu }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const isButtonupVisible = useStore((state) => state.toggleSidebar);

  return (
    <div className="mt-[30px] md:mt-0">
      <h5 className="tracking-[1px] text-slate-400 font-semibold">
        {isRu ? "Полезные ссылки" : "Usefull links"}
      </h5>
      <ul className="list-none footer-list mt-6">
        <li className="mt-[10px]">
          <Link
            className="text-slate-400  hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href="/privacy"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Политика конфиденциальности" : "Privacy policy"}
          </Link>
        </li>
        <li className="mt-[10px]">
          <Link
            className="text-slate-400  hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href="/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Листинг" : "Listing"}
          </Link>
        </li>
        <li className="mt-[10px]">
          <button
            onClick={() => {
              onOpen();
              isButtonupVisible(true);
            }}
            className="text-slate-400  hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            // href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Контакты" : "Contact"}
          </button>
        </li>
      </ul>
      <ContactModal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          isButtonupVisible(false);
        }}
      >
        <ModalContentContactUs />
      </ContactModal>
    </div>
  );
};

export default FooterUseFullLinks;
