import Layout from "@/components/Layout";
import PropCard from "@/components/PropCard";
import SearchUI from "@/components/SearchUI";
import TopImage from "@/components/TopImage";
import Skeleton from "@/components/Skeleton";
import { performRequest } from "@/lib/datocms";
import { Card, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store/useStore";

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
    fetchData(true);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    fetchData();
  }, [itemsPerPage]);

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

  async function fetchData(isFreshSearch = false) {
    setLoading(true);
    const first = itemsPerPage;
    const skip = (currentPage - 1) * itemsPerPage;

    const req = {
      cityName: city || null,
      sellRent: sellOrRent || null,
      houseApart: propertyType || null,
      minPrice,
      maxPrice,
      first,
      skip,
    };

    try {
      const data = await performRequest({ req });
      if (data.allProperties.length === 0 && !isFreshSearch) {
        console.log("Empty response, making a repeat request...");
        // Repeat request logic here
        const repeatData = await performRequest({ req });
        setPortfolioPosts(repeatData.allProperties);
        const totalItems = repeatData._allPropertiesMeta.count;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } else {
        setPortfolioPosts(data.allProperties);
        const totalItems = data._allPropertiesMeta.count;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

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
                <Card
                  key={index}
                  className="w-80 space-y-5 p-4 my-3"
                  radius="lg"
                >
                  <Skeleton index={index} isGrid={isGrid} />
                </Card>
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
