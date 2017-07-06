'use strict';
const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ProgressBarPlugin  = require('progress-bar-webpack-plugin');
const HappyPack          = require('happypack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    target     : 'web',
    devtool    : 'cheap-module-source-map',
    recordsPath: path.resolve("build/webpack.records.json"),
    performance: {hints: false},
    profile: false,
    cache: true,
    entry      : {
        vendor    : ["react", "react-dom", "mobx", "mobx-react",
                      "bluebird", "classnames",
                      "tide"], //  "prosemirror", markdown-it
        site      : ['./site/index.ts']
    },
    resolve    : {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            site : path.resolve("site"),
            orion: path.resolve("orion"),
            tide : path.resolve("node_modules/tide")
        }
    },
    output     : {
        publicPath   : '/js/',
        filename     : '[name].js', // for production build: [name].[hash].js
        chunkFilename: '[name].js',
        path         : path.resolve(__dirname, 'build')
    },
    module     : {
        loaders: [
            { test  : /\.html$/, loader: 'file-loader', query : { name: '[name].[ext]' } },
            { test   : /\.css$/,  loaders: [ 'style-loader',  'css-loader' ] },
            { test   : /\.json/,  loaders: ['json-loader'] },
            { test   : /\.js|\.ts$/,  loader : 'happypack/loader',
                include: [
                    path.resolve("orion"),
                    path.resolve("site"),
                    path.resolve('node_modules', 'tide')
                ]
            }
        ]
    },
    plugins  : [
      new webpack.optimize.CommonsChunkPlugin({
          names    : ["vendor"],
          minChunks: Infinity,
          filename : '[name].js'
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: "manifest"
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true,  debug   : false,
          verbose: false,  stats: false,
      }),
      new webpack.DefinePlugin({
          'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
      }),
      new HappyPack({
          threads: 3,
          loaders: [{
                  test   : /\.js|\.ts$/,
                  loader : 'ts-loader',
                  include: [
                      path.resolve("orion"),
                      path.resolve("site"),
                      path.resolve('node_modules', 'tide')
                  ],
                  exclude: [ path.resolve("node_modules"), ],
                  query  : {
                      compact       : true,
                      babelrc       : false,
                      cacheDirectory: path.resolve("build/.babel-cache"),
                      presets: [ [ "es2015", { loose: true } ],  "react", "stage-2"],
                      plugins: [ "transform-decorators-legacy",
                                 [ "transform-runtime", { "polyfill"   : false,  "regenerator": true } ] ]
                  }
          }],
          tempDir: path.resolve('build/.happypack'),
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.UglifyJsPlugin({
         cacheFolder: path.resolve('build/.uglify/'),
         mangle: true,
         minimize: true,
         debug: false,
         comments   : false,
         sourceMap  : false,
         compressor: {
             warnings: false
         },
         exclude: ['site.js']
     }),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join('site/template.ejs')
      }),
      new ProgressBarPlugin()
    ],
    devServer  : {
        contentBase : 'build/',
        hot         : false,
        stats: 'errors-only',
        lazy        : false,
        inline      : true,
        quiet       : true,
        noInfo      : true,
        host        : "localhost",
        port        : 8080,
        compress    : true,
        https       : true,
        watchOptions: {
            aggregateTimeout: 300,
            poll            : 1000
        }
    }
};