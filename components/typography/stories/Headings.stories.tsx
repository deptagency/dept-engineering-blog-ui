import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Heading1, Heading2, Heading3, Heading4, Heading5, HeadingProps } from '../Headings'

export default {
  title: 'Typography',
  component: Heading1,
} as ComponentMeta<typeof Heading1>

const Template: ComponentStory<typeof Heading1> = (args: HeadingProps) => (
  <>
    <Heading1 {...args}>First Headline</Heading1>
    <Heading2 {...args}>Second Headline</Heading2>
    <Heading3 {...args}>Third Headline</Heading3>
    <Heading4 {...args}>Fourth Headline</Heading4>
    <Heading5 {...args}>Fifth Headline</Heading5>
  </>
)

export const Headings = Template.bind({})
Headings.args = {
  responsive: false,
}
