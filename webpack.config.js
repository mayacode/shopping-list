var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    devtool: 'eval-source-map',
    debug: true,
    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:8040',
            'webpack/hot/only-dev-server',
            './src/js/main.js'
        ]
    },
    output: {
        path: './',
        filename: "[name].js",
        publicPath: "//sl.dev:8040/"
    },
    devServer: {
        contentBase: __dirname,
        inline: false,
        hot: true,
        devtool: "#eval",
        colors: true,
        quiet: false,
        publicPath: "//sl.dev:8040/",
        historyApiFallback: false,
        host: "127.0.0.1",
        port: "8040",
        headers: {'Access-Control-Allow-Origin': '*'}
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname,'src/js'),
                loader: 'react-hot'
            },
            {
                test: /\.jsx?$/,
                include: path.join(__dirname,'src/js'),
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

/*"use strict";

let webpack = require("webpack");
let path = require("path");

module.exports = {
    context: __dirname,
    devtool: 'eval-source-map',
    debug: true,
    devServer: {
        inline: true,
        hot: true,
        contentBase: __dirname,
        devtool: "#eval",
        colors: true,
        quiet: false,
        noInfo: false,
        publicPath: "//shopping-list.dev:8040/",
        historyApiFallback: false,
        host: "10.0.0.33",
        port: "8040",
        headers: {'Access-Control-Allow-Origin': '*'}
    },
    entry: {
        app: [
            './app/app.js'
        ]
    },
    output: {
        path: "./dist",
        publicPath: "//shopping-list.dev:8040/",
        filename: "[name].js"
    },
    resolve: {
        root: 'node_modules',
        extensions: [
            '',
            '.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                loader: 'react-hot'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "app"),
                loader: "eslint-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()/*,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.DedupePlugin()*//*
    ]
};
*/
