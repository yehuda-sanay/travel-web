const airLinesRouter = require('express').Router();
const{creatAirLine}=require('../controllers/airLines-ctl')

airLinesRouter.post('/creatNewAirLines',creatAirLine)

module.exports = airLinesRouter;