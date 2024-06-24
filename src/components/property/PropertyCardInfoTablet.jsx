import RoomQualities from "./RoomQualities";
import ShortInfo from "./ShortInfo";
import Realtor from "../Realtor";

const PropertyCardInfoTablet = ({
  bathroomNumber,
  roomsEnglish,
  cityName,
  areaCertificate,
  areaActual,
}) => {
  return (
    <div className="hidden md:block md:w-1/3 md:h-full md:my-0 ">
      <div className="list-none overflow-hidden my-4 md:p-4 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700 relative">
        <img src="/images/cactusSvg.svg" className="absolute -right-36 -bottom-14 opacity-25 " />
        <div>
          <RoomQualities
            bath={bathroomNumber}
            rooms={roomsEnglish}
            area={areaActual}
          />
        </div>
        <div className="flex-grow h-full">
          <ShortInfo
            city={cityName}
            rooms={roomsEnglish}
            areaCertificate={areaCertificate}
            area={areaActual}
          />
        </div>
      </div>
      <div className="flex justify-center items-center my-4 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
        <Realtor />
      </div>
    </div>
  );
};

export default PropertyCardInfoTablet;
