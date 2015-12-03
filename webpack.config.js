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
