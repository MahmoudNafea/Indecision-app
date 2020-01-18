import React from 'react'

const Task = (props) => {
    return (
        <div className="task">
            <p className="task__text">{props.count}.{props.taskText} </p>
            <button className="small-button small-button--link"
                onClick={(e) => { props.removeTaskHandler(props.taskText); }}>Remove</button>
        </div>
    )
}

export default Task