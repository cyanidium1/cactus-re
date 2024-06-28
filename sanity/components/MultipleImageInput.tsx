import {useCallback} from 'react'
import {Stack, Button} from '@sanity/ui'
import {ArrayOfObjectsInputProps, set, unset} from 'sanity'
import uploadImageToSanityAndGetReference from '../utils/uploadImageToSanity'
import {urlFor} from '../utils/imageBuilder'

export function MultipleImageInput(props: ArrayOfObjectsInputProps) {
  const {value, onChange} = props

  const handleDeleteImage = useCallback(
    (indexToRemove: number) => {
      const newValue = value?.filter((_, index) => index !== indexToRemove)
      if (newValue?.length === 0) {
        onChange(unset())
      } else {
        onChange(set(newValue))
      }
    },
    [onChange, value],
  )

  const handleChangeFiles = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files
      if (files && files.length > 0) {
        const filesArray = Array.from(files)
        const newImages = await Promise.all(
          filesArray.map(async (file, index) => {
            const ref = await uploadImageToSanityAndGetReference(file)
            return {
              _key: `${index}`,
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: ref,
              },
            }
          }),
        )
        onChange(set([...(value || []), ...newImages]))
      } else {
        onChange(unset())
      }
    },
    [onChange, value],
  )

  return (
    <Stack space={3}>
      <input type="file" multiple onChange={handleChangeFiles} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {value?.map((image, index) => {
          return (
            <div key={index}>
              <div style={{display: 'flex', width: '100%'}}>
                <Button onClick={() => handleDeleteImage(index)} tone="critical" text="Delete" />
                <img alt="description" height={200} width={200} src={urlFor(image).url()} />
              </div>
            </div>
          )
        })}
      </div>
    </Stack>
  )
}
