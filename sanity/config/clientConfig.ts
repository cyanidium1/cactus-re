import {createClient} from '@sanity/client'
const SANITY_STUDIO_PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID as string

const client = createClient({
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-06-28',
  token:
    'skyiiFfw6tAQVJxYQGZU9irtTa5IkppFlKXfkCmANKjRYXh2xSkxYw7E4KebKL3qmONxQC5sJcaibijI1Px0RTtqoNsLQAGvmi4jtuUYizrU5VZI6KesUwrS6jTx4VzZL2IFM7yykiaaU3fjwdTLFu6jVNVvZxvLN22OPNbQ0UfetXnjzMTJ',
  useCdn: true,
})

export default client
