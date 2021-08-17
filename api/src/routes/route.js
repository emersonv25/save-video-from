const controller = require('../controllers/controller');

module.exports = (app) => {
   app.get('/download/', controller.download);
   app.get('/detalhes/', controller.detalhes);
   app.get('/download2/', controller.download2);
   /*
   app.post('/youtube', YoutubeController.post);
   app.put('/youtube/:id', YoutubeController.put);
   app.delete('/youtube/:id', YoutubeController.delete);
   app.get('/youtube/:id', YoutubeController.getById);
   */
}