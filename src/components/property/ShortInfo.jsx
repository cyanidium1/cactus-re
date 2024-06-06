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
      <li key={idx} class="flex justify-between items-center md:mb-[8px]">
        <span class=" text-base md:text-xl text-customGreen">{title}</span>
        <span class="text-base md:text-xl text-customGreen">{value}</span>
      </li>
    );
  });
  return <ul class="">{elements}</ul>;
};

export default ShortInfo;
