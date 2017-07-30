const process = require('process');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const stylusAutoprefixer = require('autoprefixer-stylus');

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const Merge = require('webpack-merge');

const { join } = require('path');
// TODO: HTML MINIFICATION




const htmlMinify = process.env.NODE_ENV === 'PRODUCTION' ? {
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true
      } : false; 

const commonConfig = {
  entry: {
    index: ['./src/app.js'],
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.html', '.styl'],
  },
  node: {
    fs: 'empty',
    // child_process: 'empty',
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: [
          join(__dirname, 'node_modules'),
        ],
        use: ['babel-loader']
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {

              mozjpeg: {

                progressive: true,

              },

              gifsicle: {

                interlaced: false,

              },

              optipng: {

                optimizationLevel: 4,

              },

              pngquant: {

                quality: '65-70',

                speed: 3,

              },


            }
          }
        ]
      },

      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },


    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: htmlMinify
    }),

    new ExtractTextPlugin('style.css'),


    new FriendlyErrorsPlugin()
  ]
};

const devConfig = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  devServer: {
    contentBase: join(__dirname, "dist"),
    // publicPath: '/',
    compress: true,
    port: 8080,
    historyApiFallback: true
  },

  entry: {
    server: "webpack-dev-server/client?http://localhost:8080/"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ]
};

const prodConfig = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },

          use: ['css-loader', 'stylus-loader']
        })
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },

          use: ['css-loader']
        })
      },

      


    ],
  },

  plugins: [


    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {

        default: {
          use: [stylusAutoprefixer({ browsers: ['last 3 versions'] })],
        },
      },
    }),

    new ExtractTextPlugin('style.css'),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.AggressiveMergingPlugin()
  ]
};


module.exports = (process.env.NODE_ENV === 'development' ? Merge(commonConfig, devConfig) : Merge(commonConfig, prodConfig)); 
