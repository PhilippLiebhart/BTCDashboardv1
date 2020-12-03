require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const port = 4000;

// console log for status and paths
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ############## START MONGO DB ###################
// import mongo db models
const Tweet = require("./models/tweet");

// connect to mongodb
const dbURI = process.env.REACT_APP_MONGODB;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Listening on port 4000");
    app.listen(port);
  })
  .catch((err) => console.log(err));

app.get("/all-tweets", (request, response) => {
  Tweet.find()
    .then((result) => response.send(result))
    .catch((err) => response.send("ERROR"));
});

// ############## END MONGO DB ###################

//  ############## START TWITTER API ##############
const needle = require("needle");

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
  //{ value: "from:whale_alert", tag: "whale alert" },
  { value: "from:BUJUTSU3", tag: "buju" },
];

async function getAllRules() {
  const response = await needle("get", rulesURL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (response.statusCode !== 200) {
    throw new Error(response.body);
    console.log(response);
  }

  return response.body;
}

async function deleteAllRules(rules) {
  if (!Array.isArray(rules.data)) {
    return null;
  }

  const ids = rules.data.map((rule) => rule.id);

  const data = {
    delete: {
      ids: ids,
    },
  };

  const response = await needle("post", rulesURL, data, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  if (response.statusCode !== 200) {
    throw new Error(response.body);
    return null;
  }

  return response.body;
}

async function setRules() {
  const data = {
    add: rules,
  };

  const response = await needle("post", rulesURL, data, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  if (response.statusCode !== 201) {
    throw new Error(response.body);
    return null;
  }

  return response.body;
}

function streamConnect() {
  //Listen to the stream
  const options = {
    timeout: 20000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const stream = needle.get(streamURL, options);

  stream
    .on("data", (data) => {
      try {
        const json = JSON.parse(data);
        console.log(json);

        // POST TO MONGO DB
        // create new Tweet from Model
        const newTweet = new Tweet({
          data: {
            public_metrics: json.data.public_metrics,
            possibly_sensitive: json.data.possibly_sensitive,
            source: json.data.source,
            author_id: json.data.author_id,
            text: json.data.text,
            created_at: json.data.created_at,
            id: json.data.id,
            lang: json.data.lang,
          },
          includes: json.includes,
          matching_rules: json.matching_rules,
        });

        // save new tweet to db
        newTweet
          .save()
          .then((result) => {
            console.log("SAVED RESULT", result);
          })
          .catch((err) => {
            console.log("[MONGO DB ERROR]", err);
          });

        // END POST TO MONGO DB
      } catch (e) {
        // Keep alive signal received. Do nothing.
      }
    })
    .on("error", (error) => {
      if (error.code === "ETIMEDOUT") {
        stream.emit("timeout");
      }
    });

  return stream;
}

(async () => {
  let currentRules;

  try {
    // Gets the complete list of rules currently applied to the stream
    currentRules = await getAllRules();

    // Delete all rules. Comment the line below if you want to keep your existing rules.
    await deleteAllRules(currentRules);

    // Add rules to the stream. Comment the line below if you don't want to add new rules.
    await setRules();
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }

  // Listen to the stream.
  // This reconnection logic will attempt to reconnect when a disconnection is detected.
  // To avoid rate limites, this logic implements exponential backoff, so the wait time
  // will increase if the client cannot reconnect to the stream.

  const filteredStream = streamConnect();
  let timeout = 0;
  filteredStream.on("timeout", () => {
    // Reconnect on error
    console.warn("A connection error occurred. Reconnecting…");
    setTimeout(() => {
      timeout++;
      streamConnect(token);
    }, 2 ** timeout);
    streamConnect(token);
  });
})();

// ############## START COIN MARKET CAP ###################

app.get("/coinMarketCap", (request, response) => {
  axios({
    method: "get",
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    responseType: "JSON",
    headers: {
      "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKETCAP_KEY,
    },
    qs: {
      start: "1",
      limit: "5000",
      convert: "USD",
    },
  })
    .then((res) => {
      // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
      console.log("*******************************", res.data);
      return response.send(res.data);
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
});

// const fetchCoinmarketCap = () => {
//   axios({
//     method: "get",
//     url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//     responseType: "JSON",
//     headers: {
//       "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKETCAP_KEY,
//     },
//     qs: {
//       start: "1",
//       limit: "5000",
//       convert: "USD",
//     },
//   })
//     .then((response) => {
//       // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
//       console.log("*******************************", response.data);
//       return response.data;
//     })
//     .catch((err) => {
//       console.log("API call error:", err.message);
//     });
// };
