import Layout from "@/components/Layout";
import PropCard from "@/components/PropCard";
import SearchUI from "@/components/SearchUI";
import TopImage from "@/components/TopImage";
import Skeleton from "@/components/Skeleton";
import { performRequest } from "@/lib/datocms";
import { Card, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store/useStore";
import {
  getData,
  getIdByValue,
  getTotalCount,
  queryDictionary,
  translateToEnglish,
} from "@/api/api";
import { urlFor } from "@/lib/sanity";

export default function Home() {
  const [portfolioPosts, setPortfolioPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isGrid, setIsGrid] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250000);
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [sellOrRent, setSellOrRent] = useState("");
  const { language } = useStore();
  const isRu = language === "ru";

  const handleSearch = () => {
    setCurrentPage(1);
    fetchTotalCount(true);
    fetchData(true, 0);
  };

  useEffect(() => {
    fetchTotalCount();
    fetchData();
  }, [currentPage, itemsPerPage]);

  const fetchTotalCount = async (isFreshSearch = false) => {
    let cityId = null;
    let sellOrRentId = null;
    let typeOfPropertyId = null;

    if (isFreshSearch) {
      cityId = getIdByValue(queryDictionary, "cities", city);
      const englishSellOrRent = translateToEnglish(sellOrRent);
      sellOrRentId = getIdByValue(
        queryDictionary,
        "actions",
        englishSellOrRent
      );
      const englishPropertyType = translateToEnglish(propertyType);
      typeOfPropertyId = getIdByValue(
        queryDictionary,
        "propertyTypes",
        englishPropertyType
      );
    }

    try {
      const totalCount = await getTotalCount(
        isFreshSearch ? minPrice : undefined,
        isFreshSearch ? maxPrice : undefined,
        cityId,
        sellOrRentId,
        typeOfPropertyId
      );
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
    } catch (error) {
      console.error("Error fetching total count:", error);
    }
  };

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 260, behavior: "smooth" });
      }, 200);
    }
  }, [currentPage]);

  const fetchData = async (isFreshSearch = false, pageOverride) => {
    setLoading(true);

    let cityId = null;
    let sellOrRentId = null;
    let typeOfPropertyId = null;

    const pageToFetch =
      pageOverride !== undefined ? pageOverride : currentPage - 1;

    if (isFreshSearch) {
      cityId = getIdByValue(queryDictionary, "cities", city);
      const englishSellOrRent = translateToEnglish(sellOrRent);
      sellOrRentId = getIdByValue(
        queryDictionary,
        "actions",
        englishSellOrRent
      );
      const englishPropertyType = translateToEnglish(propertyType);
      typeOfPropertyId = getIdByValue(
        queryDictionary,
        "propertyTypes",
        englishPropertyType
      );
    }

    try {
      const data = await getData(
        pageToFetch,
        itemsPerPage,
        isFreshSearch ? minPrice : undefined,
        isFreshSearch ? maxPrice : undefined,
        cityId,
        sellOrRentId,
        typeOfPropertyId
      );
      console.log(`data`, data);

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
      setPortfolioPosts(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout isStyled={false}>
      <TopImage isRu={isRu} />
      <SearchUI
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        city={city}
        setCity={setCity}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        sellOrRent={sellOrRent}
        setSellOrRent={setSellOrRent}
        onSearch={handleSearch}
        isRu={isRu}
      />
      <div
        className={`w-full md:max-w-5xl  mx-auto mt-4 p-2 xl:p-0 ${
          isGrid ? "block md:flex md:flex-wrap md:justify-between mx-auto" : ""
        }`}
      >
        {loading
          ? Array(12)
              .fill()
              .map((_, index) => (
                <Skeleton
                  key={index}
                  isGrid={isGrid}
                  className="w-80 space-y-5 p-4 my-3"
                  radius="lg"
                />
              ))
          : portfolioPosts.map((el) => (
              <PropCard key={el.id} el={el} isGrid={isGrid} isRU={isRu} />
            ))}
      </div>
      <div className="max-w-5xl w-full flex md:justify-center my-2 mx-auto">
        <Pagination
          loop
          showControls
          color="success"
          total={totalPages}
          initialPage={1}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Layout>
  );
}
