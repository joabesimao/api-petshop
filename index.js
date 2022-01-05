const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const console = require("console");
const roteador = require("./api/banco-de-dados/rotas/fornecedores");
const NaoEncontrado = require("./api/erros/NaoEncontrado");

app.use("/api/fornecedores", roteador);

app.use((erro, requisicao, resposta,proximo) => {
  if (erro instanceof NaoEncontrado) {
    resposta.status(404);
  } else {
    resposta.status(400);
  }
  resposta.send(
    JSON.stringify({
      mensagem: erro.message,
      id: erro.idErro,
    })
  );
});

const PORTA = config.get("api.porta");

app.listen(PORTA, () => console.log(`A API está rodando na porta ${PORTA}`));
