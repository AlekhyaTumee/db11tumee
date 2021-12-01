const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ tea_type: {type: String,minlength: 3}, flavour: String, tea_price: {type: Number,min: 1.4 }}) 
 
module.exports = mongoose.model("tea", teaSchema) 