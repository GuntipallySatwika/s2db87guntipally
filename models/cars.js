const mongoose = require("mongoose") 
const carsSchema = mongoose.Schema({ 
 car_company: String, 
 color: String, 
 price: {type:Number,
min:1000,
max:2000000000000000} 
}) 
 
module.exports = mongoose.model("cars", carsSchema) 