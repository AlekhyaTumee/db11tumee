const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ tea_type: {type: String,minlength: 3}, flavour: String, tea_price: Number }) 
 
module.exports = mongoose.model("tea", teaSchema) 