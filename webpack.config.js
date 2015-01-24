var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Webpack = require("webpack");

module.exports = {
    entry: [
        "./src/app.js"
    ],
    output: {
        path: __dirname + "/static",
        publicPath: "/static/",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.(png|jpe?g|gif)$/, loader: "url?prefix=img/&limit=5000" },
            { test: /\.(eot|ttf|svg|woff)$/, loader: "file" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.styl$/, loaders: [
                "style",
                ExtractTextPlugin.extract(),
                "css",
                "stylus"
            ]}
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.optimize.DedupePlugin()
    ]
};
