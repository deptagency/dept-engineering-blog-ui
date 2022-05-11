import { spaces } from "@components/common/spaces";
import { mapHeadingOrderToStyles } from "@components/typography/Headings";

export const h1Styles = `
  h1 {
    ${mapHeadingOrderToStyles({ order: 2, responsive: true, noSpaces: true})}
    min-width: 100%;
  }

  p+h1,
  ul+h1,
  ol+h1,
  iframe+h1 {
    margin-top: ${spaces.lg}px;
  }
`;

export const h2Styles = `
  h2 {
    ${mapHeadingOrderToStyles({ order: 3, responsive: true })}
    min-width: 100%;
  }

  p+h2,
  ul+h2,
  ol+h2,
  iframe+h2 {
    margin-top: ${spaces.lg}px;
  }
`;

export const h3Styles = `
  h3 {
    ${mapHeadingOrderToStyles({ order: 4, responsive: true })}
    min-width: 100%;
  }

  h2+h3 {
    margin-top: ${spaces.md}px;
  }
`;

export const h4Styles = `
  h4 {
    ${mapHeadingOrderToStyles({ order: 4, responsive: true })}
    min-width: 100%;
  }

  h2+h4 {
    margin-top: ${spaces.md}px;
  }

  h3+h4 {
    margin-top: 0;
  }
`;

export const h5Styles = `
  h5,
  h6 {
    ${mapHeadingOrderToStyles({ order: 5, responsive: true })}
    min-width: 100%;
  }
`;
