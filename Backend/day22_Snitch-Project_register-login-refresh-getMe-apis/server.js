import app from "./src/app/app.js";
import connectDB from "./src/config/db.js";

const port = 3000;
await connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
