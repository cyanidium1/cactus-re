"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/radio";
//import { useParams } from "next/navigation";
//import axios from "axios";

import useStore from "@/zustand/store/useStore";

const ModalContentSubmitRequest = ({
  onSubmitSuccess,
  onSubmitFailure,
  onClose,
  context,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [errors, setErrors] = useState({});

  const { translations } = useStore();

  // const { id } = useParams();
  // console.log(id);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!phone || !/^\+\d+$/.test(phone))
      newErrors.phone = "Valid phone number is required (e.g., +123456789)";
    if (message.length < 10)
      newErrors.message = "Message must be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let formData = {
      name,
      phone,
      email,
      message,
    };

    if (context === "sideBar") {
      formData = {
        ...formData,
        selectedOption,
      };
    } else if (context === "objectPage") {
      formData = {
        ...formData,
        pageURL: `Клиент интересуется объектом ${window.location.href}`,
      };

      console.log("Sending data:", formData);

      // try {
      //   console.log("Sending data:", formData);
      //   const response = await axios.post(
      //     "http://localhost:3001/send-message",
      //     formData
      //   );
      //   console.log(response.data);
      //   onSubmitSuccess();
      // } catch (error) {
      //   console.error("Error sending message:", error);
      //   onSubmitFailure();
      // }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={translations.Form.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={translations.Form.namePlaceholder}
        helperText={errors.name}
        helperColor="error"
        fullWidth
        required
      />
      <Input
        label={translations.Form.phone}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={translations.Form.phonePlaceholder}
        helperText={errors.phone}
        helperColor="error"
        fullWidth
        required
      />
      {context === "sideBar" && (
        <div className="flex">
          <RadioGroup
            className="text-black dark:text-slate-400"
            label={translations.Modal.interestedIn}
          >
            <Radio value="buy">{translations.Modal.buy}</Radio>
            <Radio value="sell">{translations.Modal.sell}</Radio>
          </RadioGroup>
        </div>
      )}
      <Textarea
        label={translations.Form.message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={translations.Form.textareaPlaceholder}
        helperText={errors.message}
        helperColor="error"
        fullWidth
        required
      />
      <Button type="submit" className="mt-4" onPress={onClose} fullWidth>
        {translations.Modal.submit}
      </Button>
    </form>
  );
};

export default ModalContentSubmitRequest;
