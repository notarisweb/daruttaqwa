// lib/sanity.image.ts
import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client' // Pastikan path client kamu benar

const builder = createImageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}