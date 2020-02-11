import React from 'react'

const TodoForm = props => {

        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <input type="text" name="newTodo" value={props.newTodo} onChange={props.handleChanges}></input>
                    <button type="submit">Add ToDo</button>
                    <button type="submit">Clear Completed</button>
                </form>
            </div>
        )
    }

export default TodoForm
