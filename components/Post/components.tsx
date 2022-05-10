import styled from '@emotion/styled';

import { spaces } from '@components/common/spaces';
import { mapHeadingOrderToStyles } from '@components/typography/Headings';

export const PostFullContent = styled.section`
  display: block;
  grid-area: content;

  min-width: 100%;
  min-height: 230px;

  padding: 0;

  h2 {
    margin-bottom: ${spaces.xs}px;
    ${mapHeadingOrderToStyles({ order: 3, responsive: true })}

    @media and (min-width: 800px) {
      margin: 0.5em 0 ${spaces.sm}px;
    }
  }

  p+h2 {
    margin-top: ${spaces.md}px;
  }

  h3 {
    ${mapHeadingOrderToStyles({ order: 4, responsive: true })}
  }

  p {
    margin: 0 0 1.5em;
    min-width: 100%;
  }
`;
