var mongoose = require("mongoose");
var express = require("express");
var url = require("url");
var db = mongoose.connect("");
var restaurantSchema = require("./schema").RestaurantSchema;
var Restaurants = mongoose.model("Restaurants", restaurantSchema);

mongoose.connection.once("open", function() {
    console.log("Connection to db open");

    var app = express();

    app.get("/restaurants", function(req, res) {
        var url_parts = url.parse(req.url, true);

        var query = Restaurants.find();
        switch (url_parts.query.sortBy) {
            case "ASC": {
                query.sort({restaurant_id: 1});
                break;
            }
            case "DESC": {
                query.sort({restaurant_id: -1});
            }
        }

        query.exec(function(err, docs) {
            res.send(docs);
        });
    });

    app.get("/restaurants/Delicatessen", function(req, res) {
        var query = Restaurants.find();
        query.where({cuisine: "Delicatessen", city: {$ne:"Brooklyn"}});     
        query.select({restaurant_id: 0});

        query.exec(function(err, docs) {
            res.send(docs);
        })
    })

    app.get("/restaurants/cuisine/:type", function (req, res) {
        var query = Restaurants.find();
        query.where("cuisine", req.params.type);
        query.exec(function(err, docs) {
            res.send(docs);
        });
    });

    app.listen(3000, function() {
        console.log("Listening on port 3000");
    });
});
