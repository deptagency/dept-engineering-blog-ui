import styled from '@emotion/styled';
import { MAX_WIDTH, GRID_SYSTEM, BREAKPOINTS } from '@components/common/spaces';

const mq = (n: keyof typeof BREAKPOINTS) => `@media (min-width: ${BREAKPOINTS[n]}px)`;

export const GridWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  padding: 0px;
  ${mq('md')} {
    padding: 0 calc(100% / 12);
  }
`

interface RowProps {
  direction?: string;
}

export const Row = styled.div<RowProps>(
  ({
    direction = "row"
  }) => `
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${direction};
  ${mq('md')} {
    width: calc(100% + 24px);
    margin-left: -24px;
    padding: 0 calc(100% / 12);
  }
`
);

interface ColumnProps {
  direction?: string
  padding?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

const getFlexBasis = (value: number) => {
  return (value / GRID_SYSTEM) * 100
}

export const Col = styled.div<ColumnProps>(
  ({
    direction = "column",
    padding = 0,
    xs,
    sm,
    md,
    lg,
    xl,
  }) => `
    flex: 0 0 100%;
    flex-direction: ${direction};
    justify-content: flex-start;
    padding: ${padding};
    ${mq('xs')} {
      ${xs && (
        `flex: 0 0 ${getFlexBasis(xs)}%;`
      )}
    }
    ${mq('sm')} {
      ${sm && (
        `flex: 0 0 ${getFlexBasis(sm)}%;`
      )}
    }
    ${mq('md')} {
      ${md && (
        `flex: 0 0 ${getFlexBasis(md)}%;`
      )}
    }
    ${mq('lg')} {
      ${lg && (
        `flex: 0 0 ${getFlexBasis(lg)}%;
        `)
      };
    }
    ${mq('xl')} {
      ${xl && (
        `flex: 0 0 ${getFlexBasis(xl)}%;`
      )}
    }
`,
);
