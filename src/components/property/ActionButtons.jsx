import { Button, ButtonGroup } from "@nextui-org/button";

const ActionButtons = () => {
  return (
    <ButtonGroup className="flex">
      <div className="p-1 w-1/2">
        <Button className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full href=${}">
          Book now
        </Button>
      </div>
      <div className="p-1 w-1/2">
        <Button className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full href=${}">
          Offer now
        </Button>
      </div>
    </ButtonGroup>
  );
};

export default ActionButtons;
