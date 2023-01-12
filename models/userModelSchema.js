const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
   
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)
