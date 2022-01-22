const express = require('express')
const router = express.Router()
const SensorCtrl = require('../controllers/sensorData.controller')

router.get('/sensor',SensorCtrl.getData)
router.get('/sensor/:clientId/',SensorCtrl.getDataIdList)
router.post('/sensor',SensorCtrl.createData)

module.exports = router
