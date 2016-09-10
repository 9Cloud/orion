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
            vendor: ["react", "react-dom", "mobx", "mobx-react", "moment", "prosemirror"],
            orion : "./orion/index.js",
            guide   : './site/guide/conf.js',
            examples: './site/examples/conf.js',
            site    : './site/index.js'
        },
        resolve  : {
            root : path.resolve("."),
            alias: {
                site  : path.resolve("site"),
                orion: path.resolve("orion"),
                tide : path.resolve("tide"),
            }
        },
        output   : {
            publicPath: '/js/',
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
                    test   : /\.json/,
                    loaders: [
                        'json'
                    ]
                },
                {
                    test   : /\.js$/,
                    loader : 'babel',
                    exclude: /(node_modules|bower_components)/,
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
//              new webpack.optimize.CommonsChunkPlugin({
//                  name     : 'commons',
//                  minChunks: 2,
//                  chunks   : ['tide', 'orion', 'app'],
//                  filename : 'commons.bundle.js'
//              }),
              new webpack.optimize.OccurrenceOrderPlugin(true),
              new webpack.LoaderOptionsPlugin({
                  minimize: true,
                  debug   : true
              })
          ],
          optimizations,
          [
              new webpack.DefinePlugin({
                  'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
              }),
              new HtmlWebpackPlugin({
                  filename: 'index.html',
                  template: path.join('site/template.ejs')
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
            quiet: false,
            noInfo: true,
            watchOptions: {
               aggregateTimeout: 300,
               poll: 1000
            },
            proxy      : {
                '/beta/'   : {
                    target: 'http://localhost:3001/',
                    secure: false
                }
            }
        }
    };
};