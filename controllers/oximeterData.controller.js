const OximeterCtrl = {}
const OximeterData = require('../models/OximeterData')

OximeterCtrl.getData = async (req, res) => {
    console.log("GetAll Request");
    try{
        const lista = await OximeterData.find();
        res.json(lista);
    }catch(e){
        console.error(e);
        res.json({ 'Response': 'Error' })
    }
}

OximeterCtrl.getDataIdList = async (req, res) => {
    const clientId = req.params.clientId;
    console.log("GetById IdList Request" + clientId);
    try{ 
        const item = await OximeterData.find({ "clientId": clientId });
        res.json(item);
    }catch(e){
        console.error(e);
        res.json({ 'Response': 'Error' })
    }
}

OximeterCtrl.createData = async (req, res) => {
    console.log("Create Action")
    const id = req.body.id;
    const clientId = req.body.clientId;
    const oxigen = req.body.oxigen;
    const heartRate = req.body.heartRate;
    try{
        const dataDate =  req.body.dataDate;
        const DataObj = new OximeterData({ id, clientId,oxigen, heartRate,dataDate});
        await DataObj.save();
        
        const item = await OximeterData.findOne({ "id": id, "clientId": clientId });
        res.json(item);
    }catch(e){
        console.error(e);
        res.json({ 'Response': 'Error' })
    }
}

module.exports = OximeterCtrl