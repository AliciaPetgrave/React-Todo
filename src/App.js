import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

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
      todoList: stuffTodo,
      newItem: ""
    }
  }



  //function to add the new todo
addNewItem = todo => {
  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todoList: [...this.state.todoList, newTodo]
  })
}

//toggles the current state
toggleItem = clickedId => {
  // loops through array of todos
  const newTodoList = this.state.todoList.map(item => {
    // finds the todo by ID
    // toggles if it was completed or not
    if (item.id === clickedId) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
  });

  // Update state with the new array
  this.setState({
    todoList: newTodoList
  });
};

//deletes todo if completed = true
deleteTodo = e => {
  this.setState({
    todoList: this.state.todoList.filter(task => !task.completed)
  })
}

//watches the input for changes
handleChanges = e => {
  this.setState({
      newItem : e.target.value
  })
}

//adds new item to the current list
handleSubmit = e => {
  e.preventDefault();
  this.addNewItem(this.state.newItem)
}



  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} deleteIt={this.deleteTodo}/>
        <TodoList stuffTodo={this.state.todoList} toggleItem={this.toggleItem} />

      </div>
    );
  }
}

export default App;