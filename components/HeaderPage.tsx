import { GhostSettings } from '@lib/ghost'
import { SiteNav } from '@components/SiteNav'

interface HeaderPageProps {
  settings: GhostSettings
}

/**
 * Delete me
*/


export const HeaderPage = ({ settings }: HeaderPageProps) => (
  <header className="site-header">
    <SiteNav {...{ settings }} />
  </header>
)
