import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackConfiguration } from 'webpack-cli';

export default {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/env', { targets: 'defaults' }],
                ['@babel/react', { runtime: 'automatic' }],
                ['@babel/typescript', { allExtensions: true, isTSX: true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
       },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html'),
      filename: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.mjs', '.cjs', '.tsx', '.jsx'],
  },
} as WebpackConfiguration
