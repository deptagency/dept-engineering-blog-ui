import styled from '@emotion/styled'

import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import { Grid } from '@components/Grid'
import { spaces } from '@components/common/spaces'
import { colors } from '@components/common/colors'
import { PostCard } from '@components/PostCard'

interface FirstPostItemProps {
  settings: GhostSettings
  post: GhostPostOrPage
  isHome?: boolean
}

const FirstPostWrapper = styled.div`
  width: 100%;
  margin-bottom: ${spaces.xxxl}px;
  background: ${colors.onyx};
`

export const FirstPost = ({ settings, post }: FirstPostItemProps) => (
  <FirstPostWrapper>
    <div className="grid-wrapper">
      <Grid className="grid-inner" container>
        <Grid item xs={12}>
          <PostCard
            key={1}
            {...{ settings, post, isFirstPost: true, isColorInverted: true }}
          />
        </Grid>
      </Grid>
    </div>
  </FirstPostWrapper>
)
