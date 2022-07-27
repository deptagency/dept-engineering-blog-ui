import styled from '@emotion/styled'

import { colors } from '@components/common/colors'

const StyledArrowIconWrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
`

export interface ArrowIconProps {
  inverted?: boolean
}

export const ArrowLeftIcon = ({ inverted }: ArrowIconProps) => {
  return (
    <StyledArrowIconWrapper>
      <svg
        width="18"
        height="12"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.27427 1.19199L7.63026 0.547997L0.178267 8L7.63026 15.452L8.27427 14.808L1.92626 8.46L23.8223 8.46V7.54L1.92626 7.54L8.27427 1.19199Z"
          fill={inverted ? colors.white : colors.black}
        />
      </svg>
    </StyledArrowIconWrapper>
  )
}

export const ArrowRightIcon = ({ inverted }: ArrowIconProps) => {
  return (
    <StyledArrowIconWrapper>
      <svg
        width="18"
        height="12"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7257 14.808L16.3697 15.452L23.8217 8L16.3697 0.548004L15.7257 1.192L22.0737 7.54H0.177734V8.46H22.0737L15.7257 14.808Z"
          fill={inverted ? colors.white : colors.black}
        />
      </svg>
    </StyledArrowIconWrapper>
  )
}
