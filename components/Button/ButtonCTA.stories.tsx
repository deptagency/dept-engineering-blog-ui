import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'
import styled from '@emotion/styled';

export default {
  title: 'Button/Call To Action',
  component: Button.Cta,
  argTypes: {
    children: {
      control: 'text'
    },
    as: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof Button.Cta>

const Wrapper = styled.div<{inverted: boolean}>`
  padding: 20px;
  background: ${({ inverted }) => inverted ? "black" : "white"};
`;

const Template: ComponentStory<typeof Button.Cta> = (args) => (
  <>
    <Wrapper inverted={!!args.inverted}>
      <Button.Cta {...args}>{args.children}</Button.Cta>
    </Wrapper>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: "Keep Reading",
  as: 'button',
  inverted: false,
  small: false,
  disabled: false
}

/* Inverted */
const TemplateInverted: ComponentStory<typeof Button.Cta> = (args) => (
  <>
    <Wrapper inverted={!!args.inverted}>
      <Button.Cta {...args}>{args.children}</Button.Cta>
    </Wrapper>
  </>
)

export const Inverted = TemplateInverted.bind({})
Inverted.args = {
  children: "Keep Reading",
  as: 'button',
  inverted: true,
  small: false,
  disabled: false
}

/* Small */
const TemplateSmall: ComponentStory<typeof Button.Cta> = (args) => (
  <>
    <Wrapper inverted={!!args.inverted}>
      <Button.Cta {...args}>{args.children}</Button.Cta>
    </Wrapper>
  </>
)

export const Small = TemplateSmall.bind({})
Small.args = {
  children: "Keep Reading",
  as: 'button',
  inverted: false,
  small: true,
  disabled: false
}


