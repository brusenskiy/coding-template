/**
 * Webpack Dev Server
 */

var webpackDevServer = require("webpack-dev-server"),
    webpack = require("webpack"),
    config = require("./webpack-dev.config.js");

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, "localhost", function (err, result) {
    if (err) console.log(err);
    console.log("Listening at localhost:3000");
});


/**
 * HTTP Server
 */

var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express();

app.listen(3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/list", function(req, res) {
    //res.json(require("./src/modules/module/list.json"));
    res.json([
        {"id": 1, "title": "Title 1"},
        {"id": 2, "title": "2"},
        {"id": 3, "title": "333"}
    ]);
});
