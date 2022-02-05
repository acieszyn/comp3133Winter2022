var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    address: {
        building: String,
        street: String,
        zipcode: String
    },
    city: String,
    cuisine: String,
    name: String,
    restaurant_id: String
}, { collection: "Restaurants"});

exports.RestaurantSchema = RestaurantSchema;