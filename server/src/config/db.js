import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    "mongodb+srv://educationDB:cdQ03BK0OGCdGV2G@educationalrecord.vw3lcyd.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connection established");
  })
  .catch((e) => {
    console.log("connection failed", e);
  });
