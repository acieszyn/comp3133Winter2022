const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        unique: true,
    },
    listing_title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address' ],
    },
    username: {
        type: String,
        required: true,
    },
}, { collection: Listings });

var Listings = mongoose.model('Listing', listingSchema);
module.exports = { Listings, listingSchema, };