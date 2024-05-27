const NEXT_DATOCMS_API_TOKEN = 'eb1a0c95a750cfa2e64a717a75350e';

const dictionary = {
    cities: {
        Shengjin: "fWToxp-pTkOnxp7sUxBZ7Q",
        Saranda: "P1Nznt1bRMWw6VIpvZH4sw",
        Vlore: "F3seKAokR3m8_IRM6GIFgw",
        Durres: "JGdo9N2gTbalq9dAgtaCbg",
        Tirana: "EU3vU3dlRhCP8pZRaw3qGg"
    },
    actions: {
        Покупка: "QLd5E-hrSb-p06vElH16Tg",
        Аренда: "Q82k656ZR6CXLXSubmqdUg",
        Rent: "Q82k656ZR6CXLXSubmqdUg",
        Buy: "QLd5E-hrSb-p06vElH16Tg"
    },
    propertyTypes: {
        Дом: "K9zDFqBfRKGhqhVReDZ3Fg",
        Квартира: "DseSBW7wS667bW9J2QdTjA",
        Apartment: "DseSBW7wS667bW9J2QdTjA",
        House: "K9zDFqBfRKGhqhVReDZ3Fg"
    }
};



export const performRequest = async ({ req, includeDrafts = false }) => {
    const { cityName, sellRent, houseApart, minPrice, maxPrice, first = 12, skip = 0 } = req;

    // для тестов ток, в коде не исп
    const WorkingOne = `query { 
        allProperties(
        skip: "0"
        first: "12"
        
      ) {
        youtubeLink
        titleRussian
        titleEnglish
        stateRussian
        stateEnglish
        sellrent {
          sellOrRent
        }
        roomsRussian
        roomsEnglish
        price
        mainPhoto {
          url
        }
        locationGmapsLink
        id
        houseorapt {
          houseorapt
        }
        descriptionRussian
        descriptionEnglish
        cityname {
          name
        }
        bathroomNumber
        areaCertificate
        area
        allPhotos {
          url
        }
      }}`

    const PAGE_CONTENT_QUERY = `query { 
                _allPropertiesMeta(
                    
                    filter: {
                        ${cityName !== '' && cityName ? `cityname: { eq: "${dictionary.cities[cityName]}"},` : ""}
                        price: { gte: ${minPrice}, lte: ${maxPrice} },
                        ${sellRent !== '' && sellRent ? `sellrent: { eq: "${dictionary.actions[sellRent]}"},` : ""}
                        ${houseApart !== '' && houseApart ? `houseorapt: { eq: "${dictionary.propertyTypes[houseApart]}"},` : ""}
                    }
                ) {
                    count
                }
                allProperties(
                    skip: ${skip},
                    first: ${first},
                    filter: {
                        ${cityName !== '' && cityName ? `cityname: { eq: "${dictionary.cities[cityName]}"},` : ""}
                        price: { gte: ${minPrice}, lte: ${maxPrice} },
                        ${sellRent !== '' && sellRent ? `sellrent: { eq: "${dictionary.actions[sellRent]}"},` : ""}
                        ${houseApart !== '' && houseApart ? `houseorapt: { eq: "${dictionary.propertyTypes[houseApart]}"},` : ""}
                    }
                ) {
                    youtubeLink
                    titleRussian
                    titleEnglish
                    stateRussian
                    stateEnglish
                    sellrent {
                        sellOrRent
                    }
                    roomsRussian
                    roomsEnglish
                    price
                    mainPhoto {
                        url
                    }
                    locationGmapsLink
                    id
                    houseorapt {
                        houseorapt
                    }
                    descriptionRussian
                    descriptionEnglish
                    cityname {
                        name
                    }
                    bathroomNumber
                    areaCertificate
                    area
                    allPhotos {
                        url
                    }
                }
            }
        `;

    const response = await fetch("https://graphql.datocms.com/", {
        headers: {
            Authorization: `Bearer ${NEXT_DATOCMS_API_TOKEN}`,
            ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ query: PAGE_CONTENT_QUERY }),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
    }

    if (responseBody.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(responseBody.errors)}`);
    }
    console.log(responseBody.data)
    return responseBody.data;
};
