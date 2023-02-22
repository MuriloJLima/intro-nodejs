//importando sequelize

const Sequelize = require("sequelize")

//conexão com o banco de dados
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

//criando tabela
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
})

//forçando a criação da tabela
// Postagem.sync({force: true})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})

//adicionando dados à tabela
Postagem.create({
    titulo: "Lista de filmes1",
    conteudo: "Interestelar, a origem, o grande truque."
})

//testando a conexão

// sequelize.authenticate().then(() =>{
//     console.log("conectado")
// }).catch((erro) =>{
//     console.log("falha: " + erro)
// })