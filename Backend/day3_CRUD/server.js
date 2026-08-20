const express = require("express");

app = express();

app.use(express.json());

let users = [];

// read data
app.get("/user", (req, res) => {
  res.send(users);
});
 
// create data
app.post("/user", (req, res) => {
  users.push(req.body);
  res.json(users);
});

// update
app.put("/user/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  let updated = users.map((val) => {
    return val.id === id ? { ...val, name } : val;
  });
  
  users = updated;
  res.json(updated);
});

// delete
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let rest = users.filter((val) => val.id !== id);
  users = rest;
  res.json(rest);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
