import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json())

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Authentication API",
  });
});

app.post("/api/register", (req, res) => {
  const { email, name, password } = req.body;

  /* save on db*/

  const token = jwt.sign(
    {
      name,
      email,
    },
    "uajr5ztCMeSVV7Cp2WEsSnwTc8e4ej6LXMvsvKboomP",
  );

  res.status(201).json({
    message: "token created successfully",
    token,
  });
});

export default app;
