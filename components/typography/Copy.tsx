import styled from '@emotion/styled'
import { colors, Colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'
import { DEFAULT_COPY_STYLES } from '@components/common/typography'

export interface CopyProps {
  $color?: Colors
}

type CopyOrder = 'sm' | 'xs' | 'lg'

const mapCopyOrderToStyles = ({
  order,
  $color
}: CopyProps & { order?: CopyOrder }) => {
  switch (order) {
    case 'xs':
      return `
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.6em;
      color: ${$color ? colors[$color] : colors.darkmidgrey};
      `
    case 'sm':
      return `
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.6em;
        color: ${$color ? colors[$color] : colors.darkmidgrey};
      `
    case 'lg':
      return `
        font-size: 2.4rem;
        line-height: 1.3em;
        font-weight: 300;
        color: ${$color ? colors[$color] : colors.darkmidgrey};
      `
    default:
      return `
        ${DEFAULT_COPY_STYLES}
        color: ${$color ? colors[$color] : colors.darkmidgrey};
      `
  }
}

const styledCopy = (order?: CopyOrder) => styled.p<CopyProps>`
  margin: 0 0 ${spaces.md}px;
  ${(props) => mapCopyOrderToStyles({ ...props, order })};
`

export const Copy = {
  XS: styledCopy('xs'),
  SM: styledCopy('sm'),
  M: styledCopy(),
  LG: styledCopy('lg')
}
