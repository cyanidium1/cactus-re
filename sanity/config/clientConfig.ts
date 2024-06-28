import {createClient} from '@sanity/client'
const SANITY_STUDIO_PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID as string

const client = createClient({
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-06-28',
  token:
    'skPtCgyWKXLTy2UC4nkJwY68qKzC2n2BE7kUbTwnlYv9MGeIKjw2OKEIgk4JwM4OOmkE7QHxK5uYPF8nbYTONg8yt8hQIYh1mA9mw2imWJv7CZwiNdxxlNqmoLOawp8bhhXYCNTAtn5grLXhil7ismk2jE7kem2N1BfaRW5R921mGibn6Vbl',
  useCdn: true,
})

export default client
