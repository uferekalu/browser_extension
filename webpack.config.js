const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: {
    background: path.join(__dirname, 'src', 'background', 'background.js'),
    popup: path.join(__dirname, 'src', 'popup', 'popup.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'popup', 'popup.html'),
      filename: 'popup.html',
      chunks: ['popup']
    }),
    
    new Dotenv(),
 
    new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets/icons', to: 'icons' },
          { from: 'src/assets/images', to: 'images' },
          { from: 'manifest.json', to: 'manifest.json' },
          { from: 'src/popup/popup.css', to: 'popup.css' }, 
          { from: 'src/popup/styles/effects.css', to: 'style_modules/effects.css' }, 
          // { from: 'src/popup/partials/header.html', to: 'header.html' }, 
          { from: 'src/content', to: 'content' }, 
          { from: 'src/background', to: 'background' }, 
          { from: 'manifest.json', to: 'manifest.json' } 

        ]
      })
  ],
  
};
