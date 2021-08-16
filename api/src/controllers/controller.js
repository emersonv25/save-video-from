const youtubedl = require('youtube-dl-exec')

exports.download = (req, res) => {
  if(req.query.url){
    if(req.query.quality == 'hd'){
      youtubedl(req.query.url, {
        //dumpSingleJson: true,
        //dumpJson: true,
        //noWarnings: true,
        //noCallHome: true,
        //noCheckCertificate: true,
        //preferFreeFormats: true,
        //listFormats: true,
        //youtubeSkipDashManifest: true,
        //format: '(best)[protocol^=https]',
        //format: 'best[height<=?720][protocol^=http]',
        format: 'best[protocol^=http]',
        getUrl: true,
      }).then(output => res.status(200).send(output))
    }
  if(req.query.quality == 'sd'){
    youtubedl(req.query.url, {
      format: 'worst[protocol^=http]',
      getUrl: true,
    }).then(output => res.status(200).send(output))
  }
    //.then(output => res.status(200).send(output))
  }
};
exports.detalhes = (req, res) => {
  console.clear()
  if(req.query.url){
    youtubedl(req.query.url, {
      //dumpSingleJson: true,
      //getTitle: true,
      //getThumbnail: true,
      //getDescription: true,
      //getFormat: true,
      //skipDownload: true,

      //getFilename: true,
      dumpJson: true,
      //noWarnings: true,
      //noCallHome: true,
      //noCheckCertificate: true,
      //preferFreeFormats: true,
      //listFormats: true,
      //youtubeSkipDashManifest: true,
      //format: '(best)[protocol^=https]',
      //format: 'best[height<=?720][protocol^=http]',
      //format: 'best[protocol^=http]',
      //getUrl: true,
    }).then(output => res.status(200).send(output))
  }
}


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