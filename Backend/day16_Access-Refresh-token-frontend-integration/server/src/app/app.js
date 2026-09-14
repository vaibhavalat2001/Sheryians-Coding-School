import express from "express";
import connectDB from "../config/db.js";
import authRouter from "../routers/auth.router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
await connectDB();
app.use(cookieParser());

app.use("/api/auth", authRouter);
export default app;
