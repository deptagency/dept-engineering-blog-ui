import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { GhostPostOrPage, collections } from '@lib/ghost'
import { readingTime as readingTimeHelper } from '@lib/readingTime'
import { ProcessEnvProps } from '@lib/processEnv'
import { get, getLang } from '@utils/use-lang'
import { resolveUrl } from '@utils/routing'

import { Button } from '@components/Button'
import { Heading } from '@components/typography/Headings'

import {
  DateByline,
  PostCardImageLink,
  PostCardTag,
  PostExcerpt
} from './components'

interface PostCardNeoProps {
  nextImages: ProcessEnvProps['nextImages']
  post: GhostPostOrPage
  lang?: string
  cmsUrl?: string
  isFirstPost?: boolean
  isColorInverted?: boolean
}

export const PostCardNeo: React.FC<PostCardNeoProps> = ({
  nextImages,
  lang,
  cmsUrl,
  post,
  isColorInverted
}) => {
  const text = get(getLang(lang))
  const collectionPath = collections.getCollectionByNode(post)
  const url = resolveUrl({
    cmsUrl,
    collectionPath,
    slug: post.slug,
    url: post.url
  })
  const readingTime = readingTimeHelper(post).replace(
    `min read`,
    text(`MIN_READ`)
  )

  const {
    title,
    excerpt,
    featureImage,
    authors,
    published_at,
    feature_image,
    primary_tag
  } = post
  const textColor = isColorInverted ? 'white' : 'onyx'

  return (
    <article>
      {featureImage && (
        <Link href={url} passHref>
          <PostCardImageLink
            className="post-card-image-link"
            aria-label={title}
          >
            {nextImages.feature ? (
              <div className="post-card-image">
                <Image
                  src={featureImage.url}
                  alt={title}
                  sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                  layout="fill"
                  objectFit="cover"
                  quality={nextImages.quality}
                />
              </div>
            ) : (
              feature_image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="post-card-image"
                  src={feature_image}
                  alt={title}
                />
              )
            )}
          </PostCardImageLink>
        </Link>
      )}

      {primary_tag && (
        <div>
          <PostCardTag small as="span">
            {primary_tag.name}
          </PostCardTag>
        </div>
      )}

      <div className="post-card-content">
        <Link href={url}>
          <a className="post-card-content-link">
            <header>
              <Heading.Two $color={textColor}>{title}</Heading.Two>
            </header>
            <section>
              <PostExcerpt $color={textColor}>{excerpt}</PostExcerpt>
            </section>
          </a>
        </Link>

        <footer className="post-card-meta">
          <div className="post-card-byline-content">
            {authors && authors.length > 2 && (
              <span>{text(`MULTIPLE_AUTHORS`)}</span>
            )}
            {authors && authors.length < 3 && (
              <span>
                {authors?.map((author, i) => (
                  <div key={i}>
                    {i > 0 ? `, ` : ``}
                    <Link
                      href={resolveUrl({
                        cmsUrl,
                        slug: author.slug,
                        url: author.url || undefined
                      })}
                    >
                      <a>{author.name}</a>
                    </Link>
                  </div>
                ))}
              </span>
            )}

            <DateByline publishedAt={published_at} readingTime={readingTime} />
          </div>
          <Link href={url} passHref>
            <Button.Cta as="a" inverted={isColorInverted}>
              {text(`READ`)}
            </Button.Cta>
          </Link>
        </footer>
      </div>
    </article>
  )
}
