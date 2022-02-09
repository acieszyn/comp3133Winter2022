const mongoose = require('mongoose');

const groupMessageSchema = new mongoose.Schema({
    fromUser: String,
    room: String,
    message: String,
    dateSent: String
}, { collection: "GroupMessages" });

exports.groupMessageSchema = groupMessageSchema;