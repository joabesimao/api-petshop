const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const console = require("console");
const roteador = require("./api/banco-de-dados/rotas/fornecedores");
const NaoEncontrado = require("./api/erros/NaoEncontrado");
const CampoInvalido = require("./api/erros/CampoInvalido");
const DadosNaoFornecidos = require("./api/erros/DadosNaoFornecidos");
const ValorNaoSuportado = require("./api/erros/ValorNaoSuportado");
const formatosAceitos = require("./api/Serializador").formatosAceitos;

app.use(bodyParser.json());

app.use((requisicao, resposta, proximo) => {
  let formatoRequisitado = requisicao.header("Accept");

  if (formatoRequisitado === "*/*") {
    formatoRequisitado = "application/json";
  }

  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
    resposta.status(406);
    resposta.end();
    return;
  }
  resposta.setHeader("Content-Type", formatoRequisitado);
  proximo();
});

app.use("/api/fornecedores", roteador);

app.use((erro, requisicao, resposta, proximo) => {
  let status = 500;

  if (erro instanceof NaoEncontrado) {
    status = 404;
  }
  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
    status = 400;
  }
  if (erro instanceof ValorNaoSuportado) {
    status = 406;
  }
  resposta.status(status);

  resposta.send(
    JSON.stringify({
      mensagem: erro.message,
      id: erro.idErro,
    })
  );
});

const PORTA = config.get("api.porta");

app.listen(PORTA, () => console.log(`A API está rodando na porta ${PORTA}`));
