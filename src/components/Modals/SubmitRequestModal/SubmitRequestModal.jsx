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

const SubmitRequestModal = ({
  isOpen,
  onClose,
  onOpenChange,
  title,
  children,
}) => {
  const { translations } = useStore();
  const [responseMessage, setResponseMessage] = useState("");

  const handleSuccess = () => {
    setResponseMessage(
      "Thank you for your inquiry, your data has been successfully sent."
    );
  };

  const handleFailure = () => {
    setResponseMessage("Sorry, something went wrong. Please try again.");
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        //onClose={onClose}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 dark:text-customGreen">
              {title}
            </ModalHeader>
            <ModalBody>
              {children}
              {/* {responseMessage ? (
                <p>{responseMessage}</p>
              ) : (
                React.cloneElement(
                  children({
                    onSubmitSuccess: handleSuccess,
                    onSubmitFailure: handleFailure,
                  })
                )
              )} */}
            </ModalBody>
            {/* <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {translations.Modal.close}
              </Button>
              <Button
                className="bg-customGreen shadow-sm shadow-customGreen dark:text-white"
                onPress={onClose}
              >
                {translations.Modal.submit}
              </Button>
            </ModalFooter> */}
          </>
        </ModalContent >
      </Modal>
    </>
  );
};

export default SubmitRequestModal;
