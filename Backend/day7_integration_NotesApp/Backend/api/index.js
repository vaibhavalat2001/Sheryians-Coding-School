const app = require("../src/app");
const connectDB = require("../src/config/db");

const handler = async (req, res) => {
    try {
        await connectDB();

        return res.status(200).json({
            message: "Vercel + MongoDB connection successful"
        });

    } catch (error) {
        console.error("DATABASE ERROR:", error);

        return res.status(500).json({
            message: "Database connection failed",
            error: error.message
        });
    }
};

module.exports = handler;