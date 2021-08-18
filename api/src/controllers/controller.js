const youtubedl = require('youtube-dl-exec')
//const ytdl = require('ytdl-core');

exports.getUrl = async (req, res) => {
  if(req.query.url){
    if(req.query.quality == 'hd'){
      youtubedl(req.query.url, {
        format: 'best[protocol^=http]',
        getUrl: true,
      }).then(output => res.status(200).send(output)).catch(err => res.status(400).send(err))
    }
    if(req.query.quality == 'sd'){
      youtubedl(req.query.url, {
        format: 'worst[protocol^=http]',
        getUrl: true,
      }).then(output => res.status(200).send(output)).catch(err => res.status(400).send(err))
    }
    if(req.query.quality == 'audio'){
      youtubedl(req.query.url, {
        format: 'bestaudio[protocol^=http]',
        getUrl: true,
      }).then(output => res.status(200).send(output)).catch(err => res.status(400).send(err))
    }
  }
};
exports.getInfo = (req, res) => {
  if(req.query.url){
    youtubedl(req.query.url, {
      dumpJson: true,
    }).then(output => res.status(200).send(output)).catch(err => res.status(400).send(err))
  }
}
/*
exports.download2 = (req, res) => {
  var url = req.query.url;    
  res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
  ytdl(url, {format: 'mp4'}).pipe(res);
}
*/



//https://github.com/ytdl-org/youtube-dl/blob/master/README.md
//https://github.com/microlinkhq/youtube-dl-exec

/*
exports.post = (req, res, next) => {
  res.status(201).send('Rota POST!');
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.getById = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota GET com ID! ${id}`);
};*/