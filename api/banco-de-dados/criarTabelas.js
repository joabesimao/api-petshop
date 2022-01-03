const ModeloTabela = require("../banco-de-dados/rotas/fornecedores/ModeloTabelaFornecedor");

ModeloTabela.sync()
  .then(() => console.log("TABELA CRIADA COM SUCESSO !"))
  .catch(console.log);
