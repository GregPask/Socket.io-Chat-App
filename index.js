const express = require("express");
const socket = require("socket.io");
const app = express();


app.use(express.static("public"));

let server = app.listen(4000, () => {
    console.log("Server is running on port 4000");
})



let io = socket(server);
io.on("connection", (socket) => {
    console.log("A user connected!");

    //On message all sockets will emit message data...

    socket.on("message", (data) => {
        io.sockets.emit("message", (data));
    });


    //On typing, all other sockets will emit typing data...

    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data);
    });
});

