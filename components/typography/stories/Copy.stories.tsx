import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { colors } from '@components/common/colors'
import { Copy, CopyProps } from '../Copy'

export default {
  title: 'Typography',
  component: Copy.M,
  argTypes: {
    $color: {
      options: Object.keys(colors),
      control: {
        type: 'select',
      },
    },
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Copy.M>

const Template: ComponentStory<typeof Copy.M> = (args) => (
  <>
    <Copy.XS {...args}>{args.children}</Copy.XS>
    <Copy.SM {...args}>{args.children}</Copy.SM>
    <Copy.M {...args}>{args.children}</Copy.M>
    <Copy.LG {...args}>{args.children}</Copy.LG>
  </>
)

export const Copys = Template.bind({})
Copys.args = {
  children: 'This is some copy text.',
}
