const mongoose =require('mongoose')

const regdocSchema =new mongoose.Schema({
    states: String, 
    mobileNumber: String, 
    emergencyNo: String, 
    gender: String, 
    fullName: String, 
    hospitalName: String, 
    regNo: String, 
    specialzation: String, 
    location: String, 
    city: String, 
    pinCode: String, 
    hospitalAddress: String, 
    nationality: String
}) 

const Doctor = mongoose.model("regdoctors",regdocSchema)

module.exports = Doctor