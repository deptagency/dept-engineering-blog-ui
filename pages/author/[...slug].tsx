import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { resolveUrl } from '@utils/routing'
import { processEnv } from '@lib/processEnv'
import { getPostCollectionDescription } from '@utils/get-collection-description'
import {
  GhostAuthor,
  GhostPostOrPage,
  GhostPostsOrPages,
  GhostSettings,
  getAllAuthors,
  getAllSettings,
  getAuthorBySlug,
  getPostsByAuthor
} from '@lib/ghost'

import { BodyClass } from '@helpers/BodyClass'
import { SEO, authorSameAs } from '@meta/seo'
import { ISeoImage, seoImage } from '@meta/seoImage'
import { Layout } from '@components/Layout'
import { PostView } from '@components/PostView'
import { Header } from '@components/Header'

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
interface CmsData {
  author: GhostAuthor
  posts: GhostPostsOrPages
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  settings: GhostSettings
  bodyClass: string
}

interface AuthorIndexProps {
  cmsData: CmsData
}

const AuthorIndex = ({ cmsData }: AuthorIndexProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { author, posts, settings, seoImage, bodyClass } = cmsData
  const { name, bio } = author
  const sameAs = authorSameAs(author)
  const description = getPostCollectionDescription(
    author.count?.posts,
    settings.lang
  )

  return (
    <>
      <SEO
        {...{
          settings,
          description: bio || undefined,
          seoImage,
          sameAs,
          title: name
        }}
      />
      <Layout
        {...{ settings, bodyClass }}
        header={
          <Header
            {...{
              settings,
              content: {
                title: author.name,
                description: description
              }
            }}
          />
        }
      >
        <PostView {...{ settings, posts }} />
      </Layout>
    </>
  )
}

export default AuthorIndex

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) {
    throw Error('getStaticProps: wrong parameters.')
  }
  const [slug] = params.slug.reverse()

  const author = await getAuthorBySlug(slug)
  const posts = await getPostsByAuthor(slug)
  const settings = await getAllSettings()

  const { cover_image, profile_image } = author
  const { siteUrl } = settings.processEnv
  const imageUrl = cover_image || profile_image || undefined
  const authorImage = await seoImage({ siteUrl, imageUrl })

  return {
    props: {
      cmsData: {
        author,
        posts,
        settings,
        seoImage: authorImage,
        bodyClass: BodyClass({ author })
      }
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }) // re-generate at most once every revalidate second
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAllAuthors()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings

  const paths = authors
    .map(({ slug, url }) => resolveUrl({ cmsUrl, slug, url: url || undefined }))
    .filter((path) => path.startsWith(`/author/`))

  return {
    paths,
    fallback: processEnv.isr.enable
  }
}
