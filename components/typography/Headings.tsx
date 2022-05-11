import styled from '@emotion/styled';
import { colors, Colors } from '@components/common/colors';
import { spaces } from '@components/common/spaces';

/**
 *
 * Heading1: Primary headlines (ie. header headlines)
 * Heading2: Secondary headlines (ie. post card headlines)
 * Heading3: Tertiary headline (ie. full post content headline h2)
 * Heading4: Full post content headline (h3 & h4)
 * Heading5: Full post content headline (h5 & h6)
*/
export interface HeadingProps {
  responsive?: boolean
  $color?: Colors
  noSpaces?: boolean
}

type HeadingOrder = 1 | 2 | 3 | 4 | 5

export const mapHeadingOrderToStyles = ({ order, responsive, noSpaces, $color }: HeadingProps & { order: HeadingOrder }) => {
  switch (order) {
    case 1:
      return `
        font-size: 6rem;
        line-height: 6.8rem;
        font-weight: 300;

        ${responsive ? `
          @media (max-width: 800px) {
            font-size: 3.6rem;
            line-height: 4.4rem;
          }
        ` : ``}

        ${!noSpaces ? `margin: 0 0 ${spaces.sm}px;` : ``}
        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 2:
      return `
        font-size: 3.6rem;
        line-height: 4.4rem;
        font-weight: 300;

        ${!noSpaces ? `margin: 0 0 ${spaces.sm}px;` : ``}
        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 3:
      return `
        font-size: 3.2rem;
        line-height: 1.25em;
        font-weight: 600;

        ${responsive ? `
          @media (max-width: 800px) {
            font-size: 2.8rem;
          }
      `: ``}

      ${!noSpaces ? `margin: 0 0 ${spaces.xs}px;` : ``}
      color: ${$color ? colors[$color] : colors.onyx};
      `
    case 4:
      return `
        font-size: 2.5rem;
        line-height: 1.3em;
        font-weight: 600;

        ${responsive ? `
          @media (max-width: 800px) {
            font-size: 2.4rem;
          }
        `: ``}

        ${!noSpaces ? `margin: 0 0 ${spaces.xs}px;` : ``}
        color: ${$color ? colors[$color] : colors.onyx};
      `
    case 5:
      return `
        font-size: 2rem;
        line-height: 1.4em;
        font-weight: 700;

        ${responsive ? `
          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
        `: ``}

        ${!noSpaces ? `margin: 0 0 ${spaces.xs}px;` : ``}
        color: ${$color ? colors[$color] : colors.onyx};
      `;
    default:
      return ``
  }
}

export const Heading1 = styled.h1<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 1})};
`;

export const Heading2 = styled.h2<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 2})};
`;

export const Heading3 = styled.h3<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 3})};
`;

export const Heading4 = styled.h4<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 4})};
`;

export const Heading5 = styled.h5<HeadingProps>`
  ${props => mapHeadingOrderToStyles({...props, order: 5})};
`;
