const fs = require('fs');
const filesToParse = [
  './build/index.html',
  './build/material-forms.html'
];

const readFile = (path, then) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) console.log(err);
    then(data);
  });
};

readFile('./webpack-assets.json', data => {
  const assets = JSON.parse(data);
  const replacements = {
//    '/static/app.css': assets.app.css,
    '/static/app.js': assets.app.js,
    '/static/vendors.js': assets.vendor.js,
    '/static/material-forms.js': assets['material-forms'].js,
  };

  filesToParse.forEach(file => readFile(file, _data => {
    let content = _data;

    Object.getOwnPropertyNames(replacements).forEach(
      placeholder => {
        content = content.replace(
          new RegExp(placeholder),
          replacements[placeholder]
        );
      }
    );

    fs.writeFile(file, content, 'utf8', err => {
      if (err) console.log(err);
    });
  }));
});
