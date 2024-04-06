const mongoose =require('mongoose')

const FeedbacksSchema =new mongoose.Schema({
    name: String,
    email: String,
    mobno: String,
    state: String,
    rto: String,
    licencetype: String,
    feedback: String,
    file: String  
}) 

const FeedbackModel = mongoose.model("feedback",FeedbacksSchema)

module.exports = FeedbackModel