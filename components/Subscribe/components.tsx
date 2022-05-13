import styled from '@emotion/styled'
import { colors, Colors } from '@components/common/colors'

export const DescriptionLink = styled.a<{ $color?: Colors }>`
  font-size: inherit;
  font-weight: inherit;
  color: ${({ $color }) => colors[$color || 'onyx']};
  line-height: inherit;
  box-shadow: inset 0 -1px 0 ${({ $color }) => colors[$color || 'onyx']};

  &:hover {
    text-decoration: none;
  }
`
