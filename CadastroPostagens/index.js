//importando express

const express = require('express');
const app = express();

//importando handlebars
const handlebars = require('express-handlebars')

//config
    //tamplate Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//importando banco de dados
const sequelize = require(__dirname + '/database/database')

//rotas
app.get('/cad', (req, res) =>{
    res.render("formulario")
})

//criando servidor
app.listen(3000, () =>{
    console.log("Servidor rodando: http://localhost:3000")
})