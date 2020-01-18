import React, { Component } from 'react';
import Header from '../src/components/header/header'
import RequiredTasks from './components/requiredTasks/requiredTasks';
import AddTask from './components/addTask/addTask';
import Tasks from '../src/components/tasks/tasks';
import TasksModal from '../src/components/tasksModal/tasksModal';

class App extends Component {

  constructor(props) {
    super(props)
    this.removeAllHandler = this.removeAllHandler.bind(this)
    this.requiredTasksHandler = this.requiredTasksHandler.bind(this)
    this.addTaskHandler = this.addTaskHandler.bind(this)
    this.removeTaskHandler = this.removeTaskHandler.bind(this)
    this.closeModalHandler = this.closeModalHandler.bind(this)
  }
  state = {
    tasks: [],
    showModal: false
  }

  removeTaskHandler(taskToRemove) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => {
          return taskToRemove !== task
        })
      }
    })
  }

  removeAllHandler() {
    this.setState({
      tasks: []
    })
  }

  requiredTasksHandler() {
    // alert(this.state.tasks)
    this.setState({ showModal: true })
  }

  addTaskHandler = (task) => {
    if (!task) {
      return 'Please enter valid item'
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'Please enter a new item'
    }
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      }
    })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }
  render() {
    const title = 'Indecision'
    const subtitle = 'Make your life better with technology'
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <RequiredTasks hasTasks={this.state.tasks.length > 0}
            requiredTasksHandler={this.requiredTasksHandler} />
          <div className="widget">
            <Tasks removeTaskHandler={this.removeTaskHandler} tasks={this.state.tasks}
              removeAllHandler={this.removeAllHandler} />
            <AddTask addTaskHandler={this.addTaskHandler} />
          </div>
        </div>
        <TasksModal showModal={this.state.showModal} tasks={this.state.tasks}
          closeModalHandler={this.closeModalHandler} />
      </div>
    );
  }
}

export default App;
