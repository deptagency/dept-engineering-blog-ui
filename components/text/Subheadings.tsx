import styled from '@emotion/styled';
import { colors, Colors } from '@components/common/colors';
import { spaces } from '@components/common/spaces';

/**
 *
 * Subheading1: Primary subheadline (ie. post exerpt)
 * Subheading2: Secondary subheadline
*/

interface SubheadingProps {
  color?: Colors
}

type SubheadingOrder = 1 | 2

const mapSubheadingOrderToStyles = ({ order }: SubheadingProps & { order: SubheadingOrder }) => {
  switch (order) {
    case 1:
      return `
        font-size: 2.3rem;
        line-height: 1.4rem;
        font-weight: 300;
      `
    case 2:
      return `
        font-size: 2.1rem;
        line-height: 1.4rem;
        font-weight: 400;
      `
    default:
      return ``
  }
}

export const Subheading1 = styled.h2<SubheadingProps>`
  ${props => mapSubheadingOrderToStyles({...props, order: 1})}
  color: ${({ color }) => color ? colors[color] : colors.gray};
`;

export const Subheading2 = styled.h2<SubheadingProps>`
  margin-top: ${spaces.xxxs}px;
  ${props => mapSubheadingOrderToStyles({...props, order: 2})}
  color: ${({ color }) => color ? colors[color] : colors.gray};
`;
