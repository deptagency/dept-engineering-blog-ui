/* eslint-disable @next/next/no-img-element */
import { CSSProperties } from 'react'

import styled from '@emotion/styled';

import { useOverlay } from '@components/contexts/overlayProvider'
import { GhostSettings } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { siteIcon } from '@meta/siteDefaults'

import { SubscribeForm } from '@components/Subscribe/form'
import { SubscribeHeadline } from './components'
import { spaces } from '@components/common/spaces';

const StyledSubscribeHeadline = styled(SubscribeHeadline)`
  display: inline-block;
  margin: 0 0 ${spaces.xs}px;
`;

export const SubscribeOverlay = ({ settings }: { settings: GhostSettings }) => {
  const text = get(getLang(settings.lang))
  const { isOpen, handleClose } = useOverlay()

  const title = text(`SITE_TITLE`, settings.title)
  const siteLogo = settings.logo || siteIcon
  const openingStyle: CSSProperties = { opacity: 1, pointerEvents: `auto` }
  const closingStyle: CSSProperties = { opacity: 0, pointerEvents: `none` }

  return (
    <div className="subscribe-overlay" style={isOpen ? openingStyle : closingStyle}>
      <a className="subscribe-close-overlay" onClick={handleClose}></a>
      <a className="subscribe-close-button" onClick={handleClose}></a>
      <div className="subscribe-overlay-content">
        {siteLogo && <img className="subscribe-overlay-logo" src={siteLogo} alt={title} />}
        <div className="subscribe-form">
          <StyledSubscribeHeadline color="white">
            STAY UP TO DATE
          </StyledSubscribeHeadline>
          <p className="subscribe-overlay-description">{text(`SUBSCRIBE_OVERLAY`)}</p>
          <p className="subscribe-overlay-description">See the DEPT® <a href="https://www.deptagency.com/en-us/terms-conditions/" rel="noreferrer" target="_blank">Terms &amp; Conditions</a></p>
          <SubscribeForm {...{ settings }} />
        </div>
      </div>
    </div>
  )
}
