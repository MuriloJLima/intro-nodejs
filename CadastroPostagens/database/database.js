//importando sequelize

const Sequelize = require("sequelize")

//conexão com o banco de dados
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;