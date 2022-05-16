import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button/Tag',
  component: Button.Tag,
  argTypes: {
    children: {
      control: 'text'
    },
    as: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof Button.Tag>


const Template: ComponentStory<typeof Button.Tag> = (args) => (
  <>
    <Button.Tag {...args}>{args.children}</Button.Tag>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: "Platform",
  as: 'button',
  small: false,
  white: false,
  disabled: false,
  selected: false
}

/* White */
const TemplateWhite: ComponentStory<typeof Button.Tag> = (args) => (
  <>
    <Button.Tag {...args}>{args.children}</Button.Tag>
  </>
)

export const White = TemplateWhite.bind({})
White.args = {
  children: "Platform",
  as: 'button',
  small: false,
  white: true,
  disabled: false,
  selected: false
}

/* Small */
const TemplateSmall: ComponentStory<typeof Button.Tag> = (args) => (
  <>
    <Button.Tag {...args}>{args.children}</Button.Tag>
  </>
)

export const Small = TemplateSmall.bind({})
Small.args = {
  children: "Platform",
  as: 'button',
  small: true,
  white: false,
  disabled: false,
  selected: false
}
