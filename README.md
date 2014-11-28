Init:

    npm install

Run Webpack Dev Server [localhost:8080](http://localhost:8080/) or
[localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server/):

    webpack-dev-server --hot --colors --progress --config webpack-dev.config.js

Get production version with Webpack:

    webpack --progress --colors --optimize-minimize --optimize-dedupe

(Optional) To run Stylus watcher:

    stylus -w -u nib src/all.styl -o static/
