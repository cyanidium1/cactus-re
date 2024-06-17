import useStore from "@/zustand/store/useStore";

import SocialLinks from "../../SocialLinks.jsx";

const ModalContentContactUs = () => {
  const { translations } = useStore();

  return (
    <div>
      <div className="w-full flex mb-2">
        <div className="w-1/3">
          <p className=" text-black dark:text-slate-400">
            {translations.Modal.phone}
          </p>
        </div>
        <div className="w-2-3">
          <a
            href="tel:+355685577016"
            className="text-lg text-black dark:text-slate-400"
          >
            +355 685 577 016
          </a>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/3">
          <p className="text-black dark:text-slate-400">
            {translations.Modal.messengers}
          </p>
        </div>
        <div className="w-2/3">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ModalContentContactUs;
