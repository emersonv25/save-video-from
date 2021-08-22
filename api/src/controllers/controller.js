const youtubedl = require('youtube-dl-exec')

// facebook e instagram podem exigir autenticação, 
// Solução: exportar os cookies usando a extensão do chrome: Get cookies.txt
//  ----------  caminho dos cookies -------------------------
const cookiesFacebook = "./cookies/facebook.com_cookies.txt"
const cookiesInstagram = "./cookies/instagram.com_cookies.txt"
const cookies = false // caso não for utilizar os cookies, definir como false

// quality = worst, best, bestaudio
exports.getUrl = async (req, res) => {
  if(req.query.url && req.query.quality){
    if(req.query.url.includes("facebook") && cookies == true){
      youtubedl(req.query.url, {
        cookies: cookiesFacebook,
        format: req.query.quality + '[protocol^=http]',
        getUrl: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Download não suportado");
        err;
      })
    }
    else if(req.query.url.includes("instagram") && cookies == true){
      youtubedl(req.query.url, {
        cookies: cookiesInstagram,
        format: req.query.quality + '[protocol^=http]',
        getUrl: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Download não suportado");
        err;
      })
    }
    else{
      youtubedl(req.query.url, {
        format: req.query.quality + '[protocol^=http]',
        getUrl: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Download não suportado");
        err;
      })   
    }
  }
  else{
    res.status(400).send("PARAMETROS INVALIDOS")
  }
};
exports.getInfo = (req, res) => {
  if(req.query.url){
    if(req.query.url.includes("facebook") && cookies == true){
      youtubedl(req.query.url, {
        dumpJson: true,
        cookies: cookiesFacebook,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Url invalida ou não suportada");
        err;
      })
    }  
    else if(req.query.url.includes("instagram") && cookies == true){
      youtubedl(req.query.url, {
        dumpJson: true,
        cookies: cookiesInstagram,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Url invalida ou não suportada");
        err;
      })
    }  
    else{
      youtubedl(req.query.url, {
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        dumpJson: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Url invalida ou não suportada");
        err;
      })
    }    
  }
  else{
    res.status(400).send("PARAMETROS INVALIDOS")
  }
};
