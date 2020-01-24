const { GraphQLServer } = require('graphql-yoga')

const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const resolvers = require('./graphql/resolver')

const typeDefs = require('./graphql/schemas')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('> Conectou no banco')

  Tabelas.init(conexao)
})

const servidor = new GraphQLServer({
  resolvers,
  typeDefs
})

servidor.start(() => console.log('> Servidor ouvindo'))
