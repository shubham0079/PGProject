const mongoose =require('mongoose')

const InfosSchema =new mongoose.Schema({
    states: String,
    district: String,
    subdistrict: String,
    rtoOffice: String,
    firstName: String,
    middleName: String,
    lastName: String,
    mobileNumber: String,
    emergencyNo: String,
    gender: String,
    birthDate: String,
    birthPlace: String,
    currentAddress: String,
    permanentAddress: String,
    gender: String,
    interests: [String]
}) 

const InfoModel = mongoose.model("infoo",InfosSchema)

module.exports = InfoModel