const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
//Criar uma instancia do expresss
const server = express()
//Criado middle
const allowCors = require('./cors')

/*Sempre que chegar uma requisição que usa padrão UrlEncoded 
para requisição de formulário quem vai fazer o parser é o
bodyParser. Modo extended suporta mais tipo de dados que o padrão
UrlEncoded.

Express é fortemente padronizado no padrão Chain Of Responsability

A expressão "server.use()" é a utilização de um midleware poderia usar 
também:

server.use(bodyParser.json())

*/
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`Backend is running on port ${port}`)
})


module.exports = server