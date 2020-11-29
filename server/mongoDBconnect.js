const express = require("express");

const morgan = require("morgan");
const mongoose = require("mongoose");
import localdb from "./db.json";
//import saveToDatabase from "../saveToDatabase";

// ############## BASE SETUP ###################
// INITIATE SERVER
const app = express();

// console log for status and paths
app.use(morgan("dev"));

// register view engnine to render pages
app.set("view engine", "ejs");

// ############## MONGO DB ###################
// import mongo db models
const Ninja = require("./models/ninjas");

// generate Model
const NinjaModel = mongoose.model("Ninjax", { name: String });

// connect to mongodb
const dbURI =
  "mongodb+srv://admin:12345@cluster0.m9ynl.mongodb.net/ninjadb?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// LISTEN FOR REQUESTS
// app.listen(3000)

// ############## GET/POSTS ###################

// POST TO MONGO DB
app.get("/add-ninja", (request, response) => {
  // create new Ninja from Model
  const ninja = new Ninja({
    name: "DaMeister",
    styles: "Wing Tsun",
    clan: "Weidner",
  });

  // save new ninja to db
  ninja
    .save()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      console.log("ERRRORRRRORORORO", err);
    });
});

// ################# NEW TEST ##############################
app.get("/paramninjas/:NinjaName", (req, res) => {
  const { NinjaName } = req.params;

  const ninjaa = new NinjaModel({ name: NinjaName });
  console.log("HULA", ninjaa);

  ninjaa
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error("EEERRROR");
      res.render("<h1>WTF</h1>");
      res.send({ error: "HULA ROR" });
    });
});
// ################# END NEW TEST ##############################

app.get("/all-ninjas", (request, response) => {
  Ninja.find()
    .then((result) => response.send(result))
    .catch((err) => response.send("ERROR"));
});

app.get("/single-ninja", (request, response) => {
  Ninja.findById("5fab1c6b314f32fbf9cfc29b")
    .then((result) => response.send(result))
    .catch((err) => response.send("ERROR"));
});

app.get("/", (request, response) => {
  // auto sets contenttype, header, statuscode
  response.send(JSON.stringify(localdb));
  //response.json({ requestedStudent: fetchedStudent });
});

app.get("/about", (request, response) => {
  // auto sets contenttype, header, statuscode
  response.render("about");
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
