import { motion } from "framer-motion";

const RoomDescription = ({ descriptionEn, descriptionRu, isRu }) => {
  const variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <p className="text-slate-400 mb-[10px] mt-[40px] md:mt-[-320px] lg:mt-[-430px] xl:mt-[-480px] xl:text-lg xxl:text-xl">
        {isRu ? descriptionEn : descriptionRu}
      </p>
    </>
  );
};

export default RoomDescription;
