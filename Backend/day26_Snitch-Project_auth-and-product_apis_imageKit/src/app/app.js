import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "../routers/auth.router.js";
import productsRouter from "../routers/products.router.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);

export default app;
