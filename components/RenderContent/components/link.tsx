import { colors } from "@components/common/colors";

// @todo refactor into own component
export const linkStyles = `
  a {
    color: ${colors.darkgrey};
    word-break: break-word;
    box-shadow: ${colors.darkgrey} 0 -1px 0 inset;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${colors.blue};
      text-decoration: none;
      box-shadow: ${colors.blue} 0 -1px 0 inset;
    }

    strong {
      font-weight: inherit;
    }
  }
`;
