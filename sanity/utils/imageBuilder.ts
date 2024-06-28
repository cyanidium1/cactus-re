import ImageUrlBuilder from '@sanity/image-url'
import client from '../config/clientConfig'

const imgBuilder = ImageUrlBuilder(client)

export function urlFor(source: any) {
  return imgBuilder.image(source)
}
