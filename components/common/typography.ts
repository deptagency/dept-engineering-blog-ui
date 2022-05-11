import { colors } from "./colors";

export const DEFAULT_COPY_STYLES = `
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6em;
  color: ${colors.midgrey};
`

export const BASE_TYPOGRAPHIC_STYLES = `
  font-family: 'Maison Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ${DEFAULT_COPY_STYLES}
  font-style: normal;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
`;
