'use strict';
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const nodeEnv = process.env.NODE_ENV || 'development';
const nodeEnv = 'production';
const isProd  = nodeEnv === 'production';

module.exports = () => {
    let plugins       = [];
    let optimizations = [];


    if ( isProd ) {
        optimizations.push(
          new webpack.optimize.UglifyJsPlugin({
              compress : {
                  warnings: false
              },
              output   : {
                  comments: false
              },
              sourceMap: false
          })
        )
    }

    return {
        target   : 'web',
        devtool  : 'eval-cheap-module-source-map',
        entry    : {
            vendor: ["react", "react-dom", "mobx", "mobx-react", "history", "moment"],
            //other: ["markdown-it"],
            //            //prosemirror: ["prosemirror"],
            orion : ["orion"],
            tide  : ["tide"],
            app   : './app/index.webpack.js'
        },
        resolve  : {
            root : path.resolve("."),
            alias: {
                app  : path.resolve("app"),
                tide : "/Users/kay/Projects/ceres/Shana/clients/tide",
                orion: path.resolve("lib/orion/orion")
            }
        },
        output   : {
            publicPath: '',
            filename  : '[name].js',
            path      : path.resolve(__dirname, 'build')
        },
        module   : {
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
                    test   : /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader : 'babel',
                    query  : {
                        compact       : true,
                        cacheDirectory: true,
                        presets       : ["es2015-loose", "react", "stage-0"],
                        plugins       : ["transform-decorators-legacy", "transform-runtime"]
                    }
                }
            ]
        },
        plugins  : plugins.concat(
          [
              new webpack.optimize.CommonsChunkPlugin({
                  name     : 'vendor',
                  minChunks: Infinity,
                  filename : 'vendor.bundle.js'
              }),
              new webpack.optimize.CommonsChunkPlugin({
                  name     : 'commons',
                  minChunks: 2,
                  chunks   : ['tide', 'orion', 'app'],
                  filename : 'commons.bundle.js'
              }),
              new webpack.optimize.OccurrenceOrderPlugin(true),
              new webpack.LoaderOptionsPlugin({
                  minimize: true,
                  debug   : false
              })
          ],
          optimizations,
          [
              new webpack.DefinePlugin({
                  'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
              }),
              new HtmlWebpackPlugin({
                  filename: 'index.html',
                  title   : 'Luscious Dev Build',
                  template: path.join('app/template.ejs')
              })
          ],
//          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin(),
          new webpack.NoErrorsPlugin()
        ),
        devServer: {
            contentBase: '.',
            hot        : false,
            inline     : true,
            quiet: true,
            noInfo: true,
            watchOptions: {
               aggregateTimeout: 300,
               poll: 1000
            },
            proxy      : {
                '/beta/'   : {
                    target: 'http://localhost:3001/',
                    secure: false
                },
                '/clients/': {
                    target: 'http://localhost:3001/',
                    secure: false
                },
                '/static/' : {
                    target: 'http://localhost:3001/',
                    secure: false
                },
                '/fonts/' : {
                    target: 'http://localhost:3001/',
                    secure: false
                }
            }
        }
    };
};