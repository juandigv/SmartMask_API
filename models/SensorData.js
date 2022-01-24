const mongoose = require('mongoose')
const { Schema } = mongoose
const SensorDataSchema = new Schema({
    id: { type: Number, require: true},
    clientId: { type: String, require: true },
    temperature: { type: Number },
    co2: { type: Number },
    tvoc: { type: Number },
    temp_freq: { type: Number },
    mic_freq: { type: Number },
    resp_freq: { type: Number },
    valid: { type: Number },
    resp_type: { type: Number },
    ratio: { type: Number },
    dataDate: { type: Date },
    dataSync: { type: Date, default: Date.now },
})
module.exports = mongoose.model('sensorData', SensorDataSchema)