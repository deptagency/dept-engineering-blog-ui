import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { colors } from '@components/common/colors'
import { Subheading } from '../Subheadings'


export default {
  title: 'Typography',
  component: Subheading.One,
  argTypes: {
    $color: {
      options:  Object.keys(colors),
      control: {
        type: 'select'
      }
    },
    children: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof Subheading.One>

const Template: ComponentStory<typeof Subheading.One> = (args) => (
  <>
    <Subheading.One {...args}>{args.children}</Subheading.One>
    <Subheading.Two {...args}>{args.children}</Subheading.Two>
  </>
)

export const Subheadings = Template.bind({})
Subheadings.args = {
  noMargin: false,
  children: "Change Me"
}
