/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  GhostPostOrPage,
  GhostPostsOrPages,
  GhostSettings,
  getAllPages,
  getAllPostSlugs,
  getAllPosts,
  getAllSettings,
  getPageBySlug,
  getPostBySlug,
  getPostsByTag,
  getTagBySlug
} from '@lib/ghost'
import { resolveUrl } from '@utils/routing'
import { CareersPage, defaultCareersPage } from '@lib/careersPageDefaults'
import { collections } from '@lib/collections'
import { processEnv } from '@lib/processEnv'

import { ISeoImage, seoImage } from '@meta/seoImage'
import { BodyClass } from '@helpers/BodyClass'
import { Careers } from '@components/CareersPage'
import { Post } from '@components/Post'
import { Page } from '@components/Page'

/**
 *
 * Renders a single post or page and loads all content.
 *
 */

interface CmsDataCore {
  post: GhostPostOrPage
  page: GhostPostOrPage
  careersPage: CareersPage
  settings: GhostSettings
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  bodyClass: string
}

interface CmsData extends CmsDataCore {
  isPost: boolean
}

export interface PostOrPageProps {
  cmsData: CmsData
}

const PostOrPageIndex = ({ cmsData }: PostOrPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { isPost, careersPage } = cmsData
  if (isPost) {
    return <Post {...{ cmsData }} />
  } else if (!!careersPage) {
    const { careersPage, settings, seoImage, bodyClass } = cmsData
    return (
      <Careers
        cmsData={{
          page: careersPage,
          settings,
          seoImage,
          bodyClass
        }}
      />
    )
  } else {
    return <Page cmsData={cmsData} />
  }
}

export default PostOrPageIndex

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) {
    throw Error('getStaticProps: wrong parameters.')
  }
  const [slug] = params.slug.reverse()

  console.time('Post - getStaticProps')

  const settings = await getAllSettings()

  let post: GhostPostOrPage | null = null
  let page: GhostPostOrPage | null = null
  let careersPage: CareersPage | null = null

  post = await getPostBySlug(slug)
  const isPost = !!post
  if (!isPost) {
    page = await getPageBySlug(slug)
  } else if (post?.primary_tag) {
    const primaryTag = await getTagBySlug(post?.primary_tag.slug)
    post.primary_tag = primaryTag
  }

  // Add custom careers page
  let isCareersPage = false
  if (processEnv.enableCareersPage) {
    careersPage = { ...defaultCareersPage }
    isCareersPage = careersPage?.slug === slug
    if (!isCareersPage) careersPage = null
  }

  if (!post && !page && !isCareersPage) {
    return {
      notFound: true
    }
  }

  let previewPosts: GhostPostsOrPages | never[] = []
  let prevPost: GhostPostOrPage | null = null
  let nextPost: GhostPostOrPage | null = null

  if (isPost && post?.id && post?.slug) {
    const tagSlug = post?.primary_tag?.slug
    previewPosts =
      (tagSlug && (await getPostsByTag(tagSlug, 3, post?.id))) || []

    const postSlugs = await getAllPostSlugs()
    const index = postSlugs.indexOf(post?.slug)
    const prevSlug = index > 0 ? postSlugs[index - 1] : null
    const nextSlug = index < postSlugs.length - 1 ? postSlugs[index + 1] : null

    prevPost = (prevSlug && (await getPostBySlug(prevSlug))) || null
    nextPost = (nextSlug && (await getPostBySlug(nextSlug))) || null
  }

  const { siteUrl } = settings.processEnv
  const imageUrl = (post || page)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })

  const tags =
    (careersPage && careersPage.tags) || (page && page.tags) || undefined

  console.timeEnd('Post - getStaticProps')

  return {
    props: {
      cmsData: {
        settings,
        post,
        page,
        careersPage,
        isPost,
        seoImage: image,
        previewPosts,
        prevPost,
        nextPost,
        bodyClass: BodyClass({
          isPost,
          page: careersPage || page || undefined,
          tags
        })
      }
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }) // re-generate at most once every revalidate second
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable, maxNumberOfPosts, maxNumberOfPages } = processEnv.isr
  const limitForPosts = (enable && { limit: maxNumberOfPosts }) || undefined
  const limitForPages = (enable && { limit: maxNumberOfPages }) || undefined
  const posts = await getAllPosts(limitForPosts)
  const pages = await getAllPages(limitForPages)
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings

  const postRoutes = (posts as GhostPostsOrPages).map((post) => {
    const collectionPath = collections.getCollectionByNode(post)
    const { slug, url } = post
    return resolveUrl({ cmsUrl, collectionPath, slug, url })
  })

  let careersPageRoute: string | null = null
  if (processEnv.enableCareersPage) {
    const careersPage = { ...defaultCareersPage }
    const { slug, url } = careersPage
    careersPageRoute = resolveUrl({ cmsUrl, slug, url })
  }

  const customRoutes = (careersPageRoute && [careersPageRoute]) || []
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) =>
    resolveUrl({ cmsUrl, slug, url })
  )
  const paths = [...postRoutes, ...pageRoutes, ...customRoutes]

  return {
    paths,
    fallback: enable && 'blocking'
  }
}
