const http = require("http");
const server = http.createServer((req, res) => {
    console.log("hello");
    res.end("Hello, server connected");
})

server.listen(3000, () => {
    console.log("server running");
})   





