const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin' )

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    static: './statistics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.png', 'css', 'xml', 'csv', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@model': path.resolve(__dirname, 'src', 'model'),
      '@css': path.resolve(__dirname, 'src', 'css'),
      '@assets': path.resolve(__dirname, 'src', 'assets')
    }
  },
  optimization: {
    splitChunks: {
    chunks: 'all'
    }
    },
  plugins: [new HtmlWebpackPlugin(
    {
      template: './index.html'
    }
  ),
      new CleanWebpackPlugin ()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]'
        }
      }
    ]
  }
};