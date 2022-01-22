const express = require('express')
const router = express.Router()
const OximeterCtrl = require('../controllers/oximeterData.controller')

router.get('/oximeter',OximeterCtrl.getData)
router.get('/oximeter/:clientId',OximeterCtrl.getDataIdList)
router.post('/oximeter',OximeterCtrl.createData)

module.exports = router
