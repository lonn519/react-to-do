import React, { Component } from 'react';
import ToDo from './components/ToDo.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'Walk the cat', isCompleted: true },
        {description: 'Throw away the dishes', isCompleted: false},
        {description: 'Buy new dishes', isCompleted: false}
      ],
      newToDoDescription : ''
    };
  }
  
  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false:true;
    this.setState({todos:todos});
  }

  deleteTodo(index){
    const newTodos = this.state.todos.filter((todo,arrayIndex)=> arrayIndex!==index);
    this.setState({todos:newTodos});
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.newToDoDescription){ return }
    const newTodo = {description: this.state.newToDoDescription, isCompleted: false};
    this.setState( {todos: [...this.state.todos, newTodo],newToDoDescription:''});
  }

  handleChange(e){
    this.setState( {newToDoDescription : e.target.value});
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={index} description={todo.description} isCompleted = {todo.isCompleted} toggleComplete = { ()=> this.toggleComplete(index)} deleteTodo = { ()=> this.deleteTodo(index)} />
          )}
        </ul>
        <form onSubmit = { (e)=> this.handleSubmit(e)}>
          <input type='text' value={this.state.newToDoDescription} onChange = {(e)=> this.handleChange(e)}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
