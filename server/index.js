import cors from "cors";
import express from "express";
import morgan from "morgan";

import mongoDB from "./modules/mongoDB";
import coinMarketCapAPI from "./modules/coinMarketCapAPI";
import twitterAPI from "./modules/twitterAPI";

const app = express();
const port = 4000;

app.use(morgan("dev"));

// ** MIDDLEWARE ** //
const whitelist = [
  "http://localhost:4000",
  "https://blooming-tor-11009.herokuapp.com/",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

const path = require("path");

// Serve any static files
app.use(express.static(path.join(__dirname, "../client/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

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
