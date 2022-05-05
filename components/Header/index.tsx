
import { SiteNav } from '@components/SiteNav'
import { Headline } from '@components/text/Headlines'
import { GhostSettings } from '@lib/ghost'
import { Grid } from '@mui/material'
import { StyledHeader } from './components'


interface HeaderProps {
  settings: GhostSettings,
  isHome?: boolean,
  content?: {
    title?: string,
    description?: string
  }
}

/**
 * The beginnings of a fancy new header component
 *
 * Index - H1 (responsive)
 * Author - H1 (name) & "a collection of x posts"
 * Page - H1
 * Post - nav only
 * Tag - H1 (tag) & "a collection of x posts"
*/
export const Header = ({ settings, isHome, content }: HeaderProps) => (
  <StyledHeader>
    <SiteNav {...{ settings }} />
    {content && (
      <div className="grid-wrapper">
        <Grid className="grid-inner" container>
          <Grid item xs={12} md={10} lg={8}>
            {content.title && (
              <Headline order={0} responsive={isHome}>{content.title}</Headline>
            )}
            {content.description && (
              <Headline order={2} as="h2" color="gray">{content.description}</Headline>
            )}
          </Grid>
        </Grid>
      </div>
    )}
  </StyledHeader>
)

