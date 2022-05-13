import Grid from '@mui/material/Grid'

import { PostCard } from '@components/PostCard'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'
import { Heading } from '@components/typography/Headings'

interface PreviewPostsProps {
  settings: GhostSettings
  prev?: GhostPostOrPage
  next?: GhostPostOrPage
}

export const PreviewPosts = ({ settings, prev, next }: PreviewPostsProps) => {
  return (
    <aside className="read-next outer">
      <div className="inner">
        <div className="read-next-feed">
          <div className="grid-wrapper">
            <Grid className="grid-inner" container columnSpacing={{ xs: 0, md: 3 }}>
              <Grid item xs={12} md={4}>
                <Heading.Two $color="white">Up next</Heading.Two>
              </Grid>
              <Grid item xs={12} md={4}>
                {prev && prev.slug && <PostCard {...{ settings, post: prev, isColorInverted: true }} />}
              </Grid>
              <Grid item xs={12} md={4}>
                {next && next.slug && <PostCard {...{ settings, post: next, isColorInverted: true }} />}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </aside>
  )
}
