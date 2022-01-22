const mongoose = require('mongoose')
const URI = "mongodb+srv://USER:PASSWORD@MongoDBAddress/SmartMaskDB?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then (db=>console.log('Base de Datos: conectada'))
.catch(err => console.log(err))

module.exports = mongoose