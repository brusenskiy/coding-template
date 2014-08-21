var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/dev-server",
        "./src/all.js"
    ],

    output: {
        path: __dirname + "/static",
        publicPath: "http://localhost:8080/static",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.styl$/,
                loaders: [
                    "style",
                    ExtractTextPlugin.extract(),
                    "css",
                    "stylus"
                ]
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=20000&mimetype=image/png"
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
}