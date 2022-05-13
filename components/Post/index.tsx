/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

import { resolveUrl } from '@utils/routing'

import { Layout } from '@components/Layout'
import { PreviewPosts } from '@components/PreviewPosts'
import { RenderContent } from '@components/RenderContent'
import { Subscribe } from '@components/Subscribe'
import { TableOfContents } from '@components/toc/TableOfContents'

import { SEO } from '@meta/seo'
import { ISeoImage } from '@meta/seoImage'

import { PostClass } from '@helpers/PostClass'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import { collections } from '@lib/collections'

import { Header } from '../Header'
import { Heading } from '@components/typography/Headings'
import { Subheading } from '@components/typography/Subheadings'

interface PostProps {
  cmsData: {
    post: GhostPostOrPage
    settings: GhostSettings
    seoImage: ISeoImage
    previewPosts?: GhostPostsOrPages
    prevPost?: GhostPostOrPage
    nextPost?: GhostPostOrPage
    bodyClass: string
  }
}

export const Post = ({ cmsData }: PostProps) => {
  const { post, settings, seoImage, previewPosts, prevPost, nextPost, bodyClass } = cmsData
  const { slug, url, meta_description, excerpt, title } = post
  const { url: cmsUrl } = settings
  const description = meta_description || excerpt

  const { processEnv } = settings
  const { nextImages, toc, memberSubscriptions } = processEnv

  const lang = settings.lang
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isFeatured: !!featImg, isImage: !!featImg })

  const htmlAst = post.htmlAst
  if (htmlAst === undefined) throw Error('Post.tsx: htmlAst must be defined.')

  const collectionPath = collections.getCollectionByNode(post)

  return (
    <>
      <SEO {...{ description, settings, seoImage, article: post, title }} />
      <Layout
        {...{ bodyClass, settings }}
        header={<Header {...{ settings }} />}
        previewPosts={<PreviewPosts {...{ settings, primaryTag: post.primary_tag, posts: previewPosts, prev: prevPost, next: nextPost }} />}
      >
        <div className="inner">
          <div className="grid-wrapper">
            <article className={`post-full grid-inner ${postClass}`}>
              <div className="grid-post">
                <header className="post-full-header post-header">
                  {post.primary_tag && (
                    <section className="post-full-tags">
                      <Link href="/">
                        <a className="breadcrumb-home">DEPT® Engineering Blog</a>
                      </Link>
                      <Link href={resolveUrl({ cmsUrl, slug: post.primary_tag.slug, url: post.primary_tag.url })}>
                        <a>{post.primary_tag.name}</a>
                      </Link>
                    </section>
                  )}

                  <Heading.One noMargin>{title}</Heading.One>

                  {post.custom_excerpt && (
                    <Subheading.One as="p" $color={'darkmidgrey'}>
                      {post.custom_excerpt}
                    </Subheading.One>
                  )}

                  <div className="post-full-byline">
                    <section className="post-full-byline-content">
                      <section className="post-full-byline-meta">
                        <h4 className="author-name">
                          {post.authors?.map((author, i) => (
                            <div key={i}>
                              {i > 0 ? `, ` : ``}
                              <Link href={resolveUrl({ cmsUrl, slug: author.slug, url: author.url || undefined })}>
                                <a>{author.name}</a>
                              </Link>
                            </div>
                          ))}
                        </h4>
                        <div className="byline-meta-content">
                          <time className="byline-meta-date" dateTime={post.published_at || ''}>
                            {dayjs(post.published_at || '').format('D MMMM, YYYY')}&nbsp;
                          </time>
                        </div>
                      </section>
                    </section>
                  </div>
                </header>

                <RenderContent htmlAst={htmlAst} />

                <div className="post-meta">
                  {featImg &&
                    (nextImages.feature && featImg.dimensions ? (
                      <figure className="post-full-image" style={{ display: 'inherit' }}>
                        <Image
                          src={featImg.url}
                          alt={title}
                          quality={nextImages.quality}
                          layout="responsive"
                          sizes={`
                                (max-width: 350px) 350px,
                                (max-width: 530px) 530px,
                                (max-width: 710px) 710px,
                                (max-width: 1170px) 1170px,
                                (max-width: 2110px) 2110px, 2000px
                              `}
                          {...featImg.dimensions}
                        />
                      </figure>
                    ) : (
                      post.feature_image && (
                        <figure className="post-full-image">
                          <img src={post.feature_image} alt={title} />
                        </figure>
                      )
                    ))}
                  {toc.enable && !!post.toc && <TableOfContents {...{ toc: post.toc, url: resolveUrl({ cmsUrl, collectionPath, slug, url }), maxDepth: toc.maxDepth, lang }} />}
                </div>
              </div>
            </article>
          </div>
        </div>
        {memberSubscriptions && <Subscribe {...{ settings }} />}
      </Layout>
    </>
  )
}
