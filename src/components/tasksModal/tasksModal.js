import React from 'react'
import Modal from 'react-modal'


const TasksModal = (props) => {
    return (
        <Modal
            isOpen={props.showModal}
            contentLabel='Tasks'
            onRequestClose={props.closeModalHandler}
            closeTimeoutMS={200}
            ariaHideApp={false}
            className="modal">
            <div>
                <h3 className="modal__title">Required Tasks</h3>
                <p className="modal__body">{props.tasks}</p>
                <button className="small-button" onClick={props.closeModalHandler}>Okay</button>
            </div>
        </Modal>
    )
}

export default TasksModal