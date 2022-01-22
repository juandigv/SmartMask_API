const mongoose = require('mongoose')
const { Schema } = mongoose
const OximeterDataSchema = new Schema({
    id: { type: Number, require: true},
    clientId: { type: String, require: true },
    oxigen: { type: Number },
    heartRate: { type: Number },
    dataDate: { type: Date },
    dataSync: { type: Date, default: Date.now },
})
module.exports = mongoose.model('OximeterData', OximeterDataSchema)