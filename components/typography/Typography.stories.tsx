import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './Headings';
import { SubscribeHeadline1, SubscribeHeadline2 } from '@components/Subscribe/components';
import { Global } from '@emotion/react';
import { fonts } from '@components/common/fonts';

const OverviewComp = () => (
  <>
    <Global styles={fonts} />
    <Heading1>First Headline</Heading1>
    <Heading2>Second Headline</Heading2>
    <Heading3>Third Headline</Heading3>
    <Heading4>Fourth Headline</Heading4>
    <Heading5>Fifth Headline</Heading5>
    <br></br>
    <SubscribeHeadline1>Stay Up To Date</SubscribeHeadline1>
    <SubscribeHeadline2>Stay Up To Date</SubscribeHeadline2>
    <br></br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac odio est. Nam suscipit dui nibh, in facilisis nisi aliquet convallis. Vivamus ultrices, est sit amet porta euismod, augue odio iaculis elit, sed luctus sem mauris vitae orci. Nam at nisi eu lectus pretium laoreet in sit amet nunc. Fusce scelerisque gravida ex, id vehicula leo lobortis non. Morbi sed arcu efficitur, egestas velit vitae, malesuada lorem. Nulla a finibus arcu, eget tristique purus. Nam in auctor sapien, eu vestibulum diam. Nunc sed scelerisque odio. Praesent laoreet risus ut magna laoreet pellentesque. Maecenas laoreet tortor sed sollicitudin faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eleifend id leo vel aliquet. Mauris dolor nunc, luctus sit amet mauris vel, ullamcorper pellentesque ligula. Donec faucibus, nibh at cursus blandit, nisi mi elementum arcu, nec condimentum elit ex at eros.</p>
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
