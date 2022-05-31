import { colors } from '@components/common/colors'
import { spaces } from '@components/common/spaces'

export const horizontalRuleStyles = `
  hr {
    margin: ${spaces.xl}px 0;

    &:after {
      content: "";
      position: absolute;
      top: -15px;
      left: 50%;
      display: block;
      margin-left: -10px;
      width: 1px;
      height: 30px;
      background: ${colors.lightgrey} l(+10%));
      box-shadow: ${colors.white} 0 0 0 5px;
      transform: rotate(45deg);
    }

    & + p {
      margin-top: ${spaces.md}px;
    }
  }
`
