const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const infoSchema= new Schema({
    
    capital:String,
    airportName:String,
    
})

const state = new Schema({
    id:Number,
    countryName:String,
    cities:[String],
    info: infoSchema,
},

    {timestamps:true}
)
module.exports = mongoose.model('states', state)