const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { routes } = require('../routes');
 
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/images', express.static('images'));

routes.forEach((route) => {
  const { method, path, middleware, controller, 
    
  } = route;
  app[method](path, ...middleware, controller);
});

module.exports = app;
