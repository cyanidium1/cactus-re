import { client } from "@/lib/sanity";

export const queryDictionary = {
  actions: [
    {
      _id: "e073a3f1-9727-49fd-859e-9de141ca450c",
      value: "Rent",
    },
    {
      _id: "450b0d10-9053-4790-b2c1-86abbd1b68cf",
      value: "Sell",
    },
  ],
  propertyTypes: [
    {
      _id: "54ca66c9-df6d-4c2d-976c-b1f045d91553",
      value: "Land",
    },
    {
      _id: "e8d50d0b-7fa7-466b-aa53-0ef4ab301d67",
      value: "House",
    },
    {
      _id: "df478a35-d3c9-41d7-a2c9-5e3193b6a059",
      value: "Apartment",
    },
    {
      _id: "9125996f-2170-4435-8db9-2b26e76041a8",
      value: "Villa",
    },
  ],
};

// Шукає ід за словником

export const getIdBuCity = (array, value) => {
  const item = array.find((item) => item.name === value);
  return item ? item._id : null;
};

export const getIdByValue = (dictionary, category, value) => {
  const item = dictionary[category].find(
    (item) => item.value === value || item.name === value
  );
  return item ? item._id : null;
};

//Приклад
// const cityId = getIdByValue(queryDictionary, "cities", "Saranda");

export const translateToEnglish = (value) => {
  const translations = {
    Покупка: "Sell",
    Аренда: "Rent",
    Вилла: "Villa",
    Апартаменты: "Apartment",
    Дом: "House",
    Земля: "Land",
  };

  return translations[value] || value;
};

export const getData = async (
  currentPage,
  itemsPerPage,
  minPrice,
  maxPrice,
  cityId,
  sellOrRentId,
  typeOfPropertyId
) => {
  try {
    let conditions = [];
    let params = {};
    // console.log(`min price`, minPrice);
    // console.log(`max price`, maxPrice);
    // console.log(`city id`, cityId);
    // console.log(`sellOrRentId`, sellOrRentId);
    // console.log(`typeOfPropertyId`, typeOfPropertyId);

    if (minPrice) {
      conditions.push("price >= $minPrice");
      params.minPrice = minPrice;
    }
    if (maxPrice) {
      conditions.push("price <= $maxPrice");
      params.maxPrice = maxPrice;
    }
    if (cityId) {
      conditions.push("cityName._ref == $cityId");
      params.cityId = cityId;
    }
    if (sellOrRentId) {
      conditions.push("sellOrRent._ref == $sellOrRentId");
      params.sellOrRentId = sellOrRentId;
    }
    if (typeOfPropertyId) {
      conditions.push("typeOfProperty._ref == $typeOfPropertyId");
      params.typeOfPropertyId = typeOfPropertyId;
    }

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    const query = `*[_type == 'property' ${conditions.length ? "&& " + conditions.join(" && ") : ""}] | order(_createdAt desc) [${start}...${end}] {
      _id,
      titleEnglish,
      titleRussian,
      "cityName": cityName->name,
      "typeOfProperty": typeOfProperty->value,
      "sellOrRent": sellOrRent->value,
      descriptionEnglish,
      descriptionRussian,
      locationGmapsLink,
      areaActual,
      areaCertificate,
      price,
      stateEnglish,
      stateRussian,
      roomsEnglish,
      roomsRussian,
      mainPhoto,
      allPhotos,
      youtubeLink,
      bathroomNumber
    }`;

    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getDataById = async (_id) => {
  try {
    const query = `*[_type == 'property' && _id == $_id] {
      _id,
      titleEnglish,
      titleRussian,
      "cityName": cityName->name,
      "typeOfProperty": typeOfProperty->value,
      "sellOrRent": sellOrRent->value,
      descriptionEnglish,
      descriptionRussian,
      locationGmapsLink,
      areaActual,
      areaCertificate,
      price,
      stateEnglish,
      stateRussian,
      roomsEnglish,
      roomsRussian,
      mainPhoto,
      allPhotos,
      youtubeLink,
      bathroomNumber
    }`;

    const params = { _id };
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getTotalCount = async (
  minPrice,
  maxPrice,
  cityId,
  sellOrRentId,
  typeOfPropertyId
) => {
  try {
    let conditions = [];
    let params = {};

    if (minPrice !== undefined) {
      conditions.push("price >= $minPrice");
      params.minPrice = minPrice;
    }
    if (maxPrice !== undefined) {
      conditions.push("price <= $maxPrice");
      params.maxPrice = maxPrice;
    }
    if (cityId) {
      conditions.push("cityName._ref == $cityId");
      params.cityId = cityId;
    }
    if (sellOrRentId) {
      conditions.push("sellOrRent._ref == $sellOrRentId");
      params.sellOrRentId = sellOrRentId;
    }
    if (typeOfPropertyId) {
      conditions.push("typeOfProperty._ref == $typeOfPropertyId");
      params.typeOfPropertyId = typeOfPropertyId;
    }

    const query = `count(*[_type == 'property' ${conditions.length ? "&& " + conditions.join(" && ") : ""}])`;
    const totalCount = await client.fetch(query, params);
    return totalCount;
  } catch (error) {
    console.error("Error:", error);
    return 0;
  }
};

export const getCities = async () => {
  try {
    const query = `*[_type == 'city'] {
      _id,
      name
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getSellOrRent = async () => {
  try {
    const query = `*[_type == 'sellOrRent'] {
      _id,
      value
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getTypeOfProperty = async () => {
  try {
    const query = `*[_type == 'typeOfProperty'] {
      _id,
      value
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
