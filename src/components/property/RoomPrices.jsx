const RoomPrices = ({ price }) => {
  return (
    <div className="p-6">
      <h5 className="text-2xl font-medium">Price:</h5>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-medium">"$ " {price}</span>
        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
          For sale
        </span>
      </div>
      <ul className="list-none mt-4">
        <li className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Days on hously</span>
          <span className="font-medium text-sm">124 days</span>
        </li>
        <li className="flex justify-between items-center mt-2">
          <span className="text-slate-400 text-sm">Price per</span>
          <span className="font-medium text-sm">{price}</span>
        </li>
        <li className="flex justify-between items-center mt-2">
          <span className="text-slate-400 text-sm">
            Monthly payment(estimate)
          </span>
          <span className="font-medium text-sm">$ 1500/Monthly</span>
        </li>
      </ul>
    </div>
  );
};

export default RoomPrices;
