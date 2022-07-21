import { GhostSettings } from '@lib/ghost'

import { Grid } from '@components/Grid'
import { SiteNav } from '@components/SiteNav'
import { Heading } from '@components/typography/Headings'
import { Subheading } from '@components/typography/Subheadings'

import { StyledHeader, StyledHeaderContent } from './components'

interface HeaderProps {
  settings: GhostSettings
  isHome?: boolean
  isCareersPage?: boolean
  content?: {
    title?: string
    description?: string
  }
}

export const Header = ({
  settings,
  isHome,
  isCareersPage,
  content
}: HeaderProps) => (
  <StyledHeader>
    <SiteNav {...{ settings, isCareersPage }} />
    {content && (
      <div className="grid-wrapper">
        <Grid className="grid-inner" container>
          <Grid item xs={12} md={10} lg={8}>
            <StyledHeaderContent isHome={isHome}>
              {content.title && (
                <Heading.One responsive={isHome} noMargin>
                  {content.title}
                </Heading.One>
              )}
              {content.description && (
                <Subheading.Two>{content.description}</Subheading.Two>
              )}
            </StyledHeaderContent>
          </Grid>
        </Grid>
      </div>
    )}
  </StyledHeader>
)
