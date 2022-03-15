import { parse as urlParse } from 'url'
import { Params } from '@tryghost/content-api'
import GhostAdminAPI from '@tryghost/admin-api'
import { normalizePost } from '@lib/ghost-normalize'
import { getAllSettings, GhostPostOrPage } from '@lib/ghost';

import { ghostAdminAPIKey, ghostAPIUrl } from '@lib/processEnv'

const adminApi = new GhostAdminAPI({
  url: ghostAPIUrl,
  key: ghostAdminAPIKey,
  version: 'v3',
})

const postPreviewFetchOptions: Params = {
  limit: 'all',
  include: ['tags', 'authors', 'count.posts'],
  order: ['featured DESC', 'published_at DESC'],
}

export async function getPostPreviewById(id: string): Promise<GhostPostOrPage | null> {
  let result: GhostPostOrPage

  try {
    const post = (await adminApi.posts.browse({
      ...postPreviewFetchOptions,
      filter: `uuid:${id}`,
      formats: `html`,
    }))[0]

    // older Ghost versions do not throw error on 404
    if (!post) return null

    const { url } = await getAllSettings()
    result = await normalizePost(post, (url && urlParse(url)) || undefined)
  } catch (e) {
    const error = e as { response?: { status: number } }
    if (error.response?.status === 404) return null
    throw e
  }
  return result
}
