const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ tea_type : String,flavour : String,tea_price : Number }) 
 
module.exports = mongoose.model("tea", teaSchema) 