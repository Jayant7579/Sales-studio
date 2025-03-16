const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();


const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'Sales Studio'
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully..");
    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;

