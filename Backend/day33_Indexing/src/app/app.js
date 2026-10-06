import express from "express";
import userRouter from "../routers/user.router.js";

const app = express();
app.use(express.json());

app.use("/", userRouter);

export default app;
