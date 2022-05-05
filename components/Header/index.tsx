
import { SiteNav } from '@components/SiteNav'
import { GhostSettings } from '@lib/ghost'
import { Grid } from '@mui/material'
import { StyledHeader } from './components'


interface HeaderProps {
  settings: GhostSettings
}

/**
 * The beginnings of a fancy new header component
 *
 * Index - H1
 * Author - H1 (name) & "a collection of x posts"
 * Page - H1
 * Post - nav only
 * Tag - H1 (tag) & "a collection of x posts"
*/
export const Header = ({ settings }: HeaderProps) => {

  return (
    <StyledHeader>
      <SiteNav {...{ settings }} />
      <div className="grid-wrapper">
        <Grid className="grid-inner" container>
          <Grid item xs={12} md={10} lg={8}>
            <h1>{settings.title}</h1>
            <h2>{settings.description}</h2>
          </Grid>
        </Grid>
      </div>
    </StyledHeader>
  )
}
