/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled'
import { CSSProperties } from 'react'

import { GhostSettings } from '@lib/ghost'
import { get, getLang } from '@utils/use-lang'

import { siteIcon } from '@meta/siteDefaults'
import { useOverlay } from '@components/contexts/overlayProvider'
import { Copy } from '@components/typography/Copy'
import { Heading } from '@components/typography/Headings'

import { SubscribeForm } from './form'
import { DescriptionLink } from './components'

const StyledSubscribeHeadline = styled(Heading.CallToAction1)`
  display: inline-block;
`

const Description = styled(Copy.LG)`
  max-width: 650px;
`

export const SubscribeOverlay = ({ settings }: { settings: GhostSettings }) => {
  const text = get(getLang(settings.lang))
  const { isOpen, handleClose } = useOverlay()

  const title = text(`SITE_TITLE`, settings.title)
  const siteLogo = settings.logo || siteIcon
  const openingStyle: CSSProperties = { opacity: 1, pointerEvents: `auto` }
  const closingStyle: CSSProperties = { opacity: 0, pointerEvents: `none` }

  return (
    <div
      className="subscribe-overlay"
      style={isOpen ? openingStyle : closingStyle}
    >
      <a className="subscribe-close-overlay" onClick={handleClose}></a>
      <a className="subscribe-close-button" onClick={handleClose}></a>
      <div className="subscribe-overlay-content">
        {siteLogo && (
          <img className="subscribe-overlay-logo" src={siteLogo} alt={title} />
        )}
        <div className="subscribe-form">
          <StyledSubscribeHeadline $color="white">
            STAY UP TO DATE
          </StyledSubscribeHeadline>
          <Description $color="white">{text(`SUBSCRIBE_OVERLAY`)}</Description>
          <Description $color="white">
            See the DEPT®{' '}
            <DescriptionLink
              href="https://www.deptagency.com/en-us/terms-conditions/"
              rel="noreferrer"
              target="_blank"
              $color="white"
            >
              Terms &amp; Conditions
            </DescriptionLink>
          </Description>
          <SubscribeForm {...{ settings }} />
        </div>
      </div>
    </div>
  )
}
