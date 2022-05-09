import styled from '@emotion/styled';
import { colors, Colors } from '@components/common/colors';

interface SubscribeHeadlineProps {
  order?: 0 | 1
  color?: Colors
}

const mapPropsToStyles = ({ order = 0 }: SubscribeHeadlineProps) => {
  switch (order) {
    case 0:
      return `
        font-size: 5.2rem;
        line-height: 1.15em;
        font-weight: 400;
      `
    case 1:
      return `
        font-size: 3.6rem;
        line-height: 4.4rem;
        font-weight: 300;
      `
  }
}

export const SubscribeHeadline = styled.h1<SubscribeHeadlineProps>`
  color: ${({ color }) => color ? colors[color] : colors.onyx};
  ${props => mapPropsToStyles(props)}
`;
