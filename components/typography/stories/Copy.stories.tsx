import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Copy, CopyS, CopyXS, CopyLG, CopyProps } from '../Copy'

export default {
  title: 'Typography',
  component: Copy,
} as ComponentMeta<typeof Copy>

const Template: ComponentStory<typeof Copy> = (args: CopyProps) => (
  <>
    <CopyXS {...args}>This is extra small copy.</CopyXS>
    <CopyS {...args}>This is small copy.</CopyS>
    <Copy {...args}>This is the default copy component.</Copy>
    <CopyLG {...args}>This is large copy.</CopyLG>
  </>
)

export const Copys = Template.bind({})
Copys.args = {}
