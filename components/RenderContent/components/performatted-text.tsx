import { colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'

// @todo refactor out font-sizes etc.
export const preformattedTextStyles = `
  pre {
    overflow-x: auto;
    margin: ${spaces.md}px 0 ${spaces.xxl}px;
    padding: ${spaces.md}px;
    max-width: 100%;
    border: 1px solid ${colors.black};
    color: ${colors.whitegrey};
    border-radius: 5px;
    background: ${colors.bluedark};

    font-size: 1.4rem;
    line-height: 1.5em;

    code {
      padding: 0;
      font-size: inherit;
      line-height: inherit;
      background: transparent;
    }
  }
`
