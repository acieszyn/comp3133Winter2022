const app = require("express")();
const http = require("http").createServer(app);
const req = require("express/lib/request");
const cors = require("cors");
const PORT = 3000;

// Create
const io = require("socket.io")(http);

app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Socket Programming</h1>");
});

// Get index.html
app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//Accept client request
io.on("connection", (socket) => {
    console.log("Connection created...");
    //console.log(socket.id);
    //console.log(socket);

    //Send welcome message
    socket.emit("welcome", `Welcome to Chat. Your ID is ${socket.id}`);

    // New message from client
    socket.on("message", (data) => {
        //This will send to current client
        //socket.emit("newMessage", data);

        //This will send to all the client including sender
        const msg = {
            sender: socket.id,
            message: data
        };
        //io.sockets.emit("newMessage", msg);

        //This will send to all the client except for sender
        socket.broadcast.emit("newMessage", msg);
    });

    //Join new room
    socket.on("join", (roomName) => {
        socket.join(roomName);
        //Send to all clients
        const msg = {
            sender: socket.id,
            message: "Joined the room successfully"
        };

        io.sockets.emit("newMessage", msg);
    });

    socket.on("room_message", (data) => {
        //console.log(data);
        const msg = {
            sender: socket.id,
            message: data.message
        };

        //Direct message 1-to-1 message using socket ID
        //socket.broadcast.to(socket.id).emit("newMessage", msg);
        //io.to("socketidtosend")

        socket.broadcast.to(data.room).emit("newMessage", msg);
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} Client Disconnected...`);
    });
});

http.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});