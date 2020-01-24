const Operation = require('../../infraestrutura/operations')
const Atendimento = new Operation('atendimento')

const resolvers =  {
    Mutation: {
        adicionarAtendimento: (root, params) => Atendimento.adiciona(params),
        atualizarAtendimento: (root, params) => Atendimento.atualiza(params),
        deletarAtendimento: (root, { id }) => Atendimento.deleta(id)
    },
    Query: {
        atendimentos: () => Atendimento.lista(),
        atendimento: (root, { id }) => Atendimento.buscaPorId(id)
    }
}

module.exports = resolvers