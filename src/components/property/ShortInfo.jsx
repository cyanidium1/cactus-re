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
      <li key={idx} class="flex justify-between items-center">
        <span class="text-slate-400 text-sm">{title}</span>
        <span class="font-medium text-sm">{value}</span>
      </li>
    );
  });
  return (
    <ul class="absolute w-full sm:w-1/2 max-w-[320px] top-[50px] left-0 list-none px-2 mb-4 md:p-4 sm:top-[70px] sm:left-0 sm:max-w-[464px] sm:transform sm:translate-x-1/2 translate-y-1/2 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
      {elements}
    </ul>
  );
};

export default ShortInfo;
