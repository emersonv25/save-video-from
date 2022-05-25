const router = require('express').Router()

const ApiController = require('@controllers/api')
const YoutubedlController = require('@controllers/youtubedlController')

router.get('/', ApiController.HelloWorld)
router.get('/geturl', YoutubedlController.getUrl)
router.get('/getinfo', YoutubedlController.getInfo)
// router.get('/geturl/', ApiController.HelloWorld)
// router.get('/getinfo/', ApiController.HelloWorld)

module.exports = router