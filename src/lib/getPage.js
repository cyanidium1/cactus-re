const NEXT_DATOCMS_API_TOKEN = 'eb1a0c95a750cfa2e64a717a75350e';

export const performRequest = async ({ id, includeDrafts = false }) => {

  const PAGE_CONTENT_QUERY = `query {
        property(filter: {id: {eq: "${id}"}}) {
          allPhotos {
            url
          }
          area
          areaCertificate
          bathroomNumber
          cityname {
            name
          }
          descriptionEnglish
          descriptionRussian
          houseorapt {
            houseorapt
          }
          id
          locationGmapsLink
          mainPhoto {
            url
          }
          price
          roomsEnglish
          roomsRussian
          sellrent {
            sellOrRent
          }
          stateEnglish
          stateRussian
          titleEnglish
          titleRussian
          youtubeLink
        }
      }`

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
  return responseBody.data;
};
