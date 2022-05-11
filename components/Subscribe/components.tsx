import styled from '@emotion/styled';
import { colors, Colors } from '@components/common/colors';
import { spaces } from '@components/common/spaces';

interface SubscribeHeadlineProps {
  color?: Colors
}

const mapPropsToStyles = ({ order = 1 }: SubscribeHeadlineProps & { order?: 1 | 2 }) => {
  switch (order) {
    case 1:
      return `
        font-size: 5.2rem;
        line-height: 1.15em;
        font-weight: 400;
        text-transform: uppercase;
      `
    case 2:
      return `
        font-size: 3.6rem;
        line-height: 4.4rem;
        font-weight: 400;
        text-transform: uppercase;
      `
  }
}

export const SubscribeHeadline1 = styled.h1<SubscribeHeadlineProps>`
  margin: 0 0 ${spaces.xs}px;
  ${props => mapPropsToStyles({...props, order: 1})}
  color: ${({ color }) => color ? colors[color] : colors.onyx};
`;

export const SubscribeHeadline2 = styled.h2<SubscribeHeadlineProps>`
  margin: 0 0 ${spaces.xxxs}px;
  ${props => mapPropsToStyles({...props, order: 2})}
  color: ${({ color }) => color ? colors[color] : colors.onyx};
`;


export const DescriptionLink = styled.a<{ $color?: Colors }>`
  font-size: inherit;
  font-weight: inherit;
  color: ${({ $color }) => colors[$color || "onyx"]};
  line-height: inherit;
  box-shadow: inset 0 -1px 0 ${({ $color }) => colors[$color || "onyx"]};

  &:hover {
    text-decoration: none;
  }
`
