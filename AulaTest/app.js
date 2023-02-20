
//crando servidor através das funções nativas do node

const http = require('http');

http.createServer((req, res)=>{
    res.end('ola')
}).listen(3000);

console.log("servidor rodando")