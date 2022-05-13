import { GetServerSideProps } from 'next'

import { Post } from '@components/Post'

import { GhostPostOrPage, getAllSettings, GhostPostsOrPages } from '@lib/ghost'
import { getPostPreviewById } from '@lib/ghost-admin'

import { seoImage } from '@meta/seoImage'

import { PostOrPageProps } from '../[...slug]'

const Pid = ({ cmsData }: PostOrPageProps) => {
  return <Post {...{ cmsData }} />
}

export default Pid

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!(params && params.pid)) throw Error('getStaticProps: wrong parameters.')
  const pid = typeof params.pid === 'string' ? params.pid : params.pid[0]

  console.time('Post Preview - getStaticProps')

  const settings = await getAllSettings()

  let post: GhostPostOrPage | null = null
  post = await getPostPreviewById(pid)

  const previewPosts: GhostPostsOrPages | never[] = []
  const prevPost: GhostPostOrPage | null = null
  const nextPost: GhostPostOrPage | null = null

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = post?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })

  console.timeEnd('Post Preview - getStaticProps')

  return {
    props: {
      cmsData: {
        settings,
        post,
        // page,
        // isPost,
        seoImage: image,
        previewPosts,
        prevPost,
        nextPost,
        // bodyClass: BodyClass({ isPost, page: contactPage || page || undefined, tags }),
      },
    },
  }
}
