const Sequelize = require("sequelize")

//importando banco de dados
const connection = require('../database/database')

//criando tabela 
const post = connection.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//post.sync({force: true})

//exportando tabela para ser executada em outro arquivo
module.exports = post