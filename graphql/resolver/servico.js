const Operation = require('../../infraestrutura/operations')
const Servicos = new Operation('servico')

const resolvers = {
    Mutation:{
        adicionarServico: (root, params) => Servicos.adiciona(params),
        atualizarServico: (root, params) => Servicos.atualiza(params),
        deletarServico: (root, { id }) => Servicos.deleta(id)
    },
    Query: {
        servicos: () => Servicos.lista(),
        servico: (root, { id }) => Servicos.buscaPorId(id)
    }
}

module.exports = resolvers