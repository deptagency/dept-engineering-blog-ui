/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import { resolveUrl } from '@utils/routing'
import { get, getLang } from '@utils/use-lang'
import { collections } from '@lib/collections'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import { Heading } from '@components/typography/Headings'
import { Button } from '@components/Button'

import {
  PostCard,
  PostCardContent,
  PostCardFooter,
  PostCardImage,
  PostCardImageLink,
  PostCardLinkAnchor,
  PostCardTag,
  PostExcerpt
} from './components'
import { PostByline } from './PostByline'

interface PostCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  isColorInverted?: boolean
  isFirstPost?: boolean
}

export const PostCardNeo = ({
  settings,
  post,
  isFirstPost,
  isColorInverted
}: PostCardProps) => {
  const {
    lang,
    processEnv: { nextImages }
  } = settings
  const {
    featureImage,
    slug,
    url,
    feature_image,
    title,
    primary_tag,
    excerpt
  } = post
  const text = get(getLang(lang))

  const collectionPath = collections.getCollectionByNode(post)
  const postUrl = resolveUrl({
    cmsUrl: settings.url,
    collectionPath,
    slug,
    url
  })

  const textColor = isColorInverted ? 'white' : 'onyx'

  return (
    <PostCard isFirstPost={isFirstPost}>
      {featureImage && (
        <Link href={postUrl} passHref>
          <PostCardImageLink aria-label={title}>
            {nextImages.feature ? (
              <PostCardImage>
                <Image
                  src={featureImage.url}
                  alt={title}
                  sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                  layout="fill"
                  objectFit="cover"
                  quality={nextImages.quality}
                />
              </PostCardImage>
            ) : (
              feature_image && (
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

      <PostCardContent>
        {primary_tag && (
          <div>
            <PostCardTag small as="span">
              {primary_tag.name}
            </PostCardTag>
          </div>
        )}
        <Link href={postUrl} passHref>
          <PostCardLinkAnchor>
            <header>
              <Heading.Two $color={textColor}>{title}</Heading.Two>
            </header>
            <section>
              <PostExcerpt $color={textColor}>{excerpt}</PostExcerpt>
            </section>
          </PostCardLinkAnchor>
        </Link>

        <PostCardFooter>
          <PostByline
            post={post}
            settings={settings}
            isColorInverted={isColorInverted}
          />
          <Link href={postUrl} passHref>
            <Button.Cta as="a" inverted={isColorInverted}>
              {text(`READ`)}
            </Button.Cta>
          </Link>
        </PostCardFooter>
      </PostCardContent>
    </PostCard>
  )
}
