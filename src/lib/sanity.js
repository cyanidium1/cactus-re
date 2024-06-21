import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-08",
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
