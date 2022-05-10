
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'
import Link from 'next/link'
import { GhostSettings, NextImage } from '@lib/ghost';

import { colors } from '@components/common/colors';
import { spaces } from '@components/common/spaces';
import { getLang, get } from '@utils/use-lang'

const LOGO_HEIGHT = 21;

const NavLogoLink = styled.a`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: ${spaces.lg}px;
  padding: ${spaces.xs}px 0;
  color: ${colors.white};
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    display: block;
    width: auto;
    height: ${LOGO_HEIGHT}px;
  }
`;

const ImageWrapper = styled.div<{ imageWidth?: number }>`
  width: ${({imageWidth}) => imageWidth ? `${imageWidth}px` : "auto"};
`;

interface LogoLinkProps {
  settings: GhostSettings
}

const calcSiteLogoWidth = (image: NextImage) => (LOGO_HEIGHT * image.dimensions.width) / image.dimensions.height

export const LogoLink: React.FC<LogoLinkProps> = ({ settings }) => {
  const { processEnv: { nextImages }, logo, logoImage, lang, title } = settings
  const siteTitle = get(getLang(lang))(`SITE_TITLE`, title)

  const imageWidth = logoImage ? calcSiteLogoWidth(logoImage) : undefined;

  return (
    <Link href="/">
      {logoImage && nextImages.feature ? (
        <NavLogoLink>
          <ImageWrapper imageWidth={imageWidth}>
            <Image src={logoImage.url} alt={siteTitle} layout="responsive" quality={nextImages.quality} {...logoImage.dimensions} />
          </ImageWrapper>
        </NavLogoLink>
      ) : logo ? (
        <NavLogoLink>
          <img src={logo} alt={siteTitle} />
        </NavLogoLink>
      ) : (
        <NavLogoLink>{siteTitle}</NavLogoLink>
      )}
    </Link>
  )
}
