import RoomQualities from "./RoomQualities";
import ShortInfo from "./ShortInfo";
import Realtor from "../Realtor";

const PropertyCardInfoMobile = ({
  bathroomNumber,
  roomsEnglish,
  areaActual,
  cityName,
  areaCertificate,
}) => {
  return (
    <div className="md:hidden w-full px-2 py-4 sm:p-6 sm:max-w-full sm:mx-auto list-none my-4 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
      <RoomQualities
        bath={bathroomNumber}
        rooms={roomsEnglish}
        area={areaActual}
      />
      <ShortInfo
        city={cityName}
        rooms={roomsEnglish}
        areaCertificate={areaCertificate}
        area={areaActual}
      />
      <div className="flex my-4 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
        <Realtor />
      </div>
    </div>
  );
};

export default PropertyCardInfoMobile;
