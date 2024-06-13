import useStore from "@/zustand/store/useStore";

import SocialLinks from "./SocialLinks";

const ModalContentContactUs = () => {
  const { translations } = useStore();

  return (
    <div>
      <div className="flex gap-3 mb-2">
        <p className=" text-black dark:text-slate-400">
          {translations.Modal.phone}
        </p>
        <p className=" text-black dark:text-slate-400">+355 685 577 016</p>
      </div>
      <div className="flex gap-3">
        <p className="text-black dark:text-slate-400">
          {translations.Modal.messengers}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ModalContentContactUs;
