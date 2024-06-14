export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-14'


const NEXT_PUBLIC_SANITY_PROJECT_ID = "hsn2pu2u"
const NEXT_PUBLIC_SANITY_DATASET = "production"


export const dataset = NEXT_PUBLIC_SANITY_DATASET;
export const projectId = NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = false
