import styled from '@emotion/styled';
import { colors, Colors } from '@components/common/colors';

/**
 *
 * Order 0: Primary headline
 * Order 1: Secondary headline
 *      Post Card Titles (h2)
 * Order 2: Primary Subheadline
 *     Header site description (h2)
*/

interface HeadlineProps {
  order?: 0 | 1 | 2
  responsive?: boolean
  color?: Colors
}


const mapPropsToStyles = ({ order = 0, responsive }: HeadlineProps) => {
  switch (order) {
    case 0:
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
    case 1:
      return `
          font-size: 3.6rem;
          line-height: 4.4rem;
          font-weight: 300;
      `
    case 2:
      return `
        font-size: 2.1rem;
        line-height: 1.4rem;
        font-weight: 400;
      `
  }
}

export const Headline = styled.h1<HeadlineProps>`
  color: ${({ color }) => color ? colors[color] : colors.onyx};

  ${props => mapPropsToStyles(props)}
`;
