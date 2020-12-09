require("dotenv").config({ path: "./.env" });
import mongoose from "mongoose";

const dbURI = process.env.DATABASE_URI;

const connectDatabase = () => {
  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connectDatabase };
