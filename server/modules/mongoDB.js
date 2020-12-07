require("dotenv").config({ path: "./.env" });
import mongoose from "mongoose";

const dbURI = process.env.REACT_APP_MONGODB;

const connect = () => {
  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connect };
