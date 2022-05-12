import { colors } from '@components/common/colors'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'

import { Heading } from '../Headings'

export default {
  title: 'Typography',
  component: Heading.One,
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
} as ComponentMeta<typeof Heading.One>;

const Template: ComponentStory<typeof Heading.One> = (args) => (
  <>
    <Heading.One {...args}>{args.children}</Heading.One>
    <Heading.Two {...args}>{args.children}</Heading.Two>
    <Heading.Three {...args}>{args.children}</Heading.Three>
    <Heading.Four {...args}>{args.children}</Heading.Four>
    <Heading.Five {...args}>{args.children}</Heading.Five>
    <Heading.CallToAction1 {...args}>{args.children}</Heading.CallToAction1>
    <Heading.CallToAction2 {...args}>{args.children}</Heading.CallToAction2>
  </>
)

export const Headings = Template.bind({})
Headings.args = {
  responsive: false,
  noMargin: false,
  children: "Change Me"
}
