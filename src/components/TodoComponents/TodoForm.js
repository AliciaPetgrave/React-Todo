import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: ""
        };
    }

    //watches the input for changes
    handleChanges = e => {
        this.setState({
            newTodo : e.target.value
        })
    }

    //adds new item to the current list
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
        console.log("submitted")
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newItem" value={this.state.newTodo} onChange={this.handleChanges}></input>
                    <button type="submit">Add ToDo</button>
                    <button type="submit">Clear Completed</button>
                </form>
            </div>
        )
    }
}
