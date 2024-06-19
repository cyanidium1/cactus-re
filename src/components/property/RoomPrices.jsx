import useStore from "@/zustand/store/useStore";

const RoomPrices = ({ price, sellrent }) => {
  const { translations, language } = useStore();
  const isRu = language === "ru";
  // Проверяем наличие объекта sellrent
  if (!sellrent || typeof sellrent !== "string") {
    return <div>No sellrent data available</div>;
  }

  // Если объект sellrent определен, продолжаем рендеринг
  const sellOrRent = sellrent;

  const handleSellRent = () => {
    if (isRu && sellOrRent === "Sell") {
      return "Продажа";
    } else if (isRu && sellOrRent === "Rent") {
      return "Аренда";
    }
    return sellOrRent;
  };

  return (
    <div className="p-6">
      <h5 className="text-2xl font-medium text-black  dark:text-slate-400">
        {translations.PropertyPage.price}
      </h5>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl md:text-lg lg:text-xl font-medium text-black  dark:text-slate-400">
          $ {price}
        </span>
        <span className="bg-green-600/10 text-customGreen text-sm px-2.5 py-0.75 rounded h-6  dark:text-slate-400">
          {handleSellRent()}
        </span>
      </div>
    </div>
  );
};

export default RoomPrices;
