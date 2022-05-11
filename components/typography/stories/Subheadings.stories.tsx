import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Subheading1, Subheading2, SubheadingProps } from '../Subheadings'

export default {
  title: 'Typography',
  component: Subheading1,
} as ComponentMeta<typeof Subheading1>

const Template: ComponentStory<typeof Subheading1> = (args: SubheadingProps) => (
  <>
    <Subheading1 {...args}>First Subheading</Subheading1>
    <Subheading2 {...args}>Second Subheading</Subheading2>
  </>
)

export const Subheadings = Template.bind({})
Subheadings.args = {}
