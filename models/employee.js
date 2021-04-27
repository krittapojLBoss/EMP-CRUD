const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',{
    Firstname:{
        type: String,
        required: true
    },
    Lastname:{
        type: String,
        required: true
    },
    Tell:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Job:{
        type: String,
        required: true
    },
    Date_to_create:{
        type: Date,
        default:Date.now
    },
})


module.exports = { Employee }