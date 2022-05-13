import styled from '@emotion/styled'

import { colors, Colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'

/**
 *
 * Heading1: Primary headlines (ie. header headlines)
 * Heading2: Secondary headlines (ie. post card headlines)
 * Heading3: Tertiary headline (ie. full post content headline h2)
 * Heading4: Full post content headline (h3 & h4)
 * Heading5: Full post content headline (h5 & h6)
 */
export interface HeadingProps {
  responsive?: boolean
  $color?: Colors
  noMargin?: boolean
}

type BaseHeadingOrder = 1 | 2 | 3 | 4 | 5
type CallToActionHeadingOrder = 11 | 12
type HeadingOrder = BaseHeadingOrder | CallToActionHeadingOrder

export const mapHeadingOrderToStyles = ({ order, responsive, noMargin, $color }: HeadingProps & { order: HeadingOrder }) => {
  switch (order) {
    case 1:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.sm}px;` : ``}
        font-size: 6rem;
        line-height: 6.8rem;
        font-weight: 300;

        ${
          responsive
            ? `
          @media (max-width: 800px) {
            font-size: 3.6rem;
            line-height: 4.4rem;
          }
        `
            : ``
        }

        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 2:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.sm}px;` : ``}
        font-size: 3.6rem;
        line-height: 4.4rem;
        font-weight: 300;

        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 3:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.xs}px;` : ``}
        font-size: 3.2rem;
        line-height: 1.25em;
        font-weight: 600;

        ${
          responsive
            ? `
          @media (max-width: 800px) {
            font-size: 2.8rem;
          }
      `
            : ``
        }

      color: ${$color ? colors[$color] : colors.onyx};
      `
    case 4:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.xs}px;` : ``}
        font-size: 2.5rem;
        line-height: 1.3em;
        font-weight: 600;

        ${
          responsive
            ? `
          @media (max-width: 800px) {
            font-size: 2.4rem;
          }
        `
            : ``
        }

        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 5:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.xs}px;` : ``}
        font-size: 2rem;
        line-height: 1.4em;
        font-weight: 700;

        ${
          responsive
            ? `
          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
        `
            : ``
        }

        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 11:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.xxxs}px;` : ``}
        font-size: 5.2rem;
        line-height: 1.15em;
        font-weight: 400;
        text-transform: uppercase;

        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 12:
      return `
        ${!noMargin ? `margin: 0 0 ${spaces.xxxs}px;` : ``}
        font-size: 3.6rem;
        line-height: 4.4rem;
        font-weight: 400;
        text-transform: uppercase;

        color: ${$color ? colors[$color] : colors.onyx};
      `
    default:
      return ``
  }
}

type ValidHTagNumber = 1 | 2 | 3 | 4 | 5 | 6
const isValidHTagNumber = (n: number): n is ValidHTagNumber => n % 1 === 0 && 0 < n && n < 7

/**
 * Takes a heading order option and returns an integer between 1 and 6,
 * corresponding to the valid h1-h6 element tags.
*/
const getTagNumber = (order: HeadingOrder) => {
  if (0 < order && order < 99) return 1

  const remainder = order % 10;
  if (isValidHTagNumber(remainder)) return remainder

  return 1
}

const styledHeading = (order: HeadingOrder) => styled(`h${getTagNumber(order)}`)<HeadingProps>`
  ${(props) => mapHeadingOrderToStyles({ ...props, order })};
`

export const Heading = {
  One: styledHeading(1),
  Two: styledHeading(2),
  Three: styledHeading(3),
  Four: styledHeading(4),
  Five: styledHeading(5),
  CallToAction1: styledHeading(11),
  CallToAction2: styledHeading(12),
}
