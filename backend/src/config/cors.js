//Next para padrão Chain of Responsabilty
//Cabeçalhos do cors pesquisar na internet
module.exports = function(req, resp, next){
    // "*" qualquer origem pode consulmir a API, mas pode restringir
    resp.header('Access-Control-Allow-Origin', '*')
    resp.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

}

