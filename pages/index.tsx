/* eslint-disable no-console */
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { processEnv } from '@lib/processEnv'
import {
  GhostPostOrPage,
  GhostPostsOrPages,
  GhostSettings,
  getAllPosts,
  getAllSettings
} from '@lib/ghost'

import { ISeoImage, seoImage } from '@meta/seoImage'
import { BodyClass } from '@helpers/BodyClass'
import { SEO } from '@meta/seo'
import { Layout } from '@components/Layout'
import { PostView } from '@components/PostView'
import { Header } from '@components/Header'

/**
 * Main index page (home page)
 *
 * Loads all posts from CMS
 *
 */

interface CmsData {
  posts: GhostPostsOrPages
  settings: GhostSettings
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  bodyClass: string
}

interface IndexProps {
  cmsData: CmsData
}

export default function Index({ cmsData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, posts, seoImage, bodyClass } = cmsData

  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <Layout
        {...{ bodyClass, settings, isHome: true }}
        header={
          <Header
            {...{
              settings,
              isHome: true,
              content: {
                title: settings.description
              }
            }}
          />
        }
      >
        <PostView {...{ settings, posts, isHome: true }} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts: GhostPostsOrPages | []

  console.time('Index - getStaticProps')

  try {
    settings = await getAllSettings()
    posts = await getAllPosts()
  } catch (error) {
    throw new Error('Index creation failed.')
  }

  const cmsData = {
    settings,
    posts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
    bodyClass: BodyClass({ isHome: true })
  }

  console.timeEnd('Index - getStaticProps')

  return {
    props: {
      cmsData
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }) // re-generate at most once every revalidate second
  }
}
