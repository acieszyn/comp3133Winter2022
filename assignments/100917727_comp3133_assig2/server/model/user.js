const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address' ],
    },
    type: {
        type: String,
        required: true,
        enum: [ 'customer', 'admin' ],
    },
}, { collection: Users });

var Users = mongoose.model('User', userSchema);
module.exports = { Users, userSchema, };