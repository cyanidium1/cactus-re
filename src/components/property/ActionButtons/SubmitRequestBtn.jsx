import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";

import useStore from "@/zustand/store/useStore";

import SubmitRequestModal from "@/components/Modals/SubmitRequestModal/SubmitRequestModal";
import ModalContentSubmitRequest from "@/components/Modals/SubmitRequestModal/ModalContentSubmitRequest";

const SubmitRequestButton = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const { onOpen, isOpen, onClose, onOpenChange } = useDisclosure();
  const { translations } = useStore();

  const handleSubmitSuccess = () => {
    setResponseMessage(
      "Thank you for your inquiry, your data has been successfully sent."
    );
  };

  const handleSubmitFailure = () => {
    setResponseMessage("Sorry, something went wrong. Please try again.");
  };

  return (
    <div className="p-1 flex-1">
      <Button
        className="bg-customGreen hover:bg-green-700 text-white rounded-md w-full"
        onPress={onOpen}
      >
        {translations.PropertyPage.btnSubmitReq}
      </Button>
      <SubmitRequestModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        title={translations.Modal.submitRequest}
      >
        <ModalContentSubmitRequest
          onSubmitSuccess={handleSubmitSuccess}
          onSubmitFailure={handleSubmitFailure}
          onClose={onClose}
          context="objectPage"
        />
      </SubmitRequestModal>
    </div>
  );
};

export default SubmitRequestButton;
