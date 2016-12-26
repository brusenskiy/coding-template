import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack-dev.config.babel.js';
import fs from 'fs';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.get('/api/list', function(req, res) {
//   res.json(require('./api/list.json'));
// });

app.get('*', (req, res) => {
  let file;
  let stats;

  try {
    file = path.join(__dirname, req.url);
    stats = fs.statSync(file);
  } catch (e) {
    // console.log(`no file ${file}`);
  }

  if (stats && stats.isFile()) {
    res.sendFile(file);
    return;
  }

  try {
    file = path.join(__dirname, 'build', req.url);
    stats = fs.statSync(file);
  } catch (e) {
    // console.log(`no file ${file}`);
  }

  try {
    file = path.join(__dirname, 'src', req.url);
    stats = fs.statSync(file);
  } catch (e) {
    // console.log(`no file ${file}`);
  }

  if (stats && stats.isFile()) {
    res.sendFile(file);
    return;
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

// app.listen(3000, 'localhost', err => if (err) console.log(err));
app.listen(3000, 'localhost');
