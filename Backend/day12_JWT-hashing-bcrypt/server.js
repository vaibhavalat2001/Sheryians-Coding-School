import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import "dotenv/config"

await connectDB();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
