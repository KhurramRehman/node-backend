const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://netninja:Mongo787372@nodetuts.7pi0qfq.mongodb.net/node-tuts?retryWrites=false&w=majority&appName=nodetuts";
mongoose
  .connect(dbURI)
  .then((result) => {
    //listen for requests
    app.listen(3000);
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");

let path = "./views/";

//middleware and statiac files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use('/blogs/', blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
