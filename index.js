const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const console = require("console");
const roteador = require("./api/banco-de-dados/rotas/fornecedores");

app.use(bodyParser.json());

//const roteador = require("./api/banco-de-dados/rotas/fornecedores");
app.use("/api/fornecedores", roteador);

const PORTA = config.get("api.porta");

app.listen(PORTA, () => console.log(`A API está rodando na porta ${PORTA}`));
//app.listen(config.get("api.porta"), () =>
//console.log("A API ESTÁ FUNCIONANDO!")
//);

// to nessa aula aqui =>

//https://cursos.alura.com.br/course/nodejs-api-rest-padronizada-escalavel/task/79832
