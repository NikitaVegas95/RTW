import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../client/App';

const PORT = 8000;
const app = express();

app.use('/', (req, res) => {
  fs.readFile(path.resolve('./dist/client/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Ошибка не сервере: ');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOM.renderToString(App())}</div>`,
      ),
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`Стартуем http://localhost:${PORT}`);
});
