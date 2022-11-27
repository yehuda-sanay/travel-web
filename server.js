const dotenv= require('dotenv').config();
const express= require('express');
const cors= require('cors');
require('./DB')
const statesRouter=require('./routes/states-route')
const flightsRouter=require('./routes/flights-route')
const airLinesRouter=require('./routes/airLInes-route')

const app=express();
const port= 8080;

app.use(express.json({ extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use('/states', statesRouter)
app.use('/flights', flightsRouter)
app.use('/airLines', airLinesRouter)
app.get('/',(reg, res)=>{
    res.send({massage: "success"})
})
app.listen(port, () => {
    console.log(`server listen on port: ${port}`);
})