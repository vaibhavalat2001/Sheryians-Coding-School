import app from "./src/app/app.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("User Connected");

  console.log(socket.id);

  socket.on("disconnect", (socket) => {
    console.log("User Disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("Server is connected successfully");
});
