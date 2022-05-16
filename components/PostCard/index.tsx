/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import Grid from '@mui/material/Grid'

import { readingTime as readingTimeHelper } from '@lib/readingTime'
import { resolveUrl } from '@utils/routing'
import { getLang, get } from '@utils/use-lang'

import { PostClass } from '@helpers/PostClass'
import { collections } from '@lib/collections'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'
import { Heading } from '@components/typography/Headings'
import { PostCardTag, PostCardImageLink, PostExcerpt } from './components'
import { Button } from '@components/Button'
import { Copy } from '@components/typography/Copy'

interface PostCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
  isColorInverted?: boolean
}

export const PostCard = ({ settings, post, num, isColorInverted }: PostCardProps) => {
  const { nextImages } = settings.processEnv
  const text = get(getLang(settings.lang))
  const cmsUrl = settings.url
  const collectionPath = collections.getCollectionByNode(post)
  const url = resolveUrl({ cmsUrl, collectionPath, slug: post.slug, url: post.url })
  const featImg = post.featureImage
  const readingTime = readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const isFirstPost = num !== undefined && num < 1
  const authors = post?.authors?.filter((_, i) => (i < 2 ? true : false))
  const textColor = isFirstPost || isColorInverted ? 'white' : 'onyx'

  if (isFirstPost) {
    return (
      <article className={`post-card ${postClass} post-card-large`}>
        <Grid alignItems="center" container spacing={{ xs: 2, md: 5 }}>
          {featImg && (
            <Grid item xs={12} lg={5}>
              <Link href={url} passHref>
                <PostCardImageLink className="post-card-image-link" aria-label={post.title}>
                  {nextImages.feature ? (
                    <div className="post-card-image">
                      <Image
                        src={featImg.url}
                        alt={post.title}
                        sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                        layout="fill"
                        objectFit="cover"
                        quality={nextImages.quality}
                      />
                    </div>
                  ) : (
                    post.feature_image && <img className="post-card-image" src={post.feature_image} alt={post.title} />
                  )}
                </PostCardImageLink>
              </Link>
            </Grid>
          )}
          <Grid item xs={12} lg={7}>
            <div className="post-card-content">
              <Link href={url}>
                <a className="post-card-content-link">
                  <header>
                    {post.primary_tag && (
                      <PostCardTag small as="span">
                        {post.primary_tag.name}
                      </PostCardTag>
                    )}
                    <Heading.Two $color={textColor}>{post.title}</Heading.Two>
                  </header>
                  <section>
                    {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
                    <Copy.LG  $color={textColor}>
                      {post.excerpt}
                    </Copy.LG>
                  </section>
                </a>
              </Link>

              <footer className="post-card-meta">
                <div className="post-card-byline-content">
                  {post.authors && post.authors.length > 2 && <span>{text(`MULTIPLE_AUTHORS`)}</span>}
                  {post.authors && post.authors.length < 3 && (
                    <span>
                      {authors?.map((author, i) => (
                        <div key={i}>
                          {i > 0 ? `, ` : ``}
                          <Link href={resolveUrl({ cmsUrl, slug: author.slug, url: author.url || undefined })}>
                            <a>{author.name}</a>
                          </Link>
                        </div>
                      ))}
                    </span>
                  )}
                  <span className="post-card-byline-date">
                    <time dateTime={post.published_at || ''}>{dayjs(post.published_at || '').format('D MMM YYYY')}&nbsp;</time>
                    <span className="bull">&bull; </span> {readingTime}
                  </span>
                </div>
                <Link href={url} passHref>
                  <Button.Cta inverted as="a">
                    {text(`READ`)}
                  </Button.Cta>
                </Link>
              </footer>
            </div>
          </Grid>
        </Grid>
      </article>
    )
  }

  return (
    <article className={`post-card ${postClass}`}>
      {featImg && (
        <Link href={url} passHref>
          <PostCardImageLink className="post-card-image-link" aria-label={post.title}>
            {nextImages.feature ? (
              <div className="post-card-image">
                <Image
                  src={featImg.url}
                  alt={post.title}
                  sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                  layout="fill"
                  objectFit="cover"
                  quality={nextImages.quality}
                />
              </div>
            ) : (
              post.feature_image && <img className="post-card-image" src={post.feature_image} alt={post.title} />
            )}
          </PostCardImageLink>
        </Link>
      )}

      {post.primary_tag && (
        <div>
          <PostCardTag small as="span">
            {post.primary_tag.name}
          </PostCardTag>
        </div>
      )}

      <div className="post-card-content">
        <Link href={url}>
          <a className="post-card-content-link">
            <header>
              <Heading.Two $color={textColor}>{post.title}</Heading.Two>
            </header>
            <section>
              {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
              <PostExcerpt $color={textColor}>{post.excerpt}</PostExcerpt>
            </section>
          </a>
        </Link>

        <footer className="post-card-meta">
          <div className="post-card-byline-content">
            {post.authors && post.authors.length > 2 && <span>{text(`MULTIPLE_AUTHORS`)}</span>}
            {post.authors && post.authors.length < 3 && (
              <span>
                {authors?.map((author, i) => (
                  <div key={i}>
                    {i > 0 ? `, ` : ``}
                    <Link href={resolveUrl({ cmsUrl, slug: author.slug, url: author.url || undefined })}>
                      <a>{author.name}</a>
                    </Link>
                  </div>
                ))}
              </span>
            )}
            <span className="post-card-byline-date">
              <time dateTime={post.published_at || ''}>{dayjs(post.published_at || '').format('D MMM YYYY')}&nbsp;</time>
              <span className="bull">&bull; </span> {readingTime}
            </span>
          </div>
          <Link href={url} passHref>
            <Button.Cta as="a" inverted={isColorInverted}>{text(`READ`)}</Button.Cta>
          </Link>
        </footer>
      </div>
    </article>
  )
}
