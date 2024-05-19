import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { CiMobile1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { sendMessage } from "@/app/sendMsg";
import SuccessModal from "./SuccessModal";

export default function ModalWw({ text = 'Связаться', subject = null, details = null, price = null }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSendMessage = () => {
        let message;
        if (subject) {
            message = `<b>Услуга</b>\nИмя: ${name}, Телефон: ${phone}, Почта: ${email}. \n<b>Интересует</b> - ${subject}, ${details} ($${price})`;
        } else {
            message = `<b>Связь</b>\nИмя: ${name}, Телефон: ${phone}, Почта: ${email}.`;
        }
        sendMessage(message);
        onClose();
        setIsModalOpen(true);
    };

    return (
        <>
            <Button onClick={onOpen} color="secondary" variant="flat" className="text-xl rounded-full p-6 hover:bg-violet-400 duration-300 hover:text-white">{text}</Button>
            <Modal isOpen={isOpen} onClose={onClose} placement="center">
                <ModalContent>
                    <ModalHeader>Форма связи</ModalHeader>
                    <ModalBody>
                        {subject && (
                            <p className="text-xl">
                                Услуга: <span className="py-1 px-2 rounded-lg bg-violet-600 bg-opacity-25">{subject}</span>
                                {price && <span className="ml-1 py-1 px-2 rounded-lg bg-cyan-600 bg-opacity-25">$ {price}</span>}
                            </p>
                        )}
                        <Input
                            autoFocus
                            endContent={<CiUser size={34} />}
                            label="Имя"
                            variant="bordered"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            endContent={<CiMobile1 size={34} />}
                            label="Телефон"
                            variant="bordered"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            endContent={<CiMail size={34} />}
                            label="Почта"
                            variant="bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onClick={onClose}>
                            Закрыть
                        </Button>
                        <Button color="primary" onClick={handleSendMessage}>
                            Отправить
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}