const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
      // new webpack.DefinePlugin({
      //   VERSION: JSON.stringify(packageJson.version), // !!! JSON.stringify()
      // })
    ]
    config.resolve.alias["next/image"] = require.resolve("./NextImage.js")
    config.resolve.fallback.fs = false;
    config.resolve.fallback.stream = false;
    config.resolve.fallback.http = false;
    config.resolve.fallback.https = false;

    return config
  },
  staticDirs: ['../styles', '../public']
}
