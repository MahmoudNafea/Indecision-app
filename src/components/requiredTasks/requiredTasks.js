import React from 'react'

const RequiredTasks = (props) => {
    return (
        <div>
            <button className="big-button" disabled={!props.hasTasks}
                onClick={props.requiredTasksHandler}>What should I do?</button>
        </div >
    )
}

export default RequiredTasks