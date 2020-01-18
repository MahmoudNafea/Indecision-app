import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
    }
    state = {
        error: undefined
    }
    submitHandler(e) {
        e.preventDefault()
        const task = e.target.elements.taskInput.value.trim()
        const error = this.props.addTaskHandler(task)
        this.setState({ error: error })
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-task-error">{this.state.error}</p>}
                <form className="add-task" onSubmit={this.submitHandler}>
                    <input className="add-task__input" placeholder="Add your task" name="taskInput" />
                    <button className="small-button" type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}
export default AddTask