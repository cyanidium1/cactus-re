import client from '../config/clientConfig'

async function uploadImageToSanityAndGetReference(file: File): Promise<string> {
  console.log(`file`, file)
  try {
    const uploadResponse = await client.assets.upload('image', file, {})
    console.log(`uploadResponse`, uploadResponse)

    const assetId = uploadResponse.assetId
    console.log(`assetId`, assetId)
    return uploadResponse._id
  } catch (error) {
    console.error('Error uploading file to Sanity:', error)
    throw error
  }
}

export default uploadImageToSanityAndGetReference
