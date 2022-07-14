import { BREAKPOINT } from '@components/common/spaces'

export type GridFlexBasis = number | 'auto'
export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type GridBaseAlignment = 'flex-start' | 'flex-end' | 'center'
export type GridJustifyContent =
  | GridBaseAlignment
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type GridAlignItems = GridBaseAlignment | 'baseline' | 'stretch'

export type GridSpacing = number | Partial<Record<BREAKPOINT, number>>

export interface GridProps extends Partial<Record<BREAKPOINT, GridFlexBasis>> {
  container?: boolean
  item?: boolean
  wrap?: GridWrap
  direction?: GridDirection
  justifyContent?: GridJustifyContent
  alignItems?: GridAlignItems
  spacing?: GridSpacing
  rowSpacing?: GridSpacing
  columnSpacing?: GridSpacing
  zeroMinWidth?: boolean
}
