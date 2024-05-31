const RoomPrices = ({ price, sellrent }) => {
  // Проверяем наличие объекта sellrent
  if (!sellrent || typeof sellrent !== "object") {
    return <div>No sellrent data available</div>;
  }

  // Если объект sellrent определен, продолжаем рендеринг
  const sellOrRent = sellrent.sellOrRent;

  return (
    <div className="p-6">
      <h5 className="text-2xl font-medium">Price:</h5>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-medium">$ {price}</span>
        <span className="bg-green-600/10 text-customGreen text-sm px-2.5 py-0.75 rounded h-6">
          {sellOrRent}
        </span>
      </div>
    </div>
  );
};

export default RoomPrices;
