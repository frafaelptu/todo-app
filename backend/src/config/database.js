const mongoose = require('mongoose')

/*Utilizando a API de promise do node, isso porque aparece uma 
mensagem de advertencia dizendo que a API do mongoose esta 
depreciada.
*/
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo')