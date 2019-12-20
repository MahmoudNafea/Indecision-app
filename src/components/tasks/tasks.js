import React from 'react'
import Task from '../task/task'

const Tasks = (props) => {
    return (
        <div>
            <button onClick={props.removeAllHandler}>Remove All</button>
            {props.tasks.map((task) => <Task key={task} taskText={task} removeTaskHandler={props.removeTaskHandler} />)}
        </div>
    )
}


export default Tasks