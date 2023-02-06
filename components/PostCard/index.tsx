/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import { resolveUrl } from '@utils/routing'
import { get, getLang } from '@utils/use-lang'
import { collections } from '@lib/collections'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import { Heading } from '@components/typography/Headings'
import { Button } from '@components/Button'
import { Copy } from '@components/typography/Copy'

import {
  PostCardArticle,
  PostCardContent,
  PostCardFallbackImage,
  PostCardFooter,
  PostCardImage,
  PostCardImageLink,
  PostCardLinkAnchor,
  PostCardTag
} from './components'
import { PostByline } from './PostByline'

interface PostCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  isColorInverted?: boolean
  isFirstPost?: boolean
}

export const PostCard = ({
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
    <PostCardArticle isFirstPost={isFirstPost}>
      {featureImage && (
        <Link href={postUrl} passHref legacyBehavior>
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
                  priority={isFirstPost}
                />
              </PostCardImage>
            ) : (
              feature_image && (
                <PostCardFallbackImage src={feature_image} alt={title} />
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
        <Link href={postUrl} passHref legacyBehavior>
          <PostCardLinkAnchor>
            <header>
              <Heading.Two $color={textColor}>{title}</Heading.Two>
            </header>
            <section>
              {isFirstPost ? (
                <Copy.LG $color={textColor}>{excerpt}</Copy.LG>
              ) : (
                <Copy.M $color={textColor}>{excerpt}</Copy.M>
              )}
            </section>
          </PostCardLinkAnchor>
        </Link>

        <PostCardFooter>
          <PostByline
            post={post}
            settings={settings}
            isColorInverted={isColorInverted}
          />
          <Link href={postUrl} passHref legacyBehavior>
            <Button.Cta as="a" inverted={isColorInverted}>
              {text(`READ`)}
            </Button.Cta>
          </Link>
        </PostCardFooter>
      </PostCardContent>
    </PostCardArticle>
  )
}
