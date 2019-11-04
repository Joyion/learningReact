const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({}) ],
    //   splitChunks: {
    //       cacheGroups: {
    //         styles: {
    //             name: 'styles',
    //             test: /\.s?css$/,
    //             chunks: 'all',
    //             enforce: true
    //         }
    //       }
    //   }
  
  },
  module: {
    rules: [
        {
            loader: 'babel-loader',
            test: /\.m?js$/,
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                "plugins": [
                    "@babel/plugin-proposal-object-rest-spread"
                  ]
            }
        },
        {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader,
                {loader: "css-loader", options: {url: false, sourceMap: true}},
                {loader: "sass-loader", options: { sourceMap: true}}
            ]
        }
    ]
},
plugins: [
    new MiniCssExtractPlugin({
        filename: "index.css"
    
    }),
    new HtmlWebpackPlugin({
        title: "Expensify App",
        template: "dist/index.html"
    })

]

 });