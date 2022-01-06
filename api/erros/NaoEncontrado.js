class NaoEncontrado extends Error {
  constructor() {
    super("Fornecedor não foi encontrado !");
    this.name = "NaoEncontrado";
    this.idErro = 1;
  }
}
module.exports = NaoEncontrado;
