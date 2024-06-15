"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { useParams } from "next/navigation";
//import axios from "axios";

import useStore from "@/zustand/store/useStore";

const ModalContentSubmitRequest = ({
  onSubmitSuccess,
  onSubmitFailure,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const { translations } = useStore();

  const { id } = useParams();
  console.log(id);

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

    const formData = {
      name,
      phone,
      message,
      objectName: "Your Object Name", // Replace with actual object name if needed
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        helperText={errors.name}
        helperColor="error"
        fullWidth
        required
      />
      <Input
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
        helperText={errors.phone}
        helperColor="error"
        fullWidth
        required
      />
      <div className="flex">
        <RadioGroup
          className="text-black dark:text-slate-400"
          label={translations.Modal.interestedIn}
        >
          <Radio value="buy">{translations.Modal.buy}</Radio>
          <Radio value="sell">{translations.Modal.sell}</Radio>
        </RadioGroup>
      </div>
      <Textarea
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        helperText={errors.message}
        helperColor="error"
        fullWidth
        required
      />
      <Button type="submit" className="mt-4" onPress={onClose} fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default ModalContentSubmitRequest;
