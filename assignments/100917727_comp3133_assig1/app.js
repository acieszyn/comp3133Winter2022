const express = require('express');
const mongoose = require('mongoose');
const schema = require('./schema');
const dotenv = require('dotenv');
const expressJwt = require('express-jwt');

const { ApolloServer } = require('apollo-server-express');

dotenv.config();
const port = process.env.PORT;
const mongodb_atlas_url = process.env.MONGODB_URL;

const connect = mongoose.connect(mongodb_atlas_url, { useNewUrlParser: true });
connect.then((db) => {
    console.log('Established connection to database');

}, (err) => {
    console.log(err);
});

const server = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: schema.resolvers,
    context: ({ req }) => {
        const user = req.user || '';
        return { user };
    },
});

const app = express();

app.use(
    expressJwt({
        secret: 'shhhhh',
        algorithms: ['HS256'],
        credentialsRequired: false,
    })
);

server.applyMiddleware({ app, });

app.listen({ port: port}, () => {
    console.log(`Listening on port ${port}`);
});