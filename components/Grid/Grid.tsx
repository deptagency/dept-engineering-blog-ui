import styled from '@emotion/styled'

import {
  BREAKPOINT,
  BREAKPOINTS,
  GRID_SPACING_PX_UNIT,
  NUM_TOTAL_GRID_COLUMNS,
  getWrappedMediaQueryRule
} from '@components/common/spaces'

import { GridFlexBasis, GridProps, GridSpacing } from './Grid.model'

const getSpacingInPx = (spacing: number | undefined) =>
  spacing !== undefined ? spacing * GRID_SPACING_PX_UNIT : undefined

const getContainerWidthAndMarginOffsets = (
  rowSpacing: number | undefined,
  columnSpacing: number | undefined,
  useExplicitWidth = false
) => {
  const rowPx = getSpacingInPx(rowSpacing)
  const columnPx = getSpacingInPx(columnSpacing)

  let horizontalRules = ''
  if (columnPx) {
    horizontalRules = `width: calc(100% + ${columnPx}px);
      margin-left: ${columnPx * -1}px;`
  } else if (useExplicitWidth) {
    horizontalRules = 'width: 100%;'
  }

  const verticalRules = rowPx ? `margin-top: ${rowPx * -1}px;` : ''

  return `${horizontalRules}${verticalRules}`
}

const getAllContainerWidthAndMarginOffsets = (
  rowSpacing: GridSpacing | undefined,
  columnSpacing: GridSpacing | undefined
) => {
  let styles = getContainerWidthAndMarginOffsets(
    typeof rowSpacing === 'number' ? rowSpacing : undefined,
    typeof columnSpacing === 'number' ? columnSpacing : undefined,
    true
  )

  let breakpoint: BREAKPOINT
  for (breakpoint in BREAKPOINTS) {
    const rowSpacingForBreakpoint =
      typeof rowSpacing === 'object' ? rowSpacing[breakpoint] : undefined
    const columnSpacingForBreakpoint =
      typeof columnSpacing === 'object' ? columnSpacing[breakpoint] : undefined

    if (
      rowSpacingForBreakpoint !== undefined ||
      columnSpacingForBreakpoint !== undefined
    ) {
      styles += getWrappedMediaQueryRule(
        breakpoint,
        getContainerWidthAndMarginOffsets(
          rowSpacingForBreakpoint,
          columnSpacingForBreakpoint
        )
      )
    }
  }

  return styles
}

const getItemPadding = (
  rowSpacing: number | undefined,
  columnSpacing: number | undefined
) => {
  const rowPx = getSpacingInPx(rowSpacing)
  const columnPx = getSpacingInPx(columnSpacing)

  const horizontalPadding = columnPx ? `padding-left: ${columnPx}px;` : ''

  const verticalPadding = rowPx ? `padding-top: ${rowPx}px;` : ''

  return `${horizontalPadding}${verticalPadding}`
}

const getAllItemPadding = (
  rowSpacing: GridSpacing | undefined,
  columnSpacing: GridSpacing | undefined
) => {
  let styles = ''
  if (!rowSpacing && !columnSpacing) {
    return ''
  } else if (
    typeof rowSpacing === 'number' &&
    typeof columnSpacing === 'number'
  ) {
    styles = getItemPadding(rowSpacing, columnSpacing)
  }

  let breakpoint: BREAKPOINT
  for (breakpoint in BREAKPOINTS) {
    const rowSpacingForBreakpoint =
      typeof rowSpacing === 'object' ? rowSpacing[breakpoint] : undefined
    const columnSpacingForBreakpoint =
      typeof columnSpacing === 'object' ? columnSpacing[breakpoint] : undefined
    if (
      rowSpacingForBreakpoint !== undefined ||
      columnSpacingForBreakpoint !== undefined
    ) {
      styles += getWrappedMediaQueryRule(
        breakpoint,
        getItemPadding(rowSpacingForBreakpoint, columnSpacingForBreakpoint)
      )
    }
  }

  return `& > * {
    ${styles}
  }`
}

const getFlexBasis = (numColumns: number) =>
  Math.min((numColumns / NUM_TOTAL_GRID_COLUMNS) * 100, 100)

const getAllFlexBasisAndMaxWidthStyles = (
  numColumnsByBreakpoint: Partial<Record<BREAKPOINT, GridFlexBasis>>
) => {
  let styles = ''

  let breakpoint: BREAKPOINT
  for (breakpoint in BREAKPOINTS) {
    const numColumns = numColumnsByBreakpoint[breakpoint]
    if (numColumns) {
      const flexBasis =
        numColumns === 'auto' ? numColumns : `${getFlexBasis(numColumns)}%`
      styles += getWrappedMediaQueryRule(
        breakpoint,
        `flex-basis: ${flexBasis};
        max-width: ${flexBasis};`
      )
    }
  }

  return styles
}

export const Grid = styled.div<GridProps>((inProps: GridProps) => {
  const props: GridProps = {
    container: false,
    item: false,
    wrap: 'wrap',
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    spacing: 0,
    zeroMinWidth: false,
    ...inProps
  }

  const rowSpacing = props.rowSpacing ?? props.spacing
  const columnSpacing = props.columnSpacing ?? props.spacing

  let styles = `box-sizing: border-box;
    flex-direction: ${props.direction};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    ${props.zeroMinWidth ? 'min-width: 0;' : ''}`

  if (props.container) {
    styles += `
      display: flex;
      flex-wrap: ${props.wrap};
      
      ${getAllContainerWidthAndMarginOffsets(rowSpacing, columnSpacing)}
      
      ${getAllItemPadding(rowSpacing, columnSpacing)}`
  }
  if (props.item) {
    styles += getAllFlexBasisAndMaxWidthStyles(props)
  }

  return styles
})
