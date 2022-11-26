const express = require("express");
const Cors = require("cors");
const dotenv = require("dotenv");
const Cards = require("./models/dbCards.js");

const app = express();
dotenv.config({ path: "./config.env" });
require("./db/khiet");
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(Cors());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Truong Minh Khiet-19520628");
});

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => {
  console.log("Server is Started");
});