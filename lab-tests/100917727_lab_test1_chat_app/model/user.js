const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uname: { 
        type: String, 
        required: true, 
        unique: true
    },
    fname: String,
    lname: String,
    pword: {
        type: String,
        required: true
    },
    createdOn: String
}, { collection: "Users" });

exports.userSchema = userSchema;