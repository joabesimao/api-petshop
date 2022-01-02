const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const console = require("console");

app.use(bodyParser.json());

app.listen(config.get("api.porta"), () =>
  console.log("A API ESTÁ FUNCIONANDO!")
);
