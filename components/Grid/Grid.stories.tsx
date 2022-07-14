import { ComponentMeta, ComponentStory } from '@storybook/react'

import { colors } from '@components/common/colors'

import { Grid } from './Grid'
import { GridProps } from './Grid.model'

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

const itemStyles = {
  background: colors.yellow,
  color: colors.onyx,

  padding: '5px',

  'line-height': '100px',
  'font-weight': 'bold',
  'font-size': '2em',
  'text-align': 'center'
}

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
    >
      <Grid {...itemArgs}>
        <div style={itemStyles}>1</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>2</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>3</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>4</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>
          5
          <br />
          (taller)
        </div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>6</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>7</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>8</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>9</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={{ ...itemStyles, whiteSpace: 'nowrap' }}>
          10 (this is a wide block)
        </div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>11</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>12</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>13</div>
      </Grid>
      <Grid {...itemArgs}>
        <div style={itemStyles}>14</div>
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
