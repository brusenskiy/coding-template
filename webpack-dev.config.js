module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "./src/app.js"
    ],
    module: {
        loaders: [
            { test: /\.(png|jpe?g|gif)$/, loader: "url?limit=5000" },
            { test: /\.(eot|ttf|svg|woff)$/, loader: "file" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.styl$/, loaders: ["style", "css", "stylus"] }
        ]
    }
};
