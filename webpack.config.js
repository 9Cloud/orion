'use strict';
const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin  = require('progress-bar-webpack-plugin');

//const nodeEnv = process.env.NODE_ENV || 'development';
const nodeEnv = 'production';
const isProd  = nodeEnv === 'production';

// we can make this an array if we want to run webpack mulitple times
module.exports = () => {
    let plugins       = [];
    let optimizations = [];
    
    
    if ( isProd ) {
        optimizations.push(
          new webpack.optimize.UglifyJsPlugin({
              mangle   : true,
              compress : {
                  sequences   : true,
                  dead_code   : true,
                  conditionals: true,
                  booleans    : true,
                  unused      : true,
                  if_return   : true,
                  join_vars   : true,
                  drop_console: true,
                  warnings    : false
              },
              output   : {
                  comments: false
              },
              sourceMap: false
          })
        )
    }
    
    return {
        target     : 'web',
        devtool    : 'eval-cheap-module-source-map',
        entry      : {
            vendor    : ["react", "react-dom", "mobx", "mobx-react", "moment",  "bluebird", "classnames", "redbox-react"], //  "prosemirror", markdown-it
            tide      : ["tide"],
            helpers   : [, "./orion/ui/helpers.js"],
            header    : ["./orion/ui/header.js"],
            components: ["./orion/ui/components.js"],
            forms     : ["./orion/ui/forms.js"],
            example   : './site/examples/routes.js',
            guide     : './site/guide/routes.js',
            site      : ['./site/index.js']
        },
        resolve    : {
            root : path.resolve("."),
            alias: {
                site : path.resolve("site"),
                orion: path.resolve("orion"),
                tide : path.resolve("node_modules/tide")
            }
        },
        output     : {
            publicPath   : '/js/',
            filename     : '[name].js',            // for production build: [name].[hash].js
            chunkFilename: '[name].js',
            path         : path.resolve(__dirname, 'build')
        },
        module     : {
            loaders: [
                {
                    test  : /\.html$/,
                    loader: 'file',
                    query : {
                        name: '[name].[ext]'
                    }
                },
                {
                    test   : /\.css$/,
                    loaders: [
                        'style',
                        'css'
                    ]
                },
                {
                    test   : /\.json/,
                    loaders: [
                        'json'
                    ]
                },
                {
                    test   : /\.js$/,
                    loader : 'babel',
                    include: [
                        path.resolve("orion"),
                        path.resolve("site"),
                        path.resolve('node_modules', 'tide')
                    ],
                    query  : {
                        
                        compact       : true,
                        cacheDirectory: true,
                        presets       : ["es2015-loose", "react", "stage-0"],
                        plugins       : ["transform-decorators-legacy", "transform-runtime"]
                    }
                }
            ]
        },
        plugins    : plugins.concat(
          [
//              new CleanWebpackPlugin(['build']),
//              new webpack.optimize.CommonsChunkPlugin({
//                  names    : ["vendor", "tide"],
//                  minChunks: Infinity,
//                  filename : '[name].[hash].bundle.js'
//              }),
//              new webpack.optimize.CommonsChunkPlugin({
//                  name     : "orion",
//                  chunks   : ["header", "helpers", "components", "forms"],
//                  minChunks: 2,
//                  filename : '[name].[hash].bundle.js'
//              }),
//              new webpack.optimize.CommonsChunkPlugin({
//                  name     : "common",
//                  minChunks: 2,
//                  chunks   : ["guide", "example", "site", "orion"],
//                  filename : "[name].[hash].js"
//              }),
//              new webpack.optimize.CommonsChunkPlugin({
//                  name: "manifest"
//              }),
//              new webpack.optimize.OccurrenceOrderPlugin(true),
              new webpack.LoaderOptionsPlugin({
                  minimize: true,
                  debug   : false
              })
          ],
          optimizations,
          [
              new webpack.optimize.UglifyJsPlugin({
                  compress: {
                      warnings: false
                  },
                  output  : {
                      comments: false
                  },
                  mangle  : false
              }),
              new webpack.DefinePlugin({
                  'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
              }),
              new HtmlWebpackPlugin({
                  filename: 'index.html',
                  template: path.join('site/template.ejs')
              })
          ],
          new webpack.NamedModulesPlugin(),
          new webpack.NoErrorsPlugin(),
          new ProgressBarPlugin()
        ),
        recordsPath: path.resolve("./webpack.records.json"),
        devServer  : {
            contentBase : 'build/',
            hot         : false,
            inline      : true,
            quiet       : false,
            noInfo      : true,
            progress    : true,
            watchOptions: {
                aggregateTimeout: 300,
                poll            : 1000
            },
            proxy       : {
                '/beta/': {
                    target: 'http://localhost:3001/',
                    secure: false
                }
            }
        }
    };
};

// Example: https://github.com/housinghq/webpack.config/blob/master/webpack.production.config.js