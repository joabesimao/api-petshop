const modelos = [
  require("../banco-de-dados/rotas/fornecedores/ModeloTabelaFornecedor"),
  require("../banco-de-dados/rotas/fornecedores/produtos/modeloTabelaProduto"),
];

async function criarTabelas() {
  for (let contador = 0; contador < modelos.length; contador++) {
    const modelo = modelos[contador];
    await modelo.sync();
  }
}

criarTabelas();
