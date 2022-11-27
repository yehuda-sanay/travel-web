const airLines = require('../models/airLines');

async function creatAirLine() {
   try {
       const airLine= await airLines.create({
           companyName:"Qatar Airways",
           OriginCountry:"Qatar",
           airplanes: 200,
           availableFlights:6
       })
    console.log(airLine)
   } catch (error) {
    console.log(error.message);
   }
}
module.exports={creatAirLine}

