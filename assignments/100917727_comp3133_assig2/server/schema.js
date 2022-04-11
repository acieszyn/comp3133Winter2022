const { gql } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const User = require('./model/user').Users;
const Listing = require('./model/listing').Listings;
const Booking = require('./model/booking').Bookings;

const typeDefs = gql `
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Listing {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }

    type Booking {
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }

    type Query {
        getListings: [Listing]
        getListingByName(listing_title: String!): Listing
        getListingsByCity(city: String!): [Listing]
        getListingsByPostalCode(postal_code: String!): [Listing]
        getBookings: [Booking]
    }

    type Mutation {
        login(
            username: String!
            password: String!
        ): AuthPayload!

        addUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ): User

        addListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
        ): Listing

        addBooking(
            listing_id: String!
            booking_id: String!
            booking_start: String!
            booking_end: String!
        ): Booking
    }
`;

const resolvers = {
    Query: {
        getListings: async (parent, args, context) => {
            return await Listing.find({});
        },
        getListingByName: async (parent, args) => {
            return await Listing.findOne({ listing_title: args.listing_title });
        },
        getListingsByCity: async (parent, args) => {
            return await Listing.find({ city: args.city });
        },
        getListingsByPostalCode: async (parent, args) => {
            return await Listing.find({ postal_code: args.postal_code });
        },
        getBookings: async (parent, args, context) => {
            if (context.user.type != 'customer') throw new Error('Must be logged in as customer!');
            return await Booking.find({ username: context.user.username });
        }
    },
    Mutation: {
        login: async (parent, args) => {
            const user = await User.findOne({ username: args.username });
            if (!user) throw new Error("Incorrect username");
            if (user.password != args.password) throw new Error('Incorrect password');
            const token = jwt.sign({
                username: user.username,
                type: user.type,
            }, 'shhhhh', { expiresIn: '1d'});
            return {
                token,
                user
            };
        },
        addUser: async (parent, args) => {
            const newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type,
            });
            return await newUser.save();
        },

        addListing: async (parent, args, context) => {
            if (context.user.type != 'admin') throw new Error('Unauthorized access!');
            const newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: context.user.username,
            });
            return await newListing.save();
        },
        addBooking: async (parent, args, context) =>{
            if (context.user.type != 'customer') throw new Error('Must be logged in as customer!');
            const newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: context.user.username,
            });
            return await newBooking.save();
        }
    }
}

module.exports = { typeDefs, resolvers };