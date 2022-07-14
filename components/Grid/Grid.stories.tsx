import React from 'react'
import styled from '@emotion/styled'
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
  alignItems: generateSelectArgType('alignItems', alignItemsOptions),
  spacing: disabledArgType,
  rowSpacing: {
    name: 'Row Spacing',
    control: { type: 'object' }
  },
  columnSpacing: {
    name: 'Column Spacing',
    control: { type: 'object' }
  }
}

const mapArgsToContainerProps = (args: Record<string, unknown>) =>
  ({
    container: true,
    wrap: args.wrapContainer,
    direction: args.directionContainer,
    justifyContent: args.justifyContentContainer,
    alignItems: args.alignItemsContainer,
    rowSpacing: args.rowSpacing,
    columnSpacing: args.columnSpacing,
    zeroMinWidth: args.zeroMinWidthContainer
  } as GridProps)

const mapArgsToItemProps = (args: Record<string, unknown>) =>
  ({
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
  } as GridProps)

type DemoDivProps = {
  children: React.ReactNode
  extraDemoDivStyles?: string
}
type DemoGridItemProps = GridProps & DemoDivProps

const DemoGridItem = (props: DemoGridItemProps) => {
  const DemoDiv = styled.div<{ extraStyles?: string }>`
    background: ${colors.yellow};
    color: ${colors.onyx};

    padding: 5px;
    line-height: 100px;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
    ${({ extraStyles }) => extraStyles ?? ''}
  `
  return (
    <Grid {...props}>
      <DemoDiv extraStyles={props.extraDemoDivStyles}>{props.children}</DemoDiv>
    </Grid>
  )
}

export default {
  title: 'Grid',
  component: Grid,
  argTypes,
  subcomponents: { Grid }
} as ComponentMeta<typeof Grid>

const DefaultTemplate: ComponentStory<typeof Grid> = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: Record<string, any>
) => {
  const containerProps = mapArgsToContainerProps(args)
  const itemProps = mapArgsToItemProps(args)

  const demoDivsProps: DemoDivProps[] = Array.from({ length: 14 }, (_, i) => ({
    children: <React.Fragment>{String(i + 1)}</React.Fragment>
  }))
  demoDivsProps[4].children = (
    <React.Fragment>
      5<br />
      (taller)
    </React.Fragment>
  )
  demoDivsProps[9] = {
    children: <span>10 (this is a wide block)</span>,
    extraDemoDivStyles: 'white-space: nowrap;'
  }

  return (
    <Grid {...containerProps}>
      {demoDivsProps.map((demoDivProps) => (
        <DemoGridItem
          key={demoDivProps.children?.toString()}
          {...itemProps}
          {...demoDivProps}
        ></DemoGridItem>
      ))}
    </Grid>
  )
}

export const Default = DefaultTemplate.bind({})
Default.args = {
  wrapContainer: 'wrap',
  directionContainer: 'row',
  justifyContentContainer: 'flex-start',
  alignItemsContainer: 'flex-start',
  zeroMinWidthContainer: false,
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  rowSpacing: { xs: 1, md: 3 },
  columnSpacing: { xs: 1, sm: 2, lg: 4 },
  zeroMinWidth: false,
  xs: 6,
  sm: 4,
  md: 3,
  lg: 2
} as typeof Default.args

const NestedTemplate: ComponentStory<typeof Grid> = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: Record<string, any>
) => {
  const containerProps = mapArgsToContainerProps(args)
  const subContainerProps: GridProps = {
    ...mapArgsToContainerProps(args),
    item: true,
    xs: 12
  }
  const itemProps = mapArgsToItemProps(args)

  return (
    <Grid {...containerProps}>
      <Grid {...subContainerProps}>
        <DemoGridItem {...itemProps}>1</DemoGridItem>
        <DemoGridItem {...itemProps}>2</DemoGridItem>
        <DemoGridItem {...itemProps}>3</DemoGridItem>
      </Grid>
      <Grid {...subContainerProps}>
        <DemoGridItem {...itemProps}>4</DemoGridItem>
        <DemoGridItem {...itemProps}>5</DemoGridItem>
      </Grid>
      <Grid {...subContainerProps}>
        <DemoGridItem {...itemProps}>6</DemoGridItem>
      </Grid>
    </Grid>
  )
}

export const Nested = NestedTemplate.bind({})
Nested.args = {
  wrapContainer: 'wrap',
  directionContainer: 'row',
  justifyContentContainer: 'space-around',
  alignItemsContainer: 'flex-start',
  zeroMinWidthContainer: false,
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  rowSpacing: 1,
  columnSpacing: 1,
  zeroMinWidth: false,
  xs: 4
} as typeof Nested.args
