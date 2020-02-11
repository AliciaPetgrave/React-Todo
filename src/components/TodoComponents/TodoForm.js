import React from 'react'

const TodoForm = props => {

        return (
            <div className="todoform">
                <form onSubmit={props.handleSubmit}>
                    <input type="text" name="newTodo" value={props.newTodo} onChange={props.handleChanges}></input>
                    <button type="submit" className="addbtn">Add</button>

                </form>
                <button type="submit" onClick={props.deleteIt} className="deletebtn">Delete</button>
            </div>
        )
    }

export default TodoForm
