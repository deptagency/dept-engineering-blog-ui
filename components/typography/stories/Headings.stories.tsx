import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { colors } from '@components/common/colors'

import { Heading } from '../Headings'

export default {
  title: 'Typography/Headings',
  component: Heading.One,
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
    responsive: {
      control: 'boolean',
      defaultValue: false
    },
    noMargin: {
      control: 'boolean',
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Heading.One>

const Template: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.One {...args}>{args.children}</Heading.One>
)
export const Heading1 = Template.bind({})

const Template2: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.Two {...args}>{args.children}</Heading.Two>
)
export const Heading2 = Template2.bind({})

const Template3: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.Three {...args}>{args.children}</Heading.Three>
)
export const Heading3 = Template3.bind({})

const Template4: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.Four {...args}>{args.children}</Heading.Four>
)
export const Heading4 = Template4.bind({})

const Template5: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.Five {...args}>{args.children}</Heading.Five>
)
export const Heading5 = Template5.bind({})

const TemplateCTA1: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.CallToAction1 {...args}>{args.children}</Heading.CallToAction1>
)
export const HeadingCTA1 = TemplateCTA1.bind({})

const TemplateCTA2: ComponentStory<typeof Heading.One> = (args) => (
  <Heading.CallToAction2 {...args}>{args.children}</Heading.CallToAction2>
)
export const HeadingCTA2 = TemplateCTA2.bind({})
