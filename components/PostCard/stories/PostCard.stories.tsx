import React from 'react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostCardNeo } from '../PostCardNeo'

import { DummyLang, DummyNextImages, DummyPost } from './data'

export default {
  title: 'PostCardNeo',
  component: PostCardNeo
} as ComponentMeta<typeof PostCardNeo>

const Wrapper = styled.div<{ inverted?: boolean }>`
  padding: 20px;
  background: ${({ inverted }) => (inverted ? 'black' : 'white')};
`

const Template: ComponentStory<typeof PostCardNeo> = (args) => (
  <>
    <Wrapper>
      <PostCardNeo
        {...args}
        post={DummyPost}
        lang={DummyLang}
        nextImages={DummyNextImages}
      />
    </Wrapper>
  </>
)

export const Default = Template.bind({})
