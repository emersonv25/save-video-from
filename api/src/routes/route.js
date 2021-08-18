const controller = require('../controllers/controller');

module.exports = (app) => {

   app.get('/geturl/', controller.getUrl); // params: url, quality = sd,hd ou audio
   app.get('/getinfo/', controller.getInfo); // params: url
   /*
   app.get('/download2/', controller.download2);
   app.post('/youtube', YoutubeController.post);
   app.put('/youtube/:id', YoutubeController.put);
   app.delete('/youtube/:id', YoutubeController.delete);
   app.get('/youtube/:id', YoutubeController.getById);
   */
}