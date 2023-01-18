const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const PORT = 8000;
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "dogFoodAPI";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

//Middleware
app.set("view engine", "ejs"); //ejs e viewport
app.use(express.static("public")); //public folder servit clientului
app.use(express.urlencoded({ extended: true })); // nu stiu
app.use(express.json()); // permite express sa parse json

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  db.collection("food")
    .find()
    .toArray()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.error(error));
});

app.get("/api/:foodName", (req, res) => {
  const food = req.params.foodName;
  const foodName = food.charAt(0).toUpperCase() + food.slice(1).toLowerCase();
  console.log(foodName);
  db.collection("food")
    .find({ name: foodName })
    .toArray()
    .then((result) => {
      if (result[0]) {
        res.json(result[0]);
      } else {
        res.json("Food not found in database.");
      }
    })
    .catch((error) => console.error(error));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`);
});
