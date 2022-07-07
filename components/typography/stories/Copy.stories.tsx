import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { colors } from '@components/common/colors'

import { Copy } from '../Copy'

export default {
  title: 'Typography/Copy',
  component: Copy.M,
  argTypes: {
    $color: {
      options: Object.keys(colors),
      control: {
        type: 'select'
      }
    },
    children: {
      control: 'text',
      defaultValue: 'This is some copy text.'
    }
  }
} as ComponentMeta<typeof Copy.M>

const TemplateOne: ComponentStory<typeof Copy.M> = (args) => (
  <Copy.XS {...args}>{args.children}</Copy.XS>
)
export const CopyExtraSmall = TemplateOne.bind({})

const TemplateTwo: ComponentStory<typeof Copy.M> = (args) => (
  <Copy.SM {...args}>{args.children}</Copy.SM>
)
export const CopySmall = TemplateTwo.bind({})

const TemplateThree: ComponentStory<typeof Copy.M> = (args) => (
  <Copy.M {...args}>{args.children}</Copy.M>
)
export const CopyMedium = TemplateThree.bind({})

const Template4: ComponentStory<typeof Copy.M> = (args) => (
  <Copy.LG {...args}>{args.children}</Copy.LG>
)
export const CopyLarge = Template4.bind({})

const Template5: ComponentStory<typeof Copy.M> = (args) => (
  <Copy.XL {...args}>{args.children}</Copy.XL>
)
export const CopyExtraLarge = Template5.bind({})
