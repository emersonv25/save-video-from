const youtubedl = require('youtube-dl-exec')

// quality = worst, best, bestaudio
exports.getUrl = async (req, res) => {
  if(req.query.url && req.query.quality){
    youtubedl(req.query.url, {
      format: req.query.quality + '[protocol^=http]',
      noWarnings: true,
      noCallHome: true,
      noCheckCertificate: true,
      getUrl: true,
    }).then(output => res.status(200).send(output)).catch(err => res.status(400).send(err))
  }
  else{
    res.status(400).send("PARAMETROS INVALIDOS")
  }
};
exports.getInfo = (req, res) => {
  if(req.query.url){
    youtubedl(req.query.url, {
      noWarnings: true,
      noCallHome: true,
      noCheckCertificate: true,
      dumpJson: true,
    }).then(output => res.status(200).send(output)).catch(err => res.status(400).send(err))
  }
  else{
    res.status(400).send("PARAMETROS INVALIDOS")
  }
};