import React from 'react'

const Task = (props) => {
    return (
        <div>
            {props.taskText}
            <button onClick={(e) => { props.removeTaskHandler(props.taskText); }}>Remove</button>
        </div>
    )
}

export default Task