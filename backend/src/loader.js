// O "." é o caminho relativo, se usar ".." esta voltando uma pasta
const server = require('./config/server.js')
require('./config/database.js')

//Passa server de parâmetro para routes.js
require('./config/routes')(server)
