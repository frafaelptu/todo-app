//"modules" vem da confiuração webpack.config.js (modules: __dirname + '/node_modules')
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
//import Todo from '../todo/todo'
//import About from '../about/about'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>

)