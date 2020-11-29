const express = require("express");

const morgan = require("morgan");
const mongoose = require("mongoose");

// ############## BASE SETUP ###################
// INITIATE SERVER
const app = express();

// console log for status and paths
app.use(morgan("dev"));

// ############## MONGO DB ###################
// import mongo db models
const Tweet = require("./models/tweet");

// generate Model
//const TweetModel = mongoose.model("Tweet", { name: String });

// connect to mongodb
const dbURI =
  "mongodb+srv://admin:hula2020@btcdashcluster.u1o6w.mongodb.net/twitterStream?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Listening on port 5000");
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// ############## GET/POSTS ###################

// POST TO MONGO DB
app.get("/add-tweet", (request, response) => {
  // create new Tweet from Model
  const newTweet = new Tweet({
    name: "DaMeister",
    styles: "Wing Tsun",
    clan: "Weidner",
  });

  // save new tweet to db
  newTweet
    .save()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      console.log("ERRRORRRRORORORO", err);
    });
});

app.get("/all-tweets", (request, response) => {
  Tweet.find()
    .then((result) => response.send(result))
    .catch((err) => response.send("ERROR"));
});

app.get("/", (request, response) => {
  // auto sets contenttype, header, statuscode
  response.send("please enter something");
  //response.json({ requestedStudent: fetchedStudent });
});

// REDIRECT
app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

// 404
app.use((request, response) => {
  response.status(404).send("<h1>404- something went wrong...  </h1>");
});
