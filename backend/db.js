import mongoose from "mongoose";
import { MONGO_URI } from "./utils/config.js";
import { log, error } from "./utils/logger.js";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    log("Attempt to connect to MongoDB...")
    await mongoose.connect(MONGO_URI);
    log("Connected to MongoDB");
  } catch (err) {
    error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    log("Disconnected from MongoDB");
  } catch (err) {
    error("Error disconnecting from MongoDB:", err.message);
  }
};