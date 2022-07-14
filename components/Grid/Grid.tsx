import styled from '@emotion/styled'

import {
  BREAKPOINT,
  BREAKPOINTS,
  NUM_TOTAL_GRID_COLUMNS
} from '@components/common/spaces'

import { GridFlexBasis, GridProps } from './Grid.model'

const getWrappedMediaQueryRule = (breakpoint: BREAKPOINT, rule: string) =>
  `
  @media (min-width: ${BREAKPOINTS[breakpoint]}px) {
    ${rule}
  }`

const getFlexBasis = (numColumns: number) =>
  Math.min((numColumns / NUM_TOTAL_GRID_COLUMNS) * 100, 100)

const getAllFlexBasisStyles = (
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
        `flex-basis: ${flexBasis};`
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
    zeroMinWidth: false,
    ...inProps
  }

  const baseStyles = `box-sizing: 'border-box';
    flex-direction: ${props.direction};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    ${props.zeroMinWidth ? 'min-width: 0;' : ''}`

  if (props.container) {
    return `${baseStyles}
      display: flex;
      flex-wrap: ${props.wrap};
      width: 100%;`
  }

  return `${baseStyles}
    flex-grow: 0;
    flex-shrink: 0;
    ${getAllFlexBasisStyles(props)}`
})
