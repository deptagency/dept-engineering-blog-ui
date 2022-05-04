import { GhostSettings } from 'lib/ghost'
import { SiteNav } from '@components/Site-Nav'

interface HeaderPostProps {
  settings: GhostSettings,
  title?: string
}

/**
 * Delete me
*/


export const HeaderPost = ({ settings, title }: HeaderPostProps) => (
  <header className="site-header" >
    <SiteNav {...{ settings }} />
  </header>
)
