const restful= require('node-restful')
const mongoose = restful.mongoose

const todosSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done: { type: Boolean, required: false},
    createAt: {type: Date, default: Date.now}
})

/*Em node todo arquivo é considerado modulo, para disponibilizar 
o módulo fora do arquivo é necessário exportar.
*/
module.exports = restful.model('Todo', todosSchema)