const { gql } = require('apollo-server-express');
const User = require('./model/user').Users;

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

    type Query {
        getUsers: [User]
        getUser(id: ID!): User
    }

    type Mutation {
        addUser(username: String!, firstname: String!, lastname: String!, password: String!, email: String!, type: String!): User
    }
`;

const resolvers = {
    Query: {
        getUsers: (parent, args) => {
            let query = User.find({});
            return query.exec();
        },
        getUser: (parent, args) => {
            let query = User.findById(args.id);
            return query.exec();
        },
    },
    Mutation: {
        addUser: (parent, args) => {
            let user = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type,
            });
            return user.save();
        }
    }
}

module.exports = { typeDefs, resolvers };