import { client } from "@/lib/sanity";

export const queryDictionary = {
  cities: [
    {
      _id: "2b66a80a-3b85-4dd1-bd37-40fe19c55eaf",
      name: "Tirana",
    },
    {
      _id: "2c8bfde2-d346-471b-ad68-ef7898b323af",
      name: "Durres",
    },
    {
      _id: "339120d8-e12f-4bc3-998a-f6f1e60bdc8b",
      name: "Vlore",
    },
    {
      _id: "374061b6-9425-497c-ad74-e3e209d58f73",
      name: "Shengjin",
    },
    {
      _id: "df176459-48a9-4579-83fc-b09f13038471",
      name: "Saranda",
    },
  ],
  actions: [
    {
      _id: "48744851-41a5-4697-aed4-a3565a74f789",
      value: "Rent",
    },
    {
      _id: "adf6a0d8-7600-4421-8404-72c10743b6ee",
      value: "Sell",
    },
  ],
  propertyTypes: [
    {
      _id: "38f7c1ea-7160-415a-a5a5-d5cd9b42dd6c",
      value: "Land",
    },
    {
      _id: "46b953da-aeca-43a4-b0ac-3e8f3545b70e",
      value: "House",
    },
    {
      _id: "567f2872-dbb7-40f1-a09e-f990f69b9974",
      value: "Apartment",
    },
    {
      _id: "d466afd2-9f1e-4d88-858c-3e54882baedb",
      value: "Villa",
    },
  ],
};

// Шукає ід за словником
export const getIdByValue = (dictionary, category, value) => {
  const item = dictionary[category].find(
    (item) => item.value === value || item.name === value
  );
  return item ? item._id : null;
};

//Приклад
// const cityId = getIdByValue(queryDictionary, "cities", "Saranda");

export const getData = async (
  start = 0,
  limit = 12,
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
      conditions.push("cityname._ref == $cityId");
      params.cityId = cityId;
    }
    if (sellOrRentId) {
      conditions.push("sell_or_rent._ref == $sellOrRentId");
      params.sellOrRentId = sellOrRentId;
    }
    if (typeOfPropertyId) {
      conditions.push("type_of_property._ref == $typeOfPropertyId");
      params.typeOfPropertyId = typeOfPropertyId;
    }

    const query = `*[_type == 'property' ${conditions.length ? "&& " + conditions.join(" && ") : ""}] | order(_createdAt desc) [${start}...${start + limit}] {
      _id,
      title_english,
      title_russian,
      "cityName": cityname->name,
      "typeOfProperty": type_of_property->value,
      "sellOrRent": sell_or_rent->value,
      description_english,
      description_russian,
      location_gmaps_link,
      area_actuall,
      area_certificate,
      price,
      state_english,
      state_russian,
      rooms_english,
      rooms_russian,
      main_photo,
      all_photos,
      youtube_link,
      bathroom_number
    }`;

    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error:", error);
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
    const query = `*[_type == 'sell_or_rent'] {
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
    const query = `*[_type == 'type_of_property'] {
      _id,
      value
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
