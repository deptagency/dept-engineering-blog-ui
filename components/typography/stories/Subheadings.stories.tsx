import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { colors } from '@components/common/colors'

import { Subheading } from '../Subheadings'

export default {
  title: 'Typography/Subheadings',
  component: Subheading.One,
  argTypes: {
    $color: {
      options: Object.keys(colors),
      control: {
        type: 'select'
      }
    },
    children: {
      control: 'text',
      defaultValue: 'Change Me'
    },
    noMargin: {
      control: 'boolean',
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Subheading.One>

const Template1: ComponentStory<typeof Subheading.One> = (args) => (
  <Subheading.One {...args}>{args.children}</Subheading.One>
)
export const Subheading1 = Template1.bind({})

const Template2: ComponentStory<typeof Subheading.One> = (args) => (
  <Subheading.Two {...args}>{args.children}</Subheading.Two>
)
export const Subheading2 = Template2.bind({})
