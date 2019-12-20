import React from 'react'
import Modal from 'react-modal'

const TasksModal = (props) => {
    return (
        <Modal
            isOpen={props.showModal}
            contentLabel='Tasks'
            onRequestClose={props.closeModalHandler}>
            <div>
                <h1>Required Tasks</h1>
                <p>{props.tasks}</p>
                <button onClick={props.closeModalHandler}>Okay</button>
            </div>
        </Modal>
    )
}

export default TasksModal