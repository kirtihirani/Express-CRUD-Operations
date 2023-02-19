const mongoose = require('mongoose');

const fastestValidator = require('fastest-validator')

const v = new fastestValidator()

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:5,
        max:100
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        min:5
        
    },
    role:String

})
const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;