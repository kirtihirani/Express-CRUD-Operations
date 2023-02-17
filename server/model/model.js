const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    role:String

})
const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;