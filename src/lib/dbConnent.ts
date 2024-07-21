import mongoose from "mongoose";
import { config } from "@/config/config";
type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(config.MONDODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected successfully!");
  } catch (error) {
    console.log("Database connection failed!!", error);
    process.exit(1);
  }
}
export default dbConnect;