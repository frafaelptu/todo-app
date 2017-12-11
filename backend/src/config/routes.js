/*required sempre é um singleton independente de onde busca,
mas isso não é verdade no exemplo baixo:

const server = express()

Expresse neste caso sempre retorna uma nova instancia.

*/
const express = require('express')

//Observar que o resultado do export é um metodo
module.exports = function (server){
    
    //API Routes
    const router = express.Router()
    /*Todas as API que vão ser disponibilizadas ao
     frontend vão iniciar com /API
    */
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    //Registra metodos(['get', 'post', 'put', 'delete'])
    todoService.register(router, '/todos')

}