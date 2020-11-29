const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ninja Schema
const ninjaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    styles: {
      type: String,
      required: true,
    },
    clan: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ninja model - "ninja" will look for ninjas!!
const Ninja = mongoose.model("Ninja", ninjaSchema);

module.exports = Ninja;
