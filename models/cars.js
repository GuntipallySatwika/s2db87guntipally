const mongoose = require("mongoose") 
const carsSchema = mongoose.Schema({ 
 car_company: String, 
 color: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("cars", 
carsSchema)