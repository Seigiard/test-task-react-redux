const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
      { test: /\.css/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: 'source-map'
}
