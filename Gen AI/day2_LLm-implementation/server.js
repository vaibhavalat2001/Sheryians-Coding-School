import app from "./src/app/app.js";
import config from "./src/app/config.js";

app.listen(config.PORT, () => {
  console.log("Server is running");
});
