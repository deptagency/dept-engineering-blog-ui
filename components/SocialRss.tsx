import { resolve } from 'url'

import { RssIcon } from '@icons/RssIcon'

interface SocialRssProps {
  siteUrl: string
}

export const SocialRss = ({ siteUrl }: SocialRssProps) => (
  <a
    className="rss-button"
    href={`https://feedly.com/i/subscription/feed/${resolve(
      siteUrl,
      'rss.xml'
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    title="Rss"
  >
    <RssIcon />
  </a>
)
