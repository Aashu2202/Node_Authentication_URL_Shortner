const mongoose = require("mongoose");

async function connectMongoDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/testing");
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

module.exports = { connectMongoDb };
