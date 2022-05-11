import Grid from '@mui/material/Grid';
import { GridWrapper, Row, Col } from '@components/Grid'

import { PostCard } from '@components/PostCard'

import { Tag } from '@tryghost/content-api'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'

interface PreviewPostsProps {
  settings: GhostSettings
  primaryTag?: Tag | null
  posts?: GhostPostsOrPages
  prev?: GhostPostOrPage
  next?: GhostPostOrPage
}

export const PreviewPosts = ({ settings, primaryTag, posts, prev, next }: PreviewPostsProps) => {
  return (
    <aside className="read-next outer">
      <div className="inner">
        <div className="read-next-feed">
          <GridWrapper>
            <Row>
              <Col xs={12} md={4}>
                <h2 className="up-next-header">Up next</h2>
              </Col>
              <Col xs={12} md={4}>
                {prev && prev.slug && <PostCard {...{ settings, post: prev }} />}
              </Col>
              <Col xs={12} md={4}>
                {next && next.slug && <PostCard {...{ settings, post: next }} />}
              </Col>
              </Row>
            </GridWrapper>
        </div>
      </div>
    </aside>
  )
}
