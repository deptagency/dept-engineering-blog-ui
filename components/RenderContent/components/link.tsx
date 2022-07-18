import { colors } from '@components/common/colors'

// @todo refactor into own component
export const getLinkStyles = (inverted = false) => {
  const color = inverted ? colors.white : colors.darkgrey
  const hoverColor = inverted ? colors.white : colors.blue

  return `a {
    color: ${color};
    word-break: break-word;
    box-shadow: ${color} 0 -1px 0 inset;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${hoverColor};
      text-decoration: none;
      box-shadow: ${hoverColor} 0 -1px 0 inset;
    }

    strong {
      font-weight: inherit;
    }
  }
`
}
