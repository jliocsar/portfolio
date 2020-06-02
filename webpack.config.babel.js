import { join, resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const RULES = {
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
      ],
      plugins: [
        '@babel/transform-runtime',
      ],
    },
  },
  assets: {
    test: /\.(png|svg|jpg|gif)$/,
    exclude: /node_modules/,
    loader: 'file-loader',
  },
  pug: {
    test: /\.pug$/,
    exclude: /node_modules/,
    loader: 'pug-loader',
  },
};

export default {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
  ],
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  resolve: {
    alias: {
      Components: resolve(__dirname, 'src/view/components/'),
      Utilities: resolve(__dirname, 'src/utils/'),
      Assets: resolve(__dirname, 'src/assets/'),
      View: resolve(__dirname, 'src/view/'),
      Icons: resolve(__dirname, 'src/assets/icons/'),
    },
  },
  module: {
    exprContextCritical: false,
    rules: [
      RULES.js,
      RULES.assets,
      RULES.pug,
    ],
  },
};
