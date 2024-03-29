const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const routes = require('./routes');

const app = next({dev});
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();
    
    server.use(handler);
    
    server.get('*', (req, res) => {
      return handle(req, res);
    });
    
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready!');
    });
  });