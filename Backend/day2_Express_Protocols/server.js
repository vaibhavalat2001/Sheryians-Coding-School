// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("server is running");
//     // res.end("I am responce")

//     if(req.url === "/products") {
//         res.end("This is products")
//     }

//     if (req.url === "/cart") {
//         res.end("This is cart")
//     }

//     if (req.url === "/home") {
//         res.end("This is home");
//     }
// })

// const port = 30;

// server.listen(port, () => {
//     console.log("server is here")
// })

// express code
const express = require("express");

const app = express();

app.use(express.json());

// get send data
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  res.send("This is home");
});

app.get("/data", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ]);
});

app.get("/user", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Vaibhav",
    },
  ]);
});

app.post("/post", (req, res) => {
  res.send({
    title: "My First Post",
    body: "Learning Postman",
    userId: 1,
    use: req.body
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.json([
    {
      message: "User created successfully",
      user: req.body,
    },
  ]);
});

const port = 30;
app.listen(port, () => {
  console.log("Server is connected");
});
