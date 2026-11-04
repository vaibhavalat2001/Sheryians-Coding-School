import app from "./src/app/app.js";
import config from "./src/app/config.js";
import connectDB from "./src/app/db.js";

await connectDB();

app.listen(config.PORT, () => {
  console.log("Server is running on port 3000");
});
