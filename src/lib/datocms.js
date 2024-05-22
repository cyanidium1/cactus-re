const NEXT_DATOCMS_API_TOKEN = 'eb1a0c95a750cfa2e64a717a75350e'

export const performRequest = async ({ query, variables = {}, includeDrafts = false }) => {
    const response = await fetch("https://graphql.datocms.com/", {
        headers: {
            Authorization: `Bearer ${NEXT_DATOCMS_API_TOKEN}`,
            ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        },
        method: "POST",
        body: JSON.stringify({ query, variables }),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
    }

    return responseBody;
}