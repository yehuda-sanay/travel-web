const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flights = new Schema({
    id:Number,
    flightNumber:Number,
    takeOff:String,
    landing:String,
    NumberOfSeats:Number,
    departureTime:String,
    landingTime:String,
    IsThereFirstClass:String,
},

    {timestamps:true}
)
module.exports = mongoose.model('flights', flights)