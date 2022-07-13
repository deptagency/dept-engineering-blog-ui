import styled from '@emotion/styled'

import {
  BREAKPOINT,
  BREAKPOINTS,
  NUM_TOTAL_GRID_COLUMNS
} from '@components/common/spaces'

import { GridProps } from './Grid.model'

const getMediaQueryLabel = (breakpoint: BREAKPOINT) =>
  `@media (min-width: ${BREAKPOINTS[breakpoint]}px)`

const getFlexBasis = (numColumns: number) =>
  (numColumns / NUM_TOTAL_GRID_COLUMNS) * 100

const getMediaQueriesWithFlexBasis = (
  numColumnsByBreakpoint: Partial<Record<BREAKPOINT, number>>
) => {
  let queries = ''

  let breakpoint: BREAKPOINT
  for (breakpoint in BREAKPOINTS) {
    const numColumns = numColumnsByBreakpoint[breakpoint]
    if (numColumns) {
      queries += `
      ${getMediaQueryLabel(breakpoint)} {
        flex: 0 0 ${getFlexBasis(numColumns)}%
      }`
    }
  }

  return queries
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

  return `${baseStyles}${getMediaQueriesWithFlexBasis(props)}`
})
