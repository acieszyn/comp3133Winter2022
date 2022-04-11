const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
    },
    booking_id: {
        type: String,
        required: true,
        unique: true,
    },
    booking_date: {
        type: String,
        required: true,
        default: getDateString(),
    },
    booking_start: {
        type: String,
        required: true,
    },
    booking_end: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, { collection: Bookings });

function getDateString(date = new Date()) {
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

var Bookings = mongoose.model('Booking', bookingSchema);
module.exports = { Bookings, bookingSchema, };