const mongoose =require('mongoose')

const UsersSchema =new mongoose.Schema({
    name: String,
    phone: String,
    password: String,
    userType: String
}) 

const UserModel = mongoose.model("useers",UsersSchema)

module.exports = UserModel