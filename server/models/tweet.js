const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ninja Schema
const tweetSchema = new Schema(
  {
    data: {
      public_metrics: { type: Object },
      possibly_sensitive: { type: Boolean },
      source: { type: String },
      author_id: { type: String },
      text: { type: String },
      created_at: { type: String },
      id: { type: String },
      lang: { type: String },
    },
    includes: { type: Object },
    matching_rules: { type: Array },
  },
  { timestamps: true }
);

// ninja model - "ninja" will look for ninjas!!
const Tweet = mongoose.model("twitterStream", tweetSchema);

module.exports = Tweet;
