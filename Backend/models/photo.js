const mongoose =require('mongoose')

const PhotosSchema =new mongoose.Schema({
    file: String  
}) 

const PhotoModel = mongoose.model("photo",PhotosSchema)

module.exports = PhotoModel