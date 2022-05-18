/* eslint-disable ordered-imports/ordered-imports */
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { PostOrPage } from '@tryghost/content-api'

import { Copy } from '@components/typography/Copy'
import { Button } from '@components/Button'
import { spaces } from '@components/common/spaces'

export const PostExcerpt = styled(Copy.M)`
  line-height: 2.4rem;
`

export const PostCardTag = styled(Button.Tag)`
  margin-bottom: ${spaces.sm}px;
`

export const PostCardImageLink = styled.a`
  margin-bottom: ${spaces.md}px;
`

interface DateBylineProps {
  publishedAt: PostOrPage['published_at']
  readingTime: string
}

export const DateByline: React.FC<DateBylineProps> = ({
  publishedAt,
  readingTime
}) => {
  return (
    <span className="post-card-byline-date">
      {publishedAt && (
        <time dateTime={publishedAt}>
          {dayjs(publishedAt).format('D MMM YYYY')}&nbsp;
        </time>
      )}
      <span className="bull">&bull; </span> {readingTime}
    </span>
  )
}
