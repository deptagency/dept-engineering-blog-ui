import { GhostSettings } from 'lib/ghost'
import { SiteNav } from '@components/SiteNav'

interface HeaderPostProps {
  settings: GhostSettings,
  title?: string
}

export const HeaderPost = ({ settings, title }: HeaderPostProps) => (
  <header className="site-header" >
    <div className="outer site-nav-main">
      <div className="inner">
        <SiteNav {...{ settings }} className="site-nav" postTitle={title} />
      </div>
    </div>
  </header>
)
