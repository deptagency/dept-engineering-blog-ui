import Grid from '@mui/material/Grid'

import { SiteNav } from '@components/Site-Nav'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'

import { GhostAuthor, GhostSettings } from '@lib/ghost'

interface HeaderAuthorProps {
  settings: GhostSettings
  author: GhostAuthor
}

/**
 * Delete me
*/

export const HeaderAuthor = ({ settings, author }: HeaderAuthorProps) => {
  const text = get(getLang(settings.lang))

  const coverImg = author.cover_image || ''

  const numberOfPosts = author.count?.posts

  return (
    <header className="site-archive-header">

      <SiteNav {...{ settings }} />

      <HeaderBackground srcImg={coverImg}>
        <div className="inner">
          <Grid className="grid-inner" container columnSpacing={{ xs: 0, md: 3 }}>
            <Grid item xs={12}>
              <div className="site-header-content author-header">
                <div className="author-header-content">
                  <h1 className="site-title">{author.name}</h1>
                  <h2 className="site-description">
                    {`${text(`A_COLLECTION_OF`)} ${(numberOfPosts && numberOfPosts > 0 && (numberOfPosts === 1 ? `1 ${text(`POST`)}` : `${numberOfPosts} ${text(`POSTS`)}`)) || `${text(`POSTS`)}`
                      }`}
                  </h2>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </HeaderBackground>
    </header>
  )
}
