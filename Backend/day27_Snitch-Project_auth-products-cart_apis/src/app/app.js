import express from "express";
import authRouter from "../routers/auth.router.js";
import productsRouter from "../routers/products.router.js";
import cartRouter from "../routers/cart.router.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

export default app;
