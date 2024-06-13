import { Button } from "@nextui-org/react";

import useStore from "@/zustand/store/useStore";
import CommonModal from "@/components/CommonModal";
import ModalContentSubmitRequest from "@/components/ModalContentSubmitRequest";

const SubmitRequestButton = ({ onOpen, isOpen, onClose }) => {
  const { translations } = useStore();
  return (
    <div className="p-1 flex-1">
      <Button
        className="bg-customGreen hover:bg-green-700 text-white rounded-md w-full"
        onPress={onOpen}
      >
        {translations.PropertyPage.btnSubmitReq}
      </Button>
      <CommonModal
        isOpen={isOpen}
        onClose={onClose}
        title={translations.Modal.submitRequest}
      >
        <ModalContentSubmitRequest />
      </CommonModal>
    </div>
  );
};

export default SubmitRequestButton;
