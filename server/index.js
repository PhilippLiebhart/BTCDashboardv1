import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import cors from "cors";
import express from "express";
import morgan from "morgan";

import mongoDB from "./modules/mongoDB";
import coinMarketCapAPI from "./modules/coinMarketCapAPI";
import twitterAPI from "./modules/twitterAPI";

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());

mongoDB
  .connectDatabase()
  .then((result) => {
    twitterAPI.streamInit();
    app.listen(port);
    console.log("Listening on port 4000");
  })
  .catch((err) => console.log(err));

// ############## ROUTES ###################
const Tweet = require("./models/tweet");

app.get("/", (req, res) => {
  res.send("Hello to BTCDash API");
});

app.get("/all-tweets", (request, response) => {
  Tweet.find()
    .then((result) => response.send(result))
    .catch((err) => response.send("ERROR", err));
});

app.get("/coinMarketCap", (request, response) => {
  coinMarketCapAPI
    .fetchCoinmarketcapListings()
    .then((res) => {
      return response.send(res.data);
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
});
