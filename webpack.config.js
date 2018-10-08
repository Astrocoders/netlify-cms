const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const pkg = require('./package.json')
const { getConfig, rules, plugins } = require('./scripts/webpack')

const isProduction = process.env.NODE_ENV === 'production'

const baseConfig = getConfig()

module.exports = {
  ...baseConfig,
  entry: ['./src/index.js'],
  module: {
    rules: [
      ...Object.entries(rules)
        .filter(([key]) => key !== 'js')
        .map(([, rule]) => rule()),
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.join(__dirname, 'babel.config.js'),
          },
        },
      },
      {
        test: /\.css$/,
        include: [/(redux-notifications|react-datetime)/],
        use: ['to-string-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    ...Object.entries(plugins)
      .filter(([key]) => key !== 'friendlyErrors')
      .map(([, plugin]) => plugin()),
    new webpack.DefinePlugin({
      NETLIFY_CMS_VERSION: null,
      NETLIFY_CMS_CORE_VERSION: JSON.stringify(`${pkg.version}${isProduction ? '' : '-dev'}`),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Netlify CMS is now running at http://localhost:8080'],
      },
    }),
  ],
}
