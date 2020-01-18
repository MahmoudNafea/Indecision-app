import React from 'react'

const Task = (props) => {
    return (
        <div>
            {props.taskText}
            <button className="small-button small-button--link"
                onClick={(e) => { props.removeTaskHandler(props.taskText); }}>Remove</button>
        </div>
    )
}

export default Task