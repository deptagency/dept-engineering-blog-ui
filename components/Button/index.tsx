import styled from '@emotion/styled'
import { ElementType } from 'react'

import { colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'

interface ButtonProps {
  small?: boolean
  disabled?: boolean
}

interface ButtonCtaProps extends ButtonProps {
  inverted?: boolean
}

interface ButtonTagProps extends ButtonProps {
  white?: boolean
  selected?: boolean
}

type ButtonVariant = 'cta' | 'tag'

const mapVariantToStyles = ({
  variant,
  inverted,
  white,
  small,
  as,
  disabled,
  selected
}: ButtonCtaProps &
  ButtonTagProps & { variant?: ButtonVariant } & { as?: ElementType<any> }) => {
  const hasHoverState = (as === 'button' || as === 'a' || as === undefined) && !disabled

  switch (variant) {
    case 'tag':
      return `
        background: ${colors.platinum};
        border: 1px solid ${colors.platinum};
        color: ${colors.onyx};

        ${small ? `
          font-size: 1.2rem;
          line-height: 1.2rem;
          padding: ${spaces.xxs - 2}px ${spaces.xxs}px;
        `: ``}

        ${white ? `
          background: ${colors.white};
          border: 1px solid ${colors.onyx};
          color: ${colors.onyx};

          ${selected ? `
            background: ${colors.onyx};
            color: ${colors.white};
          `:``}
        `: ``}

        ${disabled ? `
          cursor: default;
          opacity: 0.5;
        `: ``}

        ${hasHoverState ? `
          &:hover {
            cursor: pointer;

            ${white ? `
              background: ${colors.onyx};
              color: ${colors.white};

              ${selected ? `
                background: ${colors.white};
                color: ${colors.onyx};
              `:``}
            ` : ``}
          }
        `: ``}
      `
    default:
      return `
        border-radius: 100rem;
        border: 1px solid ${colors.onyx};
        background: ${colors.onyx};
        color: ${colors.white};

        ${small ? `
          font-size: 1.2rem;
          line-height: 1.2rem;
          padding: ${spaces.xxs - 2}px ${spaces.xxs}px;
        `: ``}

        ${inverted ? `
          border: 1px solid ${colors.white};
          background: ${colors.onyx};
          color: ${colors.white};
        `: ``}

        ${disabled ? `
          cursor: default;
          opacity: 0.5;
        `: ``}

        ${hasHoverState ? `
          &:hover {
            background: ${colors.white};
            color: ${colors.onyx};
            cursor: pointer;

            ${inverted ? `
              background: ${colors.white};
              color: ${colors.onyx};
            `: ``}
          }
        ` : ``}
      `
  }
}

const COMMON_STYLES = `
  display: inline-block;
  padding: ${spaces.xxs}px ${spaces.sm}px;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
  }
`

export const Button = {
  Cta: styled.button<ButtonCtaProps>`
    ${COMMON_STYLES}
    ${(props) => mapVariantToStyles({ variant: 'cta', ...props })}
  `,
  Tag: styled.button<ButtonTagProps>`
    ${COMMON_STYLES}
    ${(props) => mapVariantToStyles({ variant: 'tag', ...props })}
  `
}
