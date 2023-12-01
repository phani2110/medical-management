const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017")

    .then(() => {
    console.log("Mongooes connected")
    })
    .catch((error) => {
    console.log(error)
    })

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    number: {
        type: Number,
        required:true,
    },
    password: {
        type: String,
        required:true,
    }

}) 


const collection = new mongoose.model('developers', LogInSchema)

module.exports=collection