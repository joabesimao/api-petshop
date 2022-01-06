const TabelaFornecedor = require("./TabelaFornecedor");
const CampoInvalido = require("../../../erros/CampoInvalido");
const NaoEncontrado = require("../../../erros/NaoEncontrado");
const DadosNaoFornecidos = require("../../../erros/DadosNaoFornecidos");

class Fornecedor {
  constructor({
    id,
    empresa,
    email,
    categoria,
    dataCriacao,
    dataAtualizacao,
    versao,
  }) {
    this.id = id;
    this.empresa = empresa;
    this.email = email;
    this.categoria = categoria;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
    this.versao = versao;
  }
  async criar() {
    this.validar();
    const resultado = await TabelaFornecedor.inserir({
      empresa: this.empresa,
      email: this.email,
      categoria: this.categoria,
    });
    this.id = resultado.id;
    this.dataCriacao = resultado.dataCriacao;
    this.dataAtualizacao = resultado.dataAtualizacao;
    this.versao = resultado.versao;
  }
  async carregar() {
    const fornecedorEncontrado = await TabelaFornecedor.pegarPorId(this.id);
    this.empresa = fornecedorEncontrado.empresa;
    this.email = fornecedorEncontrado.email;
    this.categoria = fornecedorEncontrado.categoria;
    this.dataCriacao = fornecedorEncontrado.dataCriacao;
    this.dataAtualizacao = fornecedorEncontrado.dataAtualizacao;
    this.versao = fornecedorEncontrado.versao;
  }

  async atualizar() {
    await TabelaFornecedor.pegarPorId(this.id);
    const campos = ["empresa", "email", "categoria"];
    const dadosParaAtualizar = {};

    campos.forEach((campo) => {
      const valor = this[campo];
      if (typeof valor === "string" && valor.length > 0) {
        dadosParaAtualizar[campo] = valor;
      }
    });

    if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new DadosNaoFornecidos();
    }
    await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar);
  }
  remover() {
    return TabelaFornecedor.remover(this.id);
  }
  validar() {
    const campos = ["empresa", "email", "categoria"];

    campos.forEach((campo) => {
      const valor = this[campo];

      if (typeof valor !== "string" || valor.length === 0) {
        throw new CampoInvalido(campo);
      }
    });
  }
}

module.exports = Fornecedor;
