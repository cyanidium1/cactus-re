import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useStore from "@/zustand/store/useStore";
import { useState } from "react";

const SubmitRequestModal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 dark:text-customGreen">
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubmitRequestModal;
