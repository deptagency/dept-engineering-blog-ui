import Grid from '@mui/material/Grid'

import { Tag } from '@tryghost/content-api'
import { GhostSettings } from '@lib/ghost'
import { SiteNav } from '@components/Site-Nav'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'

interface HeaderTagProps {
  settings: GhostSettings
  tag: Tag
}

/**
 * Delete me
*/

export const HeaderTag = ({ settings, tag }: HeaderTagProps) => {
  const text = get(getLang(settings.lang))
  const featureImg = tag.feature_image || ''
  const numberOfPosts = tag.count?.posts

  return (
    <header className="site-archive-header">
      <SiteNav {...{ settings }} />

      <HeaderBackground srcImg={featureImg}>
        <div className="inner site-header-content">
          <Grid className="grid-inner" container columnSpacing={{ xs: 0, md: 3 }}>
            <Grid item xs={12}>
              <h1 className="site-title">{tag.name}</h1>
              <h2 className="site-description">
                {tag.description ||
                  `${text(`A_COLLECTION_OF`)} ${(numberOfPosts && numberOfPosts > 0 && (numberOfPosts === 1 ? `1 ${text(`POST`)}` : `${numberOfPosts} ${text(`POSTS`)}`)) || `${text(`POSTS`)}`
                  }`}
              </h2>
            </Grid>
          </Grid>
        </div>
      </HeaderBackground>
    </header>
  )
}
