import { get, getLang } from './use-lang'

export const getPostCollectionDescription = (collectionCount: number | undefined, locale = 'en') => {
  const text = get(getLang(locale))

  if (collectionCount === 0 || !collectionCount) {
    return `${text(`A_COLLECTION_OF`)} ${text(`POSTS`)}`
  }

  return `${text(`A_COLLECTION_OF`)} ${collectionCount === 1 ? `1 ${text(`POST`)}` : `${collectionCount} ${text(`POSTS`)}`}`
}
