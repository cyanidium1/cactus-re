import useStore from "@/zustand/store/useStore";

const ShortInfo = ({ isRu, city, rooms, areaCertificate, area }) => {
  const { translations } = useStore();

  if (!city || typeof city !== "object") {
    return <div>No city data available</div>;
  }
  const { name } = city;

  const itemsInfo = [
    {
      title: translations.PropertyPage.city,
      value: name,
    },
    {
      title: translations.PropertyPage.roomsNumber,
      value: rooms,
    },
    {
      title: translations.PropertyPage.areaSertified,
      value: areaCertificate,
    },
    {
      title: translations.PropertyPage.areaAct,
      value: area,
    },
  ];

  const elements = itemsInfo.map(({ title, value }, idx) => {
    return (
      <li
        key={idx}
        className="flex justify-between items-center md:mb-[5px] xl:mb-[15px]"
      >
        <span className="text-xl md:text-lg font-medium xl:text-2xl text-black dark:text-slate-400">
          {title}
        </span>
        <span className="text-xl md:text-lg font-medium xl:text-2xl dark:text-slate-400">
          {value}
        </span>
      </li>
    );
  });
  return <ul className="mt-[20px]">{elements}</ul>;
};

export default ShortInfo;
