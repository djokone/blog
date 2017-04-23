'use strict'
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const webpack_base = require('./webpack.base')
const config = require('./config')
console.log(__dirname + '/../..' + config.assets_path)
webpack_base.plugins.push(
  new ProgressBarPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  }),
  new AssetsPlugin({
    path: __dirname + '/../..' + config.assets_path,
    filename: 'assets.json'
  })
)

module.exports = webpack_base
