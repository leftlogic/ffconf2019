const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config }) => {
  // avoid having to import React in all the components
  config.module.rules[0].use[0].options.plugins.unshift('react-require');
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      ...config.plugins,
      // https://github.com/storybookjs/storybook/issues/714#issuecomment-500219893
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: './static',
        },
      ]),
    ],
  };
};
