const path = require('path');
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Expensify App",
            template: "dist/index.html"

        })
    
    ]
})