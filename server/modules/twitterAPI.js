import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import needle from "needle";
import Tweet from "../models/tweet";

const TOKEN = process.env.TWITTER_API_BEARER_TOKEN;
const RULES_URL = "https://api.twitter.com/2/tweets/search/stream/rules";
const STREAM_URL =
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=attachments,author_id,context_annotations,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,source,text,withheld&expansions=referenced_tweets.id,author_id";

const AUTH = {
  "content-type": "application/json",
  authorization: `Bearer ${TOKEN}`,
};

const STREAM_RULES = [
  { value: "from:IvanOnTech", tag: "Ivan on tech" },
  { value: "from:MMCrypto", tag: "mm crypto" },
  { value: "from:TheMoonCarl", tag: "the moon" },
  { value: "from:CryptoJebb", tag: "crypto jebb" },
  { value: "from:AltcoinDailyio", tag: "altcoin daily" },
  { value: "from:cryptorecruitr", tag: "daily venture" },
  { value: "from:crypto_face_", tag: "crypto face" },
  { value: "from:dash_btc", tag: "BTC DASH" },
];

async function streamInit() {
  try {
    let currentRules = await getAllStreamRules(TOKEN, STREAM_URL);

    await deleteAllStreamRules(currentRules);
    await setRules(STREAM_RULES);
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }

  // Listen to the stream.
  const filteredStream = streamConnect();
  let timeout = 0;
  filteredStream.on("timeout", () => {
    // Reconnect on error
    console.warn("A connection error occurred. Reconnecting…");
    setTimeout(() => {
      timeout++;
      streamConnect(TOKEN, STREAM_URL);
    }, 2 ** timeout);
    streamConnect(TOKEN, STREAM_URL);
  });
}

async function storeNewTweet(tweetStreamJSON) {
  const newTweet = new Tweet({
    data: {
      public_metrics: tweetStreamJSON.data.public_metrics,
      possibly_sensitive: tweetStreamJSON.data.possibly_sensitive,
      source: tweetStreamJSON.data.source,
      author_id: tweetStreamJSON.data.author_id,
      text: tweetStreamJSON.data.text,
      created_at: tweetStreamJSON.data.created_at,
      id: tweetStreamJSON.data.id,
      lang: tweetStreamJSON.data.lang,
    },
    includes: tweetStreamJSON.includes,
    matching_rules: tweetStreamJSON.matching_rules,
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
}

async function getAllStreamRules() {
  const response = await needle("get", RULES_URL, {
    headers: {
      authorization: `Bearer ${TOKEN}`,
    },
  });

  if (response.statusCode !== 200) {
    console.log(response.body);
    throw new Error(response.body);
  }

  return response.body;
}

async function deleteAllStreamRules(currentRules) {
  if (!Array.isArray(currentRules.data)) {
    return null;
  }

  const currentRulesIds = currentRules.data.map((rule) => rule.id);

  const deleteIds = {
    delete: {
      ids: currentRulesIds,
    },
  };

  const response = await needle("post", RULES_URL, deleteIds, {
    headers: AUTH,
  });

  if (response.statusCode !== 200) {
    throw new Error(response.body);
  }

  return response.body;
}

async function setRules() {
  const rulesData = {
    add: STREAM_RULES,
  };

  const response = await needle("post", RULES_URL, rulesData, {
    headers: AUTH,
  });

  if (response.statusCode !== 201) {
    console.log("SET RULES ERROR", response.body);
    throw new Error(response.body);
  }

  return response.body;
}

function streamConnect() {
  //Listen to the stream
  const options = {
    timeout: 20000,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const stream = needle.get(STREAM_URL, options);

  stream
    .on("data", (data) => {
      try {
        const json = JSON.parse(data);

        storeNewTweet(json);
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
module.exports = { streamInit };
