import SubmitRequestButton from "./SubmitRequestBtn.jsx";
import ContactUsBtn from "./ContactUsBtn.jsx";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center">
      <SubmitRequestButton />
      <ContactUsBtn />
    </div>
  );
};

export default ActionButtons;
