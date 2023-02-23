//importando express

const express = require('express');
const app = express();

//importando handlebars
const handlebars = require('express-handlebars')

//config
    //tamplate Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//configurando express para receber dados de formulário
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//importando tabelas
const post = require("./models/Post")

//rotas tipo get para retornar dados ao navegador

//rota para listar dados do banco através de método 
//que armazena os dados em uma array e os envia para o front 
//(tambem se pode ordenar os dados a serem enviados)
app.get('/', (req, res) =>{
    post.findAll({order:[['id', 'DESC']]}).then((posts) =>{
        res.render("home", {posts: posts})
    })
})

app.get('/cad', (req, res) =>{
    res.render("formulario")
})

//rota do tipo post para envio de dados
app.post("/add", (req, res) =>{

    //inserindo os dados passados no front para o banco 
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() =>{
        //método a ser execudado (redirecionar para raíz) 
        //caso o código acima funcione como esperado
        res.redirect('/')
    }).catch((erro) => {
        res.send(`HOUVE UM ERRO: ${erro}`)
    })
})

//criando servidor
app.listen(3000, () =>{
    console.log("Servidor rodando: http://localhost:3000")
})