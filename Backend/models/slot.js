const mongoose =require('mongoose')

const SlotLLSchema =new mongoose.Schema({
    name: String,
    phone: String,
    date: String,
    time: String
}) 

const SlotLLModel = mongoose.model("slotll",SlotLLSchema)

module.exports = SlotLLModel
