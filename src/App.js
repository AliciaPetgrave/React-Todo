import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const stuffTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: stuffTodo
    }
  }

  //function to add the new todo
addNewTodo = todo => {
  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todoList: [...this.state.todoList, newTodo]
  })
}



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo}/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
