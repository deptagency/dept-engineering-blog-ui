import React from 'react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostCard } from '@components/PostCard'

import { dummyPost, dummySettings } from './data'

export default {
  title: 'PostCard',
  component: PostCard
} as ComponentMeta<typeof PostCard>

const Wrapper = styled.div<{ inverted: boolean }>`
  padding: 20px;
  background: ${({ inverted }) => (inverted ? 'black' : 'white')};
`

const Template: ComponentStory<typeof PostCard> = (args) => (
  <Wrapper inverted={!!args.isColorInverted}>
    <PostCard isFirstPost={false} {...args} />
  </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
  post: dummyPost,
  settings: dummySettings,
  isFirstPost: false,
  isColorInverted: false
}
