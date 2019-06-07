const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: true, removeDescription: true }],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html'
    }),
    new webpack.ProgressPlugin()
  ]
};
