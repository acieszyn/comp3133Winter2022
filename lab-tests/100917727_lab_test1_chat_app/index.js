const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const mongoose = require('mongoose');
const userSchema = require('./model/user').userSchema;
const groupMessageSchema = require('./model/groupmessage').groupMessageSchema;
const Users = mongoose.model('Users', userSchema);
const GroupMessages = mongoose.model('GroupMessages', groupMessageSchema);

var chatUser = '';
var chatRoom = '';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('add user', (user) => {
        mongoose.connect('mongodb+srv://superguest:readandwrite456@cluster0.c5llp.mongodb.net/lab_test1_chat_app?retryWrites=true&w=majority');
        var query = Users.find();
        query.where({ uname: user.uname });
        query.exec((err, docs) => {
            if (docs.length == 0) {
                var newUser = new Users({
                    uname: user.uname,
                    fname: user.fname,
                    lname: user.lname,
                    pword: user.pword,
                    createdOn: new Date().toUTCString()
                });
                newUser.save((err, doc) => {
                    io.emit('added user');
                });
            } else { io.emit('user exists'); }
        });
    });

    socket.on('user login', (user) => {
        mongoose.connect('mongodb+srv://guest:readonly123@cluster0.c5llp.mongodb.net/lab_test1_chat_app?retryWrites=true&w=majority');
        var query = Users.find();
        query.where({ uname: user.uname, pword: user.pword });
        query.exec((err, docs) => {
            if (docs.length != 0) {
                io.emit('good info');
            } else { io.emit('bad info'); }
        });
    });

    socket.on('disconnect', () => {
        mongoose.disconnect();
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});