const youtubedl = require('youtube-dl-exec')

// facebook e instagram podem exigir autenticação, 
// Solução: exportar os cookies usando a extensão do chrome: Get cookies.txt
//  ----------  caminho dos cookies -------------------------
const cookiesFacebook = "./cookies/facebook.com_cookies.txt"
const cookiesInstagram = "./cookies/instagram.com_cookies.txt"
const cookies = true // caso não for utilizar os cookies, definir como false

// quality = worst, best, bestaudio
exports.getUrl = async (req, res) => {
  let url = req.query.url;
  let quality = req.query.quality;
  if (!(url && quality)) {
    res.status(400).send("PARAMETROS INVALIDOS");
  } else {
    if ((url.includes("facebook") || url.includes("instagram")) && cookies == true) {
      let cookie = url.includes("facebook") ? cookiesFacebook : cookiesInstagram;
      youtubedl(url, {
        cookies: cookie,
        format: quality + '[protocol^=http]',
        getUrl: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Download não suportado");
        err;
      })
    } else {
      youtubedl(url, {
        format: quality + '[protocol^=http]',
        getUrl: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
      }).then(output => res.status(200).send(output)).catch((err) => {
        res.status(400).send("Erro: Download não suportado");
        err;
      })
    }
  };
}
exports.getInfo = (req, res) => {
    let url = req.query.url;

    if (!url) {
      res.status(400).send("PARAMETROS INVALIDOS");
    }
    else {
      if ((url.includes("facebook") || url.includes("instagram")) && cookies == true) {
        let cookie = url.includes("facebook") ? cookiesFacebook : cookiesInstagram;
        youtubedl(url, {
          dumpJson: true,
          cookies: cookie,
          noWarnings: true,
          noCallHome: true,
          noCheckCertificate: true,
        }).then(output => res.status(200).send(output)).catch((err) => {
          res.status(400).send("Erro: Url invalida ou não suportada");
          err;
        })
      } else {
        youtubedl(url, {
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
  };
