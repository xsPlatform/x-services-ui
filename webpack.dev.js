const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new WebpackBuildNotifierPlugin(),
  ],
  watchOptions: {
    poll: 1000,
    ignored: ['node_modules'],
  },
});
