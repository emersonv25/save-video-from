const express    = require('express');
const config     = require('config');
//const consign    = require('consign');
const cors = require('cors');
module.exports = () => {
  const app = express();
  app.use(cors());
  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(express.json());

  return app;
};