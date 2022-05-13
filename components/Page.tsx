/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import { Layout } from '@components/Layout'
import { SEO } from '@meta/seo'
import { ISeoImage } from '@meta/seoImage'
import { RenderContent } from '@components/RenderContent'
import { PostClass } from '@helpers/PostClass'

import { Header } from './Header'
import { Heading } from './typography/Headings'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */

interface PageProps {
  cmsData: {
    page: GhostPostOrPage
    settings: GhostSettings
    seoImage: ISeoImage
    bodyClass: string
  }
}

export const Page = ({ cmsData }: PageProps) => {
  const { page, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = page
  const { nextImages } = settings.processEnv

  const featImg = page.featureImage
  const postClass = PostClass({
    tags: page.tags,
    isPage: page && true,
    isImage: !!featImg
  })
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error('Page.tsx: htmlAst must be defined.')

  return (
    <>
      <SEO {...{ settings, meta_title, meta_description, seoImage }} />
      <Layout
        {...{ settings, bodyClass }}
        header={<Header {...{ settings }} />}
      >
        <div className="inner">
          <div className="grid-wrapper">
            <article className={`post-full grid-inner ${postClass}`}>
              <header className="post-full-header">
                <Heading.One noMargin>{page.title}</Heading.One>
              </header>

              {featImg &&
                (nextImages.feature && featImg.dimensions ? (
                  <figure
                    className="post-full-image"
                    style={{ display: 'inherit' }}
                  >
                    <Image
                      src={featImg.url}
                      alt={page.title}
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
                  page.feature_image && (
                    <figure className="post-full-image">
                      <img src={page.feature_image} alt={page.title} />
                    </figure>
                  )
                ))}

              {/* The main page content */}
              <RenderContent htmlAst={htmlAst} />
            </article>
          </div>
        </div>
      </Layout>
    </>
  )
}
