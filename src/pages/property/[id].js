import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import RoomQualities from "@/components/property/RoomQualities";
import RoomDescription from "@/components/property/RoomDescription";
import RoomGallery from "@/components/property/RoomGallery";
import RoomPrices from "@/components/property/RoomPrices";
import ActionButtons from "@/components/property/ActionButtons";
import { useEffect, useState } from "react";
import { performRequest } from "@/lib/getPage";
import useStore from "@/zustand/store/useStore";
import ShortInfo from "@/components/property/ShortInfo";
//import GoogleMapComponent from "@/components/property/GoogleMapComponent";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);

  const { language } = useStore();
  const isRu = language === "ru";

  async function fetchData() {
    setLoading(true);

    try {
      const data = await performRequest({ id });
      setPage(data.property);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  // вся инфа залетает в page.
  useEffect(() => {
    if (page.id) {
      console.log(page);
    }
  }, [page]);

  const {
    allPhotos,
    cityname,
    titleEnglish,
    titleRussian,
    bathroomNumber,
    roomsEnglish,
    area,
    areaCertificate,
    descriptionEnglish,
    descriptionRussian,
    price,
    sellrent,
    mainPhoto,
    locationGmapsLink,
  } = page;

  return (
    <Layout>
      <div className="md:flex md:justify-between md:items-center md:h-full">
        {allPhotos ? (
          <RoomGallery
            mainPhoto={mainPhoto}
            allPhotos={allPhotos}
            titleEn={titleEnglish}
            titleRu={titleRussian}
          />
        ) : (
          <div>No images available</div>
        )}
        <div className="hidden md:flex md:flex-col md:w-1/3 md:h-full md:my-0 py-[8px] list-none px-2 my-4 md:px-4 md:py-8 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
          <RoomQualities
            bath={bathroomNumber}
            rooms={roomsEnglish}
            area={area}
          />

          <ShortInfo
            isRu={isRu}
            city={cityname}
            rooms={roomsEnglish}
            areaCertificate={areaCertificate}
            area={area}
          />
        </div>
      </div>
      <div className="md:mt-[10px]">
        <div className="md:flex justify-between mb-[100px]">
          <div className="relative lg:w-2/3 md:w-full md:py-4 md:px-0 px-3 lg:pr-[74px]">
            <h4 className=" text-2xl font-medium dark:text-slate-400">
              {isRu ? titleRussian : titleEnglish}
            </h4>
            <div className="md:hidden w-full py-[8px] sm:max-w-full sm:mx-auto list-none px-2 my-4 md:px-4 md:py-8  rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
              <RoomQualities
                bath={bathroomNumber}
                rooms={roomsEnglish}
                area={area}
              />
              <ShortInfo
                isRu={isRu}
                city={cityname}
                rooms={roomsEnglish}
                areaCertificate={areaCertificate}
                area={area}
              />
            </div>
            <RoomDescription
              descriptionEn={descriptionEnglish}
              descriptionRu={descriptionRussian}
              isRu={isRu}
            />
            {/* <GoogleMapComponent locationGmapsLink={locationGmapsLink} /> */}
          </div>
          <div className="lg:w-1/3 md:w-1/2 md:py-4 px-3 md:px-0 mt-8 md:mt-0">
            <div className="sticky top-20">
              <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                <RoomPrices price={price} sellrent={sellrent} isRu={isRu} />
                <ActionButtons isRu={isRu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
