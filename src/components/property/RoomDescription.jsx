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
      <p className="text-slate-400 my-[10px] xl:text-lg xxl:text-xl">
        {isRu ? descriptionRu : descriptionEn}
      </p>
    </>
  );
};

export default RoomDescription;
