import { client } from "@/lib/sanity";

export const queryDictionary = {
  actions: [
    {
      _id: "975f82ac-174e-424f-a851-e4731b8d4445",
      value: "Rent",
    },
    {
      _id: "512da1d1-3583-4ea1-be8d-df56eab66842",
      value: "Sell",
    },
  ],
  propertyTypes: [
    {
      _id: "84915def-d67c-403c-8f5a-0bf9fa2fd164",
      value: "Land",
    },
    {
      _id: "30e9bb97-2ad3-4b90-adfd-4aeeba1b273e",
      value: "House",
    },
    {
      _id: "c801fb11-a65c-4bbf-ae42-274fedf46cb6",
      value: "Apartment",
    },
    {
      _id: "87c9c1c8-1261-440f-a121-f0047d7c92ef",
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
