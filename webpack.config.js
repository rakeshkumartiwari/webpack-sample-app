
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');


module.exports = function () {
    return {
        entry: './js/app.js',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist')
        },
        context: resolve(__dirname, 'src'),
        plugins: [
            /** Html Webpack plugin helps to create index.html file for dev server */
            new HtmlWebpackPlugin(),
            new ExtractTextWebpackPlugin("myStyle.css")
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract(['style-loader', 'css-loader'])
                }
            ]
        }
    }
}