import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './Headings';
import { SubscribeHeadline1, SubscribeHeadline2 } from '@components/Subscribe/components';

const OverviewComp = () => (
  <>
    <Heading1>First Headline</Heading1>
    <Heading2>Second Headline</Heading2>
    <Heading3>Third Headline</Heading3>
    <Heading4>Fourth Headline</Heading4>
    <Heading5>Fifth Headline</Heading5>
    <br></br>
    <SubscribeHeadline1>Stay Up To Date</SubscribeHeadline1>
    <SubscribeHeadline2>Stay Up To Date</SubscribeHeadline2>
  </>
)

export default {
  title: 'Typography',
  component: OverviewComp,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof OverviewComp> = OverviewComp;

export const Overview = Template.bind({});
Overview.args = {};
