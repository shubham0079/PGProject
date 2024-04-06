const mongoose =require('mongoose')

const RegschoolsSchema =new mongoose.Schema({
    state: String,
    rtoname: String,
    pincode: String,
    firstName: String,
    middleName: String,
    lastName: String,
    relation : String,
    relationfirstName: String,
    relationmiddleName: String,
    relationlastName: String,
    gender: String,
    birthDate: String,
    age: String,
    mobno: String,
    altmobno: String,
    address: String,
    dsname: String
}) 

const RegschoolModel = mongoose.model("regschools",RegschoolsSchema)

module.exports = RegschoolModel