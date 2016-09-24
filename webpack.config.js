var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/src/js/index.js",
  output: {
    path: __dirname + "/public",
    filename: "js/bundle.js"
  },
  resolveLoader: {
    root: '../node_modules',
    moduleTemplates: ['*-loader']
  },
  module:{
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },{
        test: /.scss?$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
      new DashboardPlugin(),
      new ExtractTextPlugin("css/[name].css"),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      })
  ]
}
