import { spaces } from '@components/common/spaces'

/*
  The "fluid-width-video-wrapper" class is not always (never?) present on the embed cards added via the editor.
    We keep the selectors with ".fluid-width-video-wrapper" so we can manually elect to use these rules via raw HTML cards.
*/
export const figureEmbedVideoStyles = `
  figure.fluid-width-video-wrapper,
  figure:has(> iframe[src^="https://www.youtube.com"]),
  figure:has(> iframe[src^="https://player.vimeo.com"])
  {
    margin-bottom: ${spaces.md}px;
  }

  figure.fluid-width-video-wrapper iframe,
  figure.fluid-width-video-wrapper object,
  figure.fluid-width-video-wrapper embed,
  figure > iframe[src^="https://www.youtube.com"],
  figure > iframe[src^="https://player.vimeo.com"]
  {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`

export const figureCaptionStyles = `
  figure > figcaption {
    margin-top: ${spaces.xxs}px;
    text-align: center;
    font-style: italic;
  }
`
