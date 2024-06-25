import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import RoomQualities from "@/components/property/RoomQualities";
import RoomDescription from "@/components/property/RoomDescription";
import RoomGallery from "@/components/property/RoomGallery";
import RoomPrices from "@/components/property/RoomPrices";
import ActionButtons from "@/components/property/ActionButtons/ActionButtons";
import { useEffect, useState } from "react";
import { performRequest } from "@/lib/getPage";
import useStore from "@/zustand/store/useStore";
import ShortInfo from "@/components/property/ShortInfo";
import { getDataById } from "@/api/api";
import { urlFor } from "@/lib/sanity";
import Realtor from "@/components/Realtor";
import PropertyCardInfoTablet from "@/components/property/PropertyCardInfoTablet";
import PropertyCardInfoMobile from "@/components/property/PropertyCardInfoMobile";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);

  const { language } = useStore();
  const isRu = language === "ru";

  async function getDataBtId() {
    setLoading(true);
    try {
      const data = await getDataById(id);

      const newData = data.map((item) => {
        if (item.mainPhoto && item.mainPhoto._type === "image") {
          item.mainPhoto.url = urlFor(item.mainPhoto).url();
        }
        if (item.allPhotos && Array.isArray(item.allPhotos)) {
          item.allPhotos = item.allPhotos.map((photo) => {
            if (photo._type === "image") {
              return { ...photo, url: urlFor(photo).url() };
            }
            return photo;
          });
        }
        return item;
      });

      setPage(newData[0]);
      console.log(`data`, newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getDataBtId();
    }
  }, [id]);

  useEffect(() => {
    if (page._id) {
      console.log(page);
    }
  }, [page]);

  const {
    allPhotos,
    cityName,
    titleEnglish,
    titleRussian,
    bathroomNumber,
    roomsEnglish,
    areaActual,
    areaCertificate,
    descriptionEnglish,
    descriptionRussian,
    price,
    sellOrRent,
    mainPhoto,
    locationGmapsLink,
  } = page;

  const projectTitle = isRu ? titleRussian : titleEnglish;

  return (
    <Layout title={projectTitle}>
      <div className="md:flex md:justify-between mb-8 md:gap-4 md:items-center md:h-full">
        {allPhotos ? (
          <RoomGallery
            mainPhoto={mainPhoto.url}
            allPhotos={allPhotos}
            titleEn={titleEnglish}
            titleRu={titleRussian}
          />
        ) : (
          <div>No images available</div>
        )}
        <PropertyCardInfoTablet
          bathroomNumber={bathroomNumber}
          roomsEnglish={roomsEnglish}
          areaActual={areaActual}
          cityName={cityName}
          areaCertificate={areaCertificate}
        />
        <PropertyCardInfoMobile
          bathroomNumber={bathroomNumber}
          roomsEnglish={roomsEnglish}
          areaActual={areaActual}
          cityName={cityName}
          areaCertificate={areaCertificate}
        />
      </div>
      <div className="md:mt-[10px]">
        <div className="md:flex justify-between mb-[100px] gap-2">
          <div className="relative lg:w-2/3 md:w-full md:py-4 md:px-0 ">
            <h4 className=" text-2xl font-medium dark:text-slate-400">
              {isRu ? titleRussian : titleEnglish}
            </h4>

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
                <RoomPrices price={price} sellrent={sellOrRent} isRu={isRu} />
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
