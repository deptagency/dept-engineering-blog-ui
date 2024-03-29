import Link from 'next/link'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { Author } from '@tryghost/content-api'

import { resolveUrl } from '@utils/routing'
import { readingTime as readingTimeHelper } from '@lib/readingTime'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'
import { get, getLang } from '@utils/use-lang'

import { spaces } from '@components/common/spaces'
import { Copy } from '@components/typography/Copy'

interface PostBylineProps {
  post: GhostPostOrPage
  settings: GhostSettings
  maxAuthorCount?: number
  isColorInverted?: boolean
}

const BylineContent = styled.div`
  margin: ${spaces.xxxs}px 0 ${spaces.sm}px 0;
`

const StyledBull = styled.span`
  margin: 0 ${spaces.xxxs}px;
`

const StyledCopy = styled(Copy.SM)`
  text-transform: uppercase;
`
const BylineAuthor = styled(Copy.SM)`
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  line-height: inherit;

  &:hover {
    cursor: pointer;
  }
`
const AuthorsList = styled(Copy.SM)`
  display: flex;
  margin: 0;
`
const AuthorListItem = styled.span`
  line-height: 1.2em;
  color: inherit;
`

dayjs.extend(utc)
dayjs.extend(timezone)

const resolveAuthors = (
  authors?: Author[],
  cmsUrl?: string,
  maxAuthorCount: number = 2
) =>
  authors &&
  authors
    .filter((_, i) => i < maxAuthorCount)
    .map((author) => ({
      ...author,
      url: resolveUrl({
        cmsUrl,
        slug: author.slug,
        url: author.url || undefined
      })
    }))

export const PostByline: React.FC<PostBylineProps> = ({
  post,
  settings,
  maxAuthorCount = 2,
  isColorInverted
}) => {
  const text = get(getLang(settings.lang))

  const readingTime = readingTimeHelper(post).replace(
    `min read`,
    text(`MIN_READ`)
  )

  const authors = resolveAuthors(post?.authors, settings.url, maxAuthorCount)
  const publishedAt = dayjs(post.published_at || '')
    .tz('America/New_York')
    .format('D MMM YYYY')
  const textColor = isColorInverted ? 'white' : 'black'

  return (
    <BylineContent>
      {authors && authors.length > 1 && (
        <Copy.SM as="span" $color={textColor}>
          {text(`MULTIPLE_AUTHORS`)}
        </Copy.SM>
      )}
      {authors && (
        <AuthorsList as="span" $color={textColor}>
          {authors.map((author, i) => (
            <AuthorListItem key={i}>
              {i > 0 && `, `}
              <Link href={author.url} passHref legacyBehavior>
                <BylineAuthor as="a" $color={textColor}>
                  {author.name}
                </BylineAuthor>
              </Link>
            </AuthorListItem>
          ))}
        </AuthorsList>
      )}
      <span>
        <time dateTime={post.published_at || ''}>
          <StyledCopy as="span" $color={textColor}>
            {publishedAt}
          </StyledCopy>
        </time>
        <StyledBull>&bull; </StyledBull>
        <StyledCopy as="span" $color={textColor}>
          {readingTime}
        </StyledCopy>
      </span>
    </BylineContent>
  )
}
