import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import RoomQualities from "@/components/property/RoomQualities";
import RoomDescription from "@/components/property/RoomDescription";
import RoomGallery from "@/components/property/RoomGallery";
import RoomPrices from "@/components/property/RoomPrices";
import ActionButtons from "@/components/property/ActionButtons";
import { useEffect, useState } from "react";
import { performRequest } from "@/lib/getPage";

export default function Page({ isRu }) {
  const router = useRouter();
  const { id } = router.query;

  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);

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
    titleEnglish,
    titleRussian,
    bathroomNumber,
    roomsEnglish,
    area,
    descriptionEnglish,
    descriptionRussian,
    price,
    sellrent,
    mainPhoto,
    locationGmapsLink,
  } = page;

  return (
    <Layout>
      {allPhotos ? (
        <RoomGallery
          mainPhoto={mainPhoto}
          allPhotos={allPhotos}
          titleEn={titleEnglish}
        />
      ) : (
        <div>No images available</div>
      )}
      <div className="md:mt-24">
        <div className="md:flex justify-center mb-[100px]">
          <div className="lg:w-2/3 md:w-full md:p-4 px-3">
            <h4 className="text-2xl forn-medium">
              {isRu ? titleRussian : titleEnglish}
            </h4>
            <RoomQualities
              bath={bathroomNumber}
              rooms={roomsEnglish}
              area={area}
            />
            <RoomDescription
              descriptionEn={descriptionEnglish}
              descriptionRu={descriptionRussian}
              isRu={isRu}
            />
            <div>{locationGmapsLink}</div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
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
