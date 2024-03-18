import path from 'node:path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common';

export default merge(webpackCommon, {
  mode: 'production',
  target: 'web',
  entry: {
    client: './src/client/index',
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: '/travelbookie/bundle',
    filename: '[name].js',
  },
});
