import styled from '@emotion/styled'

import { colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'
import { Button } from '@components/Button'
import { Copy } from '@components/typography/Copy'

export const Filters = styled.div`
  display: flex;
  margin-bottom: ${spaces.xxxl}px;
`

export const StyledX = styled.span`
  margin-left: ${spaces.xxs}px;
  vertical-align: middle;
  color: inherit;
`

export const FilterLabel = styled(Copy.M)`
  line-height: 2.4rem;
  padding-right: ${spaces.lg}px;
  margin: 0 ${spaces.xl}px 0 0;
  border-right: 1px solid ${colors.onyx};
`

export const FilterTagWrapper = styled.div`
  display: flex;
  grid-gap: ${spaces.sm}px;
  flex-wrap: wrap;
`

export const StyledTag = styled(Button.Tag)`
  display: flex;
`
