const mongoose = require('mongoose')

const schema = mongoose.Schema;

let bookSchema = new schema({
    name:{
        type:String
    },
    author:{
        type:String
    },
    publisher:{
        type:String
    },
    cost:{
        type:Number
    }
})

module.exports = mongoose.model('books',bookSchema)