import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Button } from '@components/Button'
import { spaces } from '@components/common/spaces'
import { colors } from '@components/common/colors'

export const PostCardTag = styled(Button.Tag)`
  margin-bottom: ${spaces.sm}px;
`

export const PostCardImageLink = styled.a`
  margin-bottom: ${spaces.md}px;
  position: relative;
  display: block;
  overflow: hidden;
`

export const PostCardImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  object-fit: cover;
`

export const PostCardFooter = styled.footer`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const PostCardLinkAnchor = styled.a`
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`

export const PostCard = styled.article<{ isFirstPost?: boolean }>`
  position: relative;
  flex: 1 1 301px;
  display: grid;
  overflow: hidden;
  margin: 0 0 ${spaces.lg}px;
  padding: 0 0 ${spaces.lg}px;
  min-height: ${spaces.xxxxl}px;
  background-size: cover;

  ${({ isFirstPost }) =>
    isFirstPost
      ? css`
          padding: ${spaces.xxl}px 0;
          margin: 0;

          @media (min-width: 800px) {
            ${PostCardImageLink} {
              min-height: 380px;
            }
          }

          @media (min-width: 900px) {
            grid-template-columns: 45% auto;
            grid-gap: ${spaces.xl}px;

            ${PostCardImageLink} {
              margin-bottom: 0;
            }

            ${PostCardContent} {
              padding: ${spaces.xl}px 0;
              height: 100%;
              justify-content: center;
            }
          }
        `
      : css`
          @media (max-width: 650px) {
            margin-bottom: 5vw;
          }
        `}
`
