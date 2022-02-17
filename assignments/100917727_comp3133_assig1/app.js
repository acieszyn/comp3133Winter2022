const express = require('express');
const mongoose = require('mongoose');
const schema = require('./schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

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
});

const app = express();

app.use(bodyParser.json());

app.use('*', cors());

server.applyMiddleware({ app, });

app.listen({ port: port}, () => {
    console.log(`Listening on port ${port}`);
});