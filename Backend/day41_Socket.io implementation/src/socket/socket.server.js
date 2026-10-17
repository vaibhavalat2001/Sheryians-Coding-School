import { Server } from "socket.io";

const initializeSocket = (httpServer) => {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("A user connected.", socket.id);

    socket.on("elon", (msg) => {
      console.log("Backend: elon event listen", msg);

      io.emit("musk", "Backend: This is musk event fired");
    });

    socket.on("vaibhav", (msg) => {
      console.log("Backend: vaibhav event listen", msg);

      socket.broadcast.emit("alat", "Backend: This is alat Event fired");
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
    });
  });
};

export default initializeSocket;
