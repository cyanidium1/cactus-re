import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

import useStore from "@/zustand/store/useStore";

const ChooseOption = ({ type, setType }) => {
  const { translations } = useStore();

  // const handleTypeChange = (type) => {
  //   const newType = type;
  //   setType(newType);
  //   //updateUrlParams({ type: newType });
  //   // const selectedType = Array.from(keys).join(", ");
  //   // setType(selectedType);
  // };

  const handleTypeChange = (keys) => {
    const selectedType = Array.from(keys).join(", ");
    setType(selectedType.toLowerCase()); // Convert to lowercase for consistency
  };
  return (
    <div className="mb-3">
      <Dropdown>
        <DropdownTrigger>
          <Button
            fullWidth
            className="text-lg mt-2"
            variant="shadow"
            endContent={<IoMdArrowDropdown />}
          >
            {type ? translations.Modal[type] : translations.Modal.interestedIn}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className="text-black dark:text-white"
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([type])}
          onSelectionChange={handleTypeChange}
        >
          <DropdownItem key="Buy">{translations.Modal.buy}</DropdownItem>
          <DropdownItem key="Rent">{translations.Modal.rent}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ChooseOption;
