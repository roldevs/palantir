const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

// var webpack = require('webpack');
// var WebpackNotifierPlugin = require('webpack-notifier');
// var UnusedFilesWebpackPlugin = require('unused-files-webpack-plugin')['default'];

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './app',
  output: {
    path: path.join(__dirname, '../../public'),
    filename: 'app.js',
    libraryTarget: 'var',
    library: 'Hall'
  },
  // Turn on sourcemaps
  devtool: 'source-map-inline',
  resolve: {
    extensions: ['.ts', '.js', '.json'],

    // Make sure root is src
    // root: __dirname,

    // remove other default values
    modules: ['../../node_modules']
  },
  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   loader: 'source-map-loader'
    // }],
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      }, {
        loader: 'ts-loader'
      }]
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: (process.env.ENVIRONMENT === 'development'),
      uglifyOptions: {
        output: {
          comments: false
        }
      },
    }),
    // new WebpackNotifierPlugin({
    //   alwaysNotify: true
    // }),
    // new UnusedFilesWebpackPlugin({
    //   pattern: 'src/**/*.ts',
    //   ignore: [
    //     'src/**/*.spec.ts',
    //     'src/webpack.config.js'
    //   ]
    // })
  ]
};
