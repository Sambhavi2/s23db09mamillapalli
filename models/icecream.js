const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
flavour: {type:String, minlength:2,maxlength:20},
size: {type:String, minlength:3,maxlength:20},
price: {type:Number, min:2,max:10}
})
module.exports = mongoose.model("Icecreame",icecreamSchema)