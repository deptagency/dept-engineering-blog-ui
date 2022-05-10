import styled from '@emotion/styled';
import { colors, Colors } from '@components/common/colors';

/**
 *
 * Heading1: Primary headlines (ie. header headlines)
 * Heading2: Secondary headlines (ie. post card headlines)
 * Heading3: Tertiary headline (ie. full post content headline h2)
 * Heading4: Full post content headline (h3 & h4)
*/
interface HeadingProps {
  responsive?: boolean
  color?: Colors
}

type HeadingOrder = 1 | 2 | 3 | 4

export const mapHeadingOrderToStyles = ({ order, responsive }: HeadingProps & { order: HeadingOrder }) => {
  switch (order) {
    case 1:
      return `
        font-size: 6rem;
        line-height: 6.8rem;
        font-weight: 300;

        ${responsive && `
          @media (max-width: 900px) {
            font-size: 3.6rem;
            line-height: 4.4rem;
          }
        `}
      `
    case 2:
      return `
        font-size: 3.6rem;
        line-height: 4.4rem;
        font-weight: 300;
      `
    case 3:
      return `
        font-size: 3.2rem;
        line-height: 1.25rem;
        font-weight: 600;
      `
    case 4:
      return `
        font-size: 2.5rem;
        line-height: 1.3rem;
        font-weight: 600;
      `
    default:
      return ``
  }
}

export const Heading1 = styled.h1<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 1})};
  color: ${({ color }) => color ? colors[color] : colors.onyx};
`;

export const Heading2 = styled.h2<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 2})};
  color: ${({ color }) => color ? colors[color] : colors.onyx};
`;

export const Heading3 = styled.h3<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 3})};
  color: ${({ color }) => color ? colors[color] : colors.onyx};
`;
