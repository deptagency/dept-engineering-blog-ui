
import { SiteNav } from '@components/SiteNav'
import { Heading1 } from '@components/typography/Headings'
import { Subheading2 } from '@components/typography/Subheadings'
import { GhostSettings } from '@lib/ghost'
import { Grid } from '@mui/material'
import { StyledHeader, StyledHeaderContent } from './components'

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
                <Heading1 responsive={isHome} noSpaces>{content.title}</Heading1>
              )}
              {content.description && (
                <Subheading2>{content.description}</Subheading2>
              )}
              </StyledHeaderContent>
          </Grid>
        </Grid>
      </div>
    )}
  </StyledHeader>
)

