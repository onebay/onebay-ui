const path = require('path');
const express = require('express');
const fs = require('fs');
// const serialize = require('serialize-javascript');
const { renderToString } = require('@vue/server-renderer');
const manifest = require('./dist/server/ssr-manifest.json');

const server = express();

const appPath = path.join(__dirname, './dist', 'server', manifest['app.js']);
const createApp = require(appPath).default;

server.use('/img', express.static(path.join(__dirname, './dist/client', 'img')));
server.use('/js', express.static(path.join(__dirname, './dist/client', 'js')));
server.use('/css', express.static(path.join(__dirname, './dist/client', 'css')));
server.use('/favicon.ico', express.static(path.join(__dirname, './dist/client', 'favicon.ico')));

server.get('*', async (req, res) => {
  const { app, router } = await createApp();

  router.push(req.url);

  await router.isReady();

  let appContent = await renderToString(app);

  fs.readFile(path.join(__dirname, '/dist/client/index.html'), (err, html) => {
    if (err) {
      throw err;
    }

    appContent = `<div id="app">${appContent}</div>`;

    // eslint-disable-next-line no-param-reassign
    html = html.toString().replace('<div id="app"></div>', `${appContent}`);
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`You can navigate to http://localhost:${port}`);
});
