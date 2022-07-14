/**
 * A place for collecting and simplifying the pixel values used.
 */
export const MAX_WIDTH = 1440

/**
 * The values for a spatial system based on 8px unit.
 */
export const spaces = {
  none: 0,
  xxxs: 4,
  xxs: 8,
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 64,
  xxxl: 80,
  xxxxl: 120
}

/**
 * Total number of available columns in a grid
 */
export const NUM_TOTAL_GRID_COLUMNS = 12

/**
 * Number of pixels (px) per grid spacing unit
 */
export const GRID_SPACING_PX_UNIT = 8

/**
 * Possible breakpoint values
 */
export type BREAKPOINT = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Breakpoint definitions based on the default breakpoints from Material UI: https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
 *  * Note that the "xl" breakpoint is equal to MAX_WIDTH instead of the default value of 1536px
 */
export const BREAKPOINTS: Record<BREAKPOINT, number> = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: MAX_WIDTH
}
