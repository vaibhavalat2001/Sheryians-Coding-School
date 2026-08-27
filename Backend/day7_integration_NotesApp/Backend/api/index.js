const mongoose = require("mongoose");

const MONGODB_URI =
    "YOUR_NEW_MONGODB_CONNECTION_STRING";

module.exports = async (req, res) => {
    try {
        console.log("Starting MongoDB connection...");

        const connection = await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log("MongoDB connected:", connection.connection.host);

        return res.status(200).json({
            success: true,
            message: "MongoDB connected from Vercel",
            host: connection.connection.host,
            readyState: mongoose.connection.readyState,
        });

    } catch (error) {
        console.error("MONGODB ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "MongoDB connection failed",
            error: error.message,
            name: error.name,
        });
    }
};