const SensorCtrl = {}
const SensorData = require('../models/SensorData')

SensorCtrl.getData = async (req, res) => {
    console.log("GetAll Request");
    try{
        const lista = await SensorData.find();
        res.json(lista);
    }catch(e){
        console.error(e);
        res.json({ 'Response': 'Error' })
    }
}

SensorCtrl.getDataIdList = async (req, res) => {
    const clientId = req.params.clientId;
    console.log("GetById IdList Request" + clientId);
    try{
        const item = await SensorData.find({ "clientId": clientId });
        res.json(item);
    }catch(e){
        console.error(e);
        res.json({ 'Response': 'Error' })
    }
}

SensorCtrl.createData = async (req, res) => {
    console.log("Create Action")
    const id = req.body.id;
    const clientId = req.body.clientId;
    const temperature = req.body.temperature;
    const co2 = req.body.co2;
    const tvoc = req.body.tvoc;
    const temp_freq = req.body.temp_freq;
    const mic_freq = req.body.mic_freq;
    const valid = req.body.valid;
    const resp_type = req.body.resp_type;
    const ratio = req.body.ratio;
    try{
        const dataDate = req.body.dataDate;
        const DataObj = new SensorData({ id, clientId,temperature,co2,tvoc,temp_freq,mic_freq,valid,resp_type,ratio,dataDate});
        await DataObj.save();
        
        const item = await SensorData.findOne({ "id": id, "clientId":clientId });
        res.json(item)
    } catch(e){
        console.error(e);
        res.json({ 'Response': 'Error' })
    }
}

module.exports = SensorCtrl