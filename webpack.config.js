const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './App',
        main: './styles/main.css'
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'build'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["transform-react-jsx"],
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin("[name].css")
    ],

    watch: true
};