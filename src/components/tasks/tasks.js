import React from 'react'
import Task from '../task/task'

const Tasks = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Tasks</h3>
                <button className="small-button small-button--link"
                    onClick={props.removeAllHandler}>Remove All</button>
            </div>
            {props.tasks.length === 0 && <p className="widget__message">Please add tasks to get started</p>}
            {props.tasks.map((task, index) => <Task count={index + 1} key={task} taskText={task}
                removeTaskHandler={props.removeTaskHandler} />)}
        </div>
    )
}


export default Tasks