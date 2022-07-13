import { BREAKPOINT } from '@components/common/spaces'

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type GridBaseAlignment = 'flex-start' | 'flex-end' | 'center'
export type GridJustifyContent =
  | GridBaseAlignment
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type GridAlignItems = GridBaseAlignment | 'baseline' | 'stretch'

export interface GridProps extends Partial<Record<BREAKPOINT, number>> {
  container?: boolean
  item?: boolean
  wrap?: GridWrap
  direction?: GridDirection
  justifyContent?: GridJustifyContent
  alignItems?: GridAlignItems
  zeroMinWidth?: boolean
}
