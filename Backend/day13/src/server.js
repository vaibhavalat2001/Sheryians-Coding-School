import "dotenv/config"
import app from "./app/app.js"
import connectDB from "./config/db.js";

await connectDB();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})