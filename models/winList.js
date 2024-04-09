const mongoose = require("mongoose");

const winListSchema = new mongoose.Schema({
    randomNumber: {
        type:Number,
        required:true
    },
    createdDate: {
        type:String
    },
    createdTime: {
        type:String
    } 
})

module.exports = mongoose.model('winRandomNumber',winListSchema);