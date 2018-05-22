const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require( 'webpack' );
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

var common = {

    entry: {
        app: PATHS.app
    },

    output: {
        path: PATHS.build,
        filename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo Browser'
        }),

        new webpack.HotModuleReplacementPlugin()
    ]
};

if ( TARGET === 'start' || !TARGET ) {
    module.exports = merge( common, {
        //devtool: 'eval-source-map',
        devtool: 'eval',

        module: {
            loaders: [

                {
                    test: /\.css$/,
                    loaders: [ 'style-loader', 'css-loader' ],
                    include: PATHS.app
                },

                {
                    test: /\.jsx?$/,
                    loaders: [ 'babel-loader' ],
                    include: PATHS.app
                }
            ]
        },

        devServer: {
            // Display only errors to reduce the amount of output.
            stats: "errors-only",
            //colors: true,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            overlay: {
                errors: true,
                warnings: true,
            },

            // Parse host and port from env to allow customization.
            //
            // If you use Docker, Vagrant or Cloud9, set
            // host: options.host || "0.0.0.0";
            //
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: process.env.HOST, // Defaults to `localhost`
            port: process.env.PORT, // Defaults to 8080
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack Demo Browser'
            }),

            new webpack.HotModuleReplacementPlugin()
        ]
    } );
}
