import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

import { GhostSettings } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { Copy } from '@components/typography/Copy'
import { spaces } from '@components/common/spaces'
import { DescriptionLink, SubscribeHeadline2 } from './components'
import { SubscribeForm } from './form'

const Description = styled(Copy)`
  margin-bottom: ${spaces.xxs}px;
`

export const Subscribe = ({ settings }: { settings: GhostSettings }) => {
  const text = get(getLang(settings.lang))

  return (
    <div className="subscribe-form">
      <section className="inner">
        <div className="grid-wrapper">
          <Grid alignItems="center" className="grid-inner" container justifyContent="space-between">
            <Grid item xs={12} md={3}>
              <SubscribeHeadline2 as="h3">STAY UP TO DATE</SubscribeHeadline2>
              <Description $color={'onyx'}>{text(`SUBSCRIBE_OVERLAY`)}</Description>
              <Description $color={'onyx'}>
                See the DEPT®{' '}
                <DescriptionLink $color="onyx" href="https://www.deptagency.com/en-us/terms-conditions/" rel="noreferrer" target="_blank">
                  Terms &amp; Conditions
                </DescriptionLink>
              </Description>
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
