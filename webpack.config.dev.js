const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('babel-polyfill');

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        app: [
            'babel-polyfill',
            'todomvc-common/base.js',
            './src/main.es6',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/static/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'hJSX' }],
                    ],
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true,
        }),
    ],
};
