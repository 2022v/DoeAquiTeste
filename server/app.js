//Requiring module
const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

//Creating express object
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', function (req, res, next) {
    console.log('A API está rodando' + 'nesse servidor');
    next();
}, function (req, res) {
    res.send('Hello World!');
    res.end();
});


// CONSULTA DE DADOS DO USUÁRIO.
app.get('/users', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from users', res);
})

// Cadastra DADOS DO USUÁRIO.
app.post('/users/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into users (nome, email, telefone, tipoUsuario, cidade, estado, endereco, senha, cpf_cnpj, foto) value('"+req.body.nome+"', '"+req.body.email+"', '"+req.body.telefone+"', '"+req.body.tipoUsuario+"', '"+req.body.cidade+"', '"+req.body.estado+"', '"+req.body.endereco+"', '"+req.body.senha+"', '"+req.body.cpf_cnpj+"', '"+req.body.foto+"')", res);
    })


//port Number
const PORT = process.env.PORT || 5000;

//Server Setup
app.listen(PORT, console.log(
    `Server started on port: ${PORT}`
));