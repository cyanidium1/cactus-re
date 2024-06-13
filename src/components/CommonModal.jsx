import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useStore from "@/zustand/store/useStore";
//import SocialLinks from "./SocialLinks";

const CommonModal = ({ isOpen, onClose, title, children }) => {
  const { translations } = useStore();
  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 dark:text-customGreen">
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {translations.Modal.close}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommonModal;
