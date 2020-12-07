require("dotenv").config({ path: "./.env" });
import needle from "needle";

import Tweet from "../models/tweet";

async function getAllRules(token, rulesURL) {
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

async function deleteAllRules() {
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

async function setRules(rules) {
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

function streamConnect(token, streamURL) {
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

        // ## POST TO MONGO DB
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
module.exports = { getAllRules, deleteAllRules, setRules, streamConnect };
