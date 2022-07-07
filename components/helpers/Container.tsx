import styled from '@emotion/styled'

import { MAX_WIDTH, spaces } from '@components/common/spaces'

const Outer = styled.div`
  padding: 0 ${spaces.md}px;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH}px;
  width: 100%;
`

export const Container: React.FC = ({ children, ...rest }) => (
  <Outer {...rest}>
    <Inner>{children}</Inner>
  </Outer>
)
