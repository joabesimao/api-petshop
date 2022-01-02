const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");

app.use(bodyParser.json());

console.log(config.get("api.porta"));

app.listen(config.get("api.porta"), () =>
  console.log("A API ESTÁ FUNCIONANDO!")
);
