import Grid from '@mui/material/Grid'

import { GhostSettings } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { SubscribeHeadline2 } from './components'
import { SubscribeForm } from './form';


export const Subscribe = ({ settings }: { settings: GhostSettings }) => {
  const text = get(getLang(settings.lang))

  return (
    <div className="subscribe-form">
      <section className="inner">
        <div className="grid-wrapper">
          <Grid alignItems="center" className="grid-inner" container justifyContent="space-between">
            <Grid item xs={12} md={3}>
              <SubscribeHeadline2 as="h3" >
                STAY UP TO DATE
              </SubscribeHeadline2>
              <p className="subscribe-form-description">{text(`SUBSCRIBE_OVERLAY`)}</p>
              <p className="subscribe-form-description">See the DEPT® <a href="https://www.deptagency.com/en-us/terms-conditions/" rel="noreferrer" target="_blank">Terms &amp; Conditions</a></p>
            </Grid>
            <Grid item xs={12} md={7}>
              <SubscribeForm {...{ settings }} />
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  )
}
