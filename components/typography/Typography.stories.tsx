import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading1, Heading2 } from './Headings';

export default {
  title: 'Example/Heading',
  component: Heading1,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => <>
  <Heading1 {...args}>First Headline</Heading1>
  <Heading2 {...args}>Second Headline</Heading2>
</>;

export const Headings = Template.bind({});
Headings.args = {};

