import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "../router/auth.routes.js";
import config from "./config.js";
import passport from "passport";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Server connected");
});

app.use("/api/auth", authRouter);

export default app;
