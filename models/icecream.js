const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
flavour: String,
size: String,
price: Number
})
module.exports = mongoose.model("Icecreame",icecreamSchema)