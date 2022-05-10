import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading1, Heading2 } from './Headings';

export default {
  title: 'Typography/Headings',
  component: Heading1,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => <>
  <Heading1 {...args}>First Headline</Heading1>
</>;

export const H1 = Template.bind({});
H1.args = {};

const TemplateTwo: ComponentStory<typeof Heading2> = (args) => <>
  <Heading2 {...args}>Second Headline</Heading2>
</>;

export const H2 = TemplateTwo.bind({});
H2.args = {};
