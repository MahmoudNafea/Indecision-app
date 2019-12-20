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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Add your task" name="taskInput" />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}
export default AddTask