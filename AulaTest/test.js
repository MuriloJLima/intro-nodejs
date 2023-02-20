//importando sequelize

const Sequelize = require("sequelize")

//conexão com o banco de dados
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})


//testando a conexão

// sequelize.authenticate().then(() =>{
//     console.log("conectado")
// }).catch((erro) =>{
//     console.log("falha: " + erro)
// })