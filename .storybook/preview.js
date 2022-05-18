import { Global } from '@emotion/react'
import { fonts } from '@components/common/fonts'
import { globals } from '@components/common/globals'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/**
 * Ensure global styles and fonts are used for each story.
*/
const withGlobals = (Story, context) => (
  <>
    <Global styles={fonts} />
    <Global styles={globals} />
    <Story {...context} />
  </>
);

export const decorators = [withGlobals];
