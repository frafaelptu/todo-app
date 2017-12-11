import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoLista from './todoList'

const URL = 'http://localhost:3004/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        /*Defini estado incial, após isso deve usar this.setState para próximas alterações, sempre evolui o estado e não altera. 
          Princípio da programação funcional.  
        */
        this.state = { description: '', list: [] }
        /*Faz um bind com a classe que chamou, o this no React não é léxico depende de quem chama
          No Angula é Two-way Data Binding, Altera no DOM reflete no JS, porém no react o JS é
          a verdade absoluta, o javascript que controla o DOM (Componentes Controlados e Não controlados)
        */
        
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh();

    }



    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createAt${search}`)
        .then(resp => this.setState(...this.state, { description, list: resp.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        
        const description = this.state.description
        Axios.post(URL, { description })
            .then(resp => this.refresh() )
    }


    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
        .then( resp => this.refresh(this.state.description) )
    }

    handleMarkAsDone(todo){
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => this.refresh(this.state.description))

        console.log(...todo)
    }

    handleMarkAsPending(todo){
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(resp => this.refresh(this.state.description))        
    }

    handleClear(){
        this.refresh();
    } 
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastros' />
                <TodoForm 
                    description={ this.state.description } 
                    handleAdd={ this.handleAdd } 
                    handleChange={ this.handleChange }
                    handleSearch = { this.handleSearch }
                    handleClear = { this.handleClear }/>
                <TodoLista 
                    handleRemove = { this.handleRemove} 
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPending = {this.handleMarkAsPending}
                    list = {this.state.list}/>
            </div>
        )
    }
}