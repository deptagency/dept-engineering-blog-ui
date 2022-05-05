
import { SiteNav } from '@components/SiteNav'
import { Headline } from '@components/text/Headlines'
import { GhostSettings } from '@lib/ghost'
import { Grid } from '@mui/material'
import { StyledHeader, StyledHeaderContent, StyledSubHeadline } from './components'
interface HeaderProps {
  settings: GhostSettings,
  isHome?: boolean,
  content?: {
    title?: string,
    description?: string
  }
}

export const Header = ({ settings, isHome, content }: HeaderProps) => (
  <StyledHeader>
    <SiteNav {...{ settings }} />
    {content && (
      <div className="grid-wrapper">
        <Grid className="grid-inner" container>
          <Grid item xs={12} md={10} lg={8}>
            <StyledHeaderContent isHome={isHome}>
              {content.title && (
                <Headline order={0} responsive={isHome}>{content.title}</Headline>
              )}
              {content.description && (
                <StyledSubHeadline order={2} as="h2" color="gray">{content.description}</StyledSubHeadline>
              )}
              </ StyledHeaderContent>
          </Grid>
        </Grid>
      </div>
    )}
  </StyledHeader>
)

