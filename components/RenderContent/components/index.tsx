import styled from '@emotion/styled'

import { spaces } from '@components/common/spaces'
import { colors } from '@components/common/colors'
import { fullBleedImageStyles, imageCaptionStyles } from './image'
import { blockquoteStyles } from './blockquote'
import { preformattedTextStyles } from './performatted-text'
import { linkStyles } from './link'
import { h1Styles, h2Styles, h3Styles, h4Styles, h5Styles } from './headings'
import { tableStyles } from './table'
import { horizontalRuleStyles } from './horizontal-rule'
import { iframeStyles } from './iframe'
import { codeStyles } from './code'

/* Using display: flex prevents margin collapse between the components. */
export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: content;

  min-width: 100%;
  min-height: 230px;

  padding: 0;

  p {
    margin: 0 0 ${spaces.md}px;
  }

  ul,
  ol,
  dl,
  pre,
  blockquote {
    margin: 0 0 ${spaces.lg}px 0;
    min-width: 100%;

    @media (max-width: 500px) {
      margin-bottom: ${spaces.md}px;
    }
  }

  ${h1Styles}
  ${h2Styles}
  ${h3Styles}
  ${h4Styles}
  ${h5Styles}

  ${blockquoteStyles}
  ${preformattedTextStyles}
  ${linkStyles}

  li {
    word-break: break-word;

    & p {
      margin: 0;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  em,
  strong {
    color: ${colors.onyx};
  }

  p {
    strong,
    b {
      font-weight: 600;
    }
  }

  small {
    display: inline-block;
    line-height: 1.6em;
  }

  img,
  video {
    display: block;
    margin: ${spaces.md}px auto;
    max-width: 1040px;
    height: auto;

    @media (max-width: 1040px) {
      width: 100%;
    }
  }

  ${fullBleedImageStyles}
  ${imageCaptionStyles}
  ${iframeStyles}

  .fluid-width-video-wrapper {
    margin: ${spaces.md}px 0 ${spaces.xxl}px;
  }

  ${horizontalRuleStyles}
  ${tableStyles}
  ${codeStyles}
`
