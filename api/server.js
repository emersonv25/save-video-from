const app = require('./config/express')();
const port = app.get('port');
require('./src/routes/index')(app);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
