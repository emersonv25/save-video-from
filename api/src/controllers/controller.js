const youtubedl = require('youtube-dl-exec')

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
