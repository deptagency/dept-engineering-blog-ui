import { ComponentMeta, ComponentStory } from '@storybook/react'

import { colors } from '@components/common/colors'

import { Grid } from './Grid'
import { GridProps } from './Grid.model'

// 1. Arg Types
const disabledArgType = {
  table: {
    disable: true
  }
}
const generateSelectArgType = (name: string, options: string[]) => ({
  name,
  control: { type: 'select' },
  options
})

const wrapOptions = ['wrap', 'wrap-reverse', 'nowrap']
const directionOptions = ['row', 'row-reverse', 'column', 'column-reverse']

const baseAlignments = ['flex-start', 'flex-end', 'center']
const justifyContentOptions = [
  ...baseAlignments,
  'space-between',
  'space-around',
  'space-evenly'
]
const alignItemsOptions = [...baseAlignments, 'baseline', 'stretch']

const argTypes = {
  theme: disabledArgType,
  as: disabledArgType,
  container: disabledArgType,
  item: disabledArgType,
  wrap: disabledArgType,
  wrapContainer: generateSelectArgType('Container wrap', wrapOptions),
  directionContainer: generateSelectArgType(
    'Container direction',
    directionOptions
  ),
  justifyContentContainer: generateSelectArgType(
    'Container justifyContent',
    justifyContentOptions
  ),
  alignItemsContainer: generateSelectArgType(
    'Container alignItems',
    alignItemsOptions
  ),
  zeroMinWidthContainer: {
    name: 'Container zeroMinWidth',
    control: { type: 'boolean' }
  },
  direction: generateSelectArgType('direction', directionOptions),
  justifyContent: generateSelectArgType(
    'justifyContent',
    justifyContentOptions
  ),
  alignItems: generateSelectArgType('alignItems', alignItemsOptions)
}

// 2. Container & Item CSS Styles
const containerStyles = {
  border: `3px solid ${colors.onyx}`
}
const itemStyles = {
  background: colors.yellow,
  color: colors.onyx,

  padding: '5px',
  height: '100px',
  width: '100px',

  'line-height': '100px',
  'font-weight': 'bold',
  'font-size': '2em',
  'text-align': 'center'
}

// 3. Story
export default {
  title: 'Grid',
  component: Grid,
  argTypes,
  subcomponents: { Grid }
} as ComponentMeta<typeof Grid>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Grid> = (args: Record<string, any>) => {
  const itemArgs: GridProps = {
    item: true,
    direction: args.direction,
    justifyContent: args.justifyContent,
    alignItems: args.alignItems,
    zeroMinWidth: args.zeroMinWidth,
    xs: args.xs,
    sm: args.sm,
    md: args.md,
    lg: args.lg,
    xl: args.xl
  }

  return (
    <Grid
      container
      wrap={args.wrapContainer}
      direction={args.directionContainer}
      justifyContent={args.justifyContentContainer}
      alignItems={args.alignItemsContainer}
      zeroMinWidth={args.zeroMinWidthContainer}
      style={containerStyles}
    >
      <Grid {...itemArgs} style={itemStyles}>
        1
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        2
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        3
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        4
      </Grid>
      <Grid {...itemArgs} style={{ ...itemStyles, height: 'auto' }}>
        5
        <br />
        (taller)
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        6
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        7
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        8
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        9
      </Grid>
      <Grid
        {...itemArgs}
        style={{ ...itemStyles, width: 'auto', whiteSpace: 'nowrap' }}
      >
        10 (wider)
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        11
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        12
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        13
      </Grid>
      <Grid {...itemArgs} style={itemStyles}>
        14
      </Grid>
    </Grid>
  )
}

export const Default = Template.bind({})
Default.args = {
  wrapContainer: 'wrap',
  directionContainer: 'row',
  justifyContentContainer: 'flex-start',
  alignItemsContainer: 'flex-start',
  zeroMinWidthContainer: false,
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  zeroMinWidth: false,
  xs: 6,
  sm: 4,
  md: 3,
  lg: 2
} as typeof Default.args
