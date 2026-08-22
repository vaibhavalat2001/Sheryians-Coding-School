const app = require("./src/app")
const connectDb = require("./src/config/db")

connectDb();
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})