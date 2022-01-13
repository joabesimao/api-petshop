class NaoEncontrado extends Error {
  constructor(nome) {
    super(`${nome} nao foi encontrado!`);
    this.name = "NaoEncontrado";
    this.idErro = 1;
  }
}
module.exports = NaoEncontrado;
