import path from 'node:path';
import express from 'express';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackCommon from './webpack.common';

const devConfig = merge(webpackCommon, {
  mode: 'development',
  target: 'web',
  entry: {
    main: [
      path.resolve(__dirname, './client/index.tsx'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', 
    ],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/travelbookie/bundle',
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});

export default devConfig;

export function hotReloadMiddleware() {
  const compiler = webpack(devConfig);
  const app = express();
  app.use(webpackDevMiddleware(compiler, { publicPath: devConfig.output!.publicPath }));
  app.use(webpackHotMiddleware(compiler));

  return { compiler, app };
}
