import Layout from "@/components/Layout";
import PropCard from "@/components/PropCard";
import SearchUI from "@/components/SearchUI";
import TopImage from "@/components/TopImage";
import Skeleton from "@/components/Skeleton";
import { performRequest } from "@/lib/datocms";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store/useStore";
import {
  getCities,
  getData,
  getIdBuCity,
  getIdByValue,
  getTotalCount,
  queryDictionary,
  translateToEnglish,
} from "@/api/api";
import { urlFor } from "@/lib/sanity";
import { useRouter } from "next/router";

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
  const [cityList, setCityList] = useState([]);
  const [citiesLoaded, setCitiesLoaded] = useState(false);
  const { language } = useStore();
  const isRu = language === "ru";

  const router = useRouter();

  const handleSearch = () => {
    setCurrentPage(1);
    fetchTotalCount(true);
    fetchData(true, 0);
  };

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await getCities();
      setCityList(cities);
      setCitiesLoaded(true);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (!citiesLoaded || !router.isReady) return;
    fetchTotalCount();
  }, [currentPage, itemsPerPage, citiesLoaded, router.isReady]);

  const fetchTotalCount = async () => {
    setLoading(true);

    const cityId = getIdBuCity(cityList, router.query.city);
    const englishSellOrRent = translateToEnglish(
      router.query.sellOrRent || sellOrRent
    );
    const sellOrRentId = getIdByValue(
      queryDictionary,
      "actions",
      englishSellOrRent
    );
    const englishPropertyType = translateToEnglish(
      router.query.propertyType || propertyType
    );
    const typeOfPropertyId = getIdByValue(
      queryDictionary,
      "propertyTypes",
      englishPropertyType
    );

    try {
      const totalCount = await getTotalCount(
        minPrice,
        maxPrice,
        cityId,
        sellOrRentId,
        typeOfPropertyId
      );
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
    } catch (error) {
      console.error("Error fetching total count:", error);
    } finally {
      setLoading(false);
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

  useEffect(() => {
    if (!citiesLoaded || !router.isReady) return;
    fetchData(true);
  }, [citiesLoaded, router.isReady]);

  const fetchData = async (isFreshSearch = false, pageOverride) => {
    setLoading(true);
    if (!router.isReady || !citiesLoaded) return;

    const cityId = getIdBuCity(cityList, router.query.city);
    const englishSellOrRent = translateToEnglish(
      router.query.sellOrRent || sellOrRent
    );
    const sellOrRentId = getIdByValue(
      queryDictionary,
      "actions",
      englishSellOrRent
    );
    const englishPropertyType = translateToEnglish(
      router.query.propertyType || propertyType
    );
    const typeOfPropertyId = getIdByValue(
      queryDictionary,
      "propertyTypes",
      englishPropertyType
    );

    const pageToFetch =
      pageOverride !== undefined ? pageOverride : currentPage - 1;

    try {
      const data = await getData(
        pageToFetch,
        itemsPerPage,
        minPrice,
        maxPrice,
        cityId,
        sellOrRentId,
        typeOfPropertyId
      );

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

  const fetchAllData = async (isFreshSearch = false, pageOverride) => {
    setLoading(true);
    if (!router.isReady || !citiesLoaded) return;

    const cityId = null;

    const sellOrRentId = null;

    const typeOfPropertyId = null;
    let minPrice = 0;
    let maxPrice = 250000;

    const pageToFetch =
      pageOverride !== undefined ? pageOverride : currentPage - 1;

    try {
      const data = await getData(
        pageToFetch,
        itemsPerPage,
        minPrice,
        maxPrice,
        cityId,
        sellOrRentId,
        typeOfPropertyId
      );

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
        cityList={cityList}
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        city={router.query.city}
        fetchAllData={fetchAllData}
        setCity={setCity}
        propertyType={
          isRu
            ? router.query.propertyType
            : translateToEnglish(router.query.propertyType || propertyType)
        }
        setPropertyType={setPropertyType}
        sellOrRent={
          isRu
            ? router.query.sellOrRent
            : translateToEnglish(router.query.sellOrRent || sellOrRent)
        }
        setSellOrRent={setSellOrRent}
        onSearch={handleSearch}
        isRu={isRu}
      />
      <div
        className={`w-full  md:max-w-5xl  mx-auto mt-6 p-2 xl:p-0 ${
          isGrid ? "block sm:flex sm:flex-wrap justify-between" : ""
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
              <PropCard key={el._id} el={el} isGrid={isGrid} isRU={isRu} />
            ))}
      </div>

      <div className="justify-center max-w-5xl w-full flex md:justify-center my-2 mx-auto">
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
