import cors from "cors";
import express from "express";
import morgan from "morgan";

import mongoDB from "./modules/mongoDB";
import coinMarketCapAPI from "./modules/coinMarketCapAPI";
import twitterAPI from "./modules/twitterAPI";

const app = express();
const port = 4000;

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
