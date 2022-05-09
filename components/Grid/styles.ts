import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding-left: 0;
  padding-right: 0;
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
  padding: 0 24px;
  @media (min-width: 900px) {
    padding: 0 calc(100% / 12);
  }
`
);

interface ColumnProps {
  width?: string
  direction?: string
  padding?: string
}

export const Col = styled.div<ColumnProps>(
  ({
    width = "100%",
    direction = "column",
    padding = 0,
  }) => `
    flex: 0 0 ${width};
    flex-direction: ${direction};
    justify-content: flex-start;
    padding: ${padding};
    @media (max-width: 900px) {
      flex: 0 0 100%;
    }
`,
);

export const FirstPostCol = styled(Col)`
  @media (max-width: 1200px) {
    flex: 0 0 100%;
  }
`