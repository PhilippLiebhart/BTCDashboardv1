require("dotenv").config({ path: "./.env" });
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

// ############## Mongo Db connect ###################
mongoDB
  .connect()
  .then((result) => {
    console.log("Listening on port 4000");
    app.listen(port);
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
    .fetch()
    .then((res) => {
      return response.send(res.data);
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
});

//  ############## TWITTER API ##############
const token = process.env.REACT_APP_BEARER_TOKEN;
const rulesURL = "https://api.twitter.com/2/tweets/search/stream/rules";
const streamURL =
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=attachments,author_id,context_annotations,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,source,text,withheld&expansions=referenced_tweets.id,author_id";

const rules = [
  { value: "from:IvanOnTech", tag: "Ivan on tech" },
  { value: "from:MMCrypto", tag: "mm crypto" },
  { value: "from:TheMoonCarl", tag: "the moon" },
  { value: "from:CryptoJebb", tag: "crypto jebb" },
  { value: "from:AltcoinDailyio", tag: "altcoin daily" },
  { value: "from:cryptorecruitr", tag: "daily venture" },
  { value: "from:crypto_face_", tag: "crypto face" },
  { value: "from:BUJUTSU3", tag: "buju" },
];

//todo diese func auch noch auslagern?
(async () => {
  let currentRules;

  try {
    currentRules = await twitterAPI.getAllRules(token, streamURL);

    await twitterAPI.deleteAllRules(currentRules);

    // Add rules to the stream. Comment the line below if you don't want to add new rules.
    await twitterAPI.setRules(rules);
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }

  // Listen to the stream.
  const filteredStream = twitterAPI.streamConnect();
  let timeout = 0;
  filteredStream.on("timeout", () => {
    // Reconnect on error
    console.warn("A connection error occurred. Reconnecting…");
    setTimeout(() => {
      timeout++;
      twitterAPI.streamConnect(token, streamURL);
    }, 2 ** timeout);
    twitterAPI.streamConnect(token, streamURL);
  });
})();
