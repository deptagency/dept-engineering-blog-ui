import styled from '@emotion/styled'
import { colors, Colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'
import { DEFAULT_COPY_STYLES } from '@components/common/typography'

interface CopyProps {
  $color?: Colors
}

type CopyOrder = 'sm' | 'xs'

const mapCopyOrderToStyles = ({ order, $color }: CopyProps & { order?: CopyOrder }) => {
  switch (order) {
    case 'xs':
      return `
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.6em;
      color: ${$color ? colors[$color] : colors.midgrey};
      `
    case 'sm':
      return `
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.6em;
        color: ${$color ? colors[$color] : colors.midgrey};
      `
    default:
      return `
        ${DEFAULT_COPY_STYLES}
        color: ${$color ? colors[$color] : colors.midgrey};
      `
  }
}

export const Copy = styled.p<CopyProps>`
  margin: 0 0 ${spaces.md}px;
  ${(props) => mapCopyOrderToStyles({...props})}
`

export const CopyS = styled.p<CopyProps>`
  margin: 0 0 ${spaces.md}px;
  ${(props) => mapCopyOrderToStyles({ ...props, order: 'sm' })}
`

export const CopyXS = styled.p<CopyProps>`
  margin: 0 0 ${spaces.md}px;
  ${(props) => mapCopyOrderToStyles({ ...props, order: 'xs' })}
`
