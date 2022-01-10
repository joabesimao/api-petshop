const Modelo = require("./modeloTabelaProduto");

module.exports = {
  listar(idFornecedor) {
    return Modelo.findAll({
      where: {
        fornecedor: idFornecedor,
      },
    });
  },
};
