import {defineCliConfig} from 'sanity/cli'
const SANITY_STUDIO_PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID as string

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
  },
})
