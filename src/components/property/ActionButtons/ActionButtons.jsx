import { useState } from "react";
import { useDisclosure } from "@nextui-org/modal";

import { Button } from "@nextui-org/react";
import useStore from "@/zustand/store/useStore";

import ContactModal from "../../Modals/ContactModal/ContactModal.jsx";
import ModalContentContactUs from "../../Modals/ContactModal/ModalContentContactUs.jsx";
import SubmitRequestButton from "./SubmitRequestBtn.jsx";
import ContactUsBtn from "./ContactUsBtn.jsx";
import SubmitRequestModal from "@/components/Modals/SubmitRequestModal/SubmitRequestModal.jsx";
import ModalContentSubmitRequest from "@/components/Modals/SubmitRequestModal/ModalContentSubmitRequest.jsx";

const ActionButtons = () => {
  const { onOpen, isOpen, onClose, onOpenChange } = useDisclosure();

  const { translations } = useStore();

  return (
    <div className="flex items-center justify-center">
      <SubmitRequestButton onOpen={onOpen} />
      <ContactUsBtn onOpen={onOpen} />
      <SubmitRequestModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        title={translations.Modal.submitRequest}
      >
        <ModalContentSubmitRequest />
      </SubmitRequestModal>
      {/* <ContactModal
        isOpen={isOpen}
        onClose={onClose}
        title={translations.Modal.contactUs}
      >
        <ModalContentContactUs />
      </ContactModal> */}
    </div>
  );
};

export default ActionButtons;
