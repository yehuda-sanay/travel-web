const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const airLines = new Schema({
    companyName:String,
    OriginCountry:String,
    airplanes:Number,
    availableFlights:Number
},

    {timestamps:true}
)
module.exports = mongoose.model('airLines', airLines)