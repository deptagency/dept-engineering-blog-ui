import { blockquoteBorder } from "@components/common/borders";
import { colors } from "@components/common/colors";
import { spaces } from "@components/common/spaces";

export const blockquoteStyles = `
  blockquote {
    padding: 0 ${spaces.lg}px;
    border-left: ${blockquoteBorder};

    em {
      color: ${colors.onyx};
    }

    p {
      color: inherit;
      font-size: inherit;
      line-height: inherit;
      font-style: italic;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (max-width: 500px) {
      padding: 0 ${spaces.md}px;
    }
  }
`;
