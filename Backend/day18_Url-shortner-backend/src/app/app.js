import express from "express";
import urlRouter from "../routers/url.router.js";
import { redirect } from "../controllers/url.controller.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server connected successfully");
});


app.use("/api/urls", urlRouter);

/*  ### @get    http://localhost:3000/:shortCode    */
app.get("/:shortCode", redirect);

export default app;
