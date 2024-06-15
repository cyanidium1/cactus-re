import { useState } from "react";
import { Radio, RadioGroup } from "@nextui-org/react";
import useStore from "@/zustand/store/useStore";

const ChooseOption = ({ onOpenChange }) => {
  // define the passed onChange handler
  const [selected, setSelected] = useState("");
  const { translations } = useStore();

  const isButtonSelected = (value) => {
    if (selected === value) {
      return true;
    }
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e); // this fires the onChange handler (handleRadio) you passed in SearchItem
  };
  return (
    <RadioGroup
      className="text-black dark:text-slate-400 mb-5"
      orientation="horizontal"
      label={translations.Modal.interestedIn}
      value={selected}
      //onChange={(value) => setSelectedOption(value)}
    >
      <Radio
        value="buy"
        checked={isButtonSelected("buy")}
        onChange={handleChange}
      >
        {translations.Modal.buy}
      </Radio>
      <Radio
        value="rent"
        checked={isButtonSelected("rent")}
        onChange={handleChange}
      >
        {translations.Modal.rent}
      </Radio>
    </RadioGroup>
  );
};

export default ChooseOption;
