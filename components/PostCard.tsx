/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import { GridWrapper, Row, Col } from '@components/Grid'
import { readingTime as readingTimeHelper } from '@lib/readingTime'
import { resolveUrl } from '@utils/routing'
import { getLang, get } from '@utils/use-lang'

// import { AuthorList } from '@components/AuthorList'
import { PostClass } from '@helpers/PostClass'
import { collections } from '@lib/collections'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

interface PostCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
  isHome?: boolean
}

export const PostCard = ({ settings, post, num, isHome }: PostCardProps) => {
  const { nextImages } = settings.processEnv
  const text = get(getLang(settings.lang))
  const cmsUrl = settings.url
  const collectionPath = collections.getCollectionByNode(post)
  const url = resolveUrl({ cmsUrl, collectionPath, slug: post.slug, url: post.url })
  const featImg = post.featureImage
  const readingTime = readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const large = (num !== undefined && num < 1 && `post-card-large`) || ``
  const isFirstPost = (num !== undefined && num < 1)
  const authors = post?.authors?.filter((_, i) => (i < 2 ? true : false))

  if (isFirstPost) {
    return (
      <article className={`${postClass} ${large}`}>
        <GridWrapper>
          <Row>
          <Col xs={12} lg={5}>
          {featImg && (
              <Link href={url}>
                <a className="post-card-image-link" aria-label={post.title}>
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
                </a>
              </Link>
          )}
          </Col>
          <Col xs={12} lg={7}  padding="20px">
            <div className="post-card-content">
              <Link href={url}>
                <a className="post-card-content-link">
                  <header className="post-card-header">
                    {post.primary_tag && <div className="post-card-primary-tag">{post.primary_tag.name}</div>}
                    <h2 className="post-card-title">{post.title}</h2>
                  </header>
                  <section className="post-card-excerpt">
                    {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
                    <p>{post.excerpt}</p>
                  </section>
                </a>
              </Link>

              <footer className="post-card-meta">
                {/* <AuthorList {...{ settings, authors: post.authors }} /> */}
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
                <a href={url} className="btn btn-inverted btn-cta">Keep Reading</a>
              </footer>
            </div>    
            </Col>
            </Row>
            </GridWrapper> 
      </article>
    )
  }

  return (
    <article className={`${postClass} ${large}`} style={{ padding: "0px 20px 40px 0px"}}>
      {featImg && (
        <Link href={url}>
          <a className="post-card-image-link" aria-label={post.title}>
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
          </a>
        </Link>
      )}

      {post.primary_tag && <div><div className="post-card-primary-tag">{post.primary_tag.name}</div></div>}

      <div className="post-card-content">
        <Link href={url}>
          <a className="post-card-content-link">
            <header className="post-card-header">
              <h2 className="post-card-title">{post.title}</h2>
            </header>
            <section className="post-card-excerpt">
              {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
              <p>{post.excerpt}</p>
            </section>
          </a>
        </Link>

        <footer className="post-card-meta">
          {/* <AuthorList {...{ settings, authors: post.authors }} /> */}
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
          <a href={url} className="btn btn-cta">Keep Reading</a>
        </footer>
      </div>
    </article>
  )
}
