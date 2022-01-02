const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");

app.use(bodyParser.json());

console.log(config.get("api.porta"));

const PORTA = config.get("api.porta");

app.listen(PORTA, () => console.log(`A API está rodando na porta ${PORTA}`));
