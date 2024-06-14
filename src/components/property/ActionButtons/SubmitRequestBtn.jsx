import { Button } from "@nextui-org/react";

import useStore from "@/zustand/store/useStore";

const SubmitRequestButton = ({ onOpen }) => {
  const { translations } = useStore();
  return (
    <div className="p-1 flex-1">
      <Button
        className="bg-customGreen hover:bg-green-700 text-white rounded-md w-full"
        onPress={onOpen}
      >
        {translations.PropertyPage.btnSubmitReq}
      </Button>
    </div>
  );
};

export default SubmitRequestButton;
