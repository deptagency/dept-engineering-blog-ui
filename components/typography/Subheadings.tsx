import styled from '@emotion/styled'
import { colors, Colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'

/**
 * Subheading1: Primary subheading (ie. post exerpt)
 * Subheading2: Secondary subheading
 */

export interface SubheadingProps {
  $color?: Colors
  noMargin?: boolean
}

type SubheadingOrder = 1 | 2

const mapSubheadingOrderToStyles = ({ order, noMargin, $color }: SubheadingProps & { order: SubheadingOrder }) => {
  switch (order) {
    case 1:
      return `
        ${!noMargin ? `margin: ${spaces.md}px 0 0 0;` : ``}
        font-size: 2.3rem;
        line-height: 1.4em;
        font-weight: 300;
        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 2:
      return `
        ${!noMargin ? `margin: ${spaces.xxxs}px 0 0 0;` : ``}
        font-size: 2.1rem;
        line-height: 1.4em;
        font-weight: 400;
        color: ${$color ? colors[$color] : colors.onyx};
      `
    default:
      return ``
  }
}

const styledSubheading = (order: SubheadingOrder) => styled.h2<SubheadingProps>`
  ${(props) => mapSubheadingOrderToStyles({ ...props, order })};
`

export const Subheading = {
  One: styledSubheading(1),
  Two: styledSubheading(2)
}
