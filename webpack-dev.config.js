module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "./src/app"
    ],
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?prefix=img/&limit=5000"
            },
            { test: /\.woff2?$/, loader: "url-loader?limit=5000" },
            { test: /\.(eot|ttf|svg)$/, loader: "file-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.styl$/,
                loaders: [
                    "style",
                    "css",
                    "stylus"
                ]
            }
        ]
    }
}
