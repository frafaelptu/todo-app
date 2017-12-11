/*Esta chamando o export do arquivo todo.js. 

Linha: module.exports = restful.module('Todo', todosSchema)

*/
const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
/*
  New: Esta dizendo que ao invocar update o retorno é o registro 
  atualizado que volta no retorno, sem informar esta definição ele 
  retorna o atual.

  runValidators: Diz para validar os dados do Shema "required"

  Exempço: description: { type: String, require: true}
*/
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo