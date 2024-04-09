const mongoose = require("mongoose");

const winListSchema = new mongoose.Schema({
    randomNumber: {
        type:Number,
        required:true
    },
    createdDate: {
        type:Date
    },
    createdTime: {
        type:String
    } 
})

module.exports = mongoose.model('winRandomNumber',winListSchema);