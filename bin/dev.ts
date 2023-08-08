import webpack from 'webpack';
import nodemon from 'nodemon';
import webpackConfig from '../webpack.config';
import path from 'path';

const compiler = webpack(webpackConfig);

compiler.run((err) => {
  if (err) console.log(`Ошибка: `, err);
  compiler.watch({}, (err) => {
    if (err) {
      console.log(`Ошибка: `, err);
    }
    console.log('Загрузка...');
  });
  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist'),
      // path.resolve(__dirname, "../dist/server"),
      // path.resolve(__dirname, "../dist/client"),
    ],
  });
});
