import mongoose from "mongoose";
async function connectToDatabase() {
    // Database connection logic here
    try {
        await mongoose.connect('mongodb://127.0.0.1/api_express');
        console.log("Connected to the database successfully.");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}

export default connectToDatabase;
export { connectToDatabase };