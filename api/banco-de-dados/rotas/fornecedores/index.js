const roteador = require("express").Router();

roteador.use("/", (requisicao, resposta) => {
  resposta.send("ok");
});
module.exports = roteador;
