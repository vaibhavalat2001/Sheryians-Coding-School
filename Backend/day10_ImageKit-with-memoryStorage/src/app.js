import express from 'express'
import postRouter from './routers/router.js';
const app = express()


app.use(express.json())

app.use("/", postRouter)

export default app;   