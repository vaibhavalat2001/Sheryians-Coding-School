import express from "express";
import connectDB from "../config/db.js";
import authRouter from "../routers/auth.router.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
await connectDB();
app.use(
  cors({
    origin: "https://tokenflow-frontend.vercel.app/",
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/api/auth", authRouter);
export default app;
