//importando express

const express = require('express');

const app = express();


//importando arquivo html para rota http
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html")
})

//rota
app.get("/sobre", (req, res) => {
    res.send("Ganhamo")
})

//rota através de parametro
app.get("/ola/:cargo/:nome", (req, res) => {
    res.send(`Ola ${req.params.cargo} ${req.params.nome}`);
})

//criando servidor
app.listen(3000, () =>{
    console.log("Servidor rodando: http://localhost:3000")
})