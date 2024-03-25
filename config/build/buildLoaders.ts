import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';
import {buildBabelLoader} from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);

  const cssLoader = buildCssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
