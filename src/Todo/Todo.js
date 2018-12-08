import React from 'react'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import AddTask from './AddTask';
import TaskList from './TaskList';

const style = {
    paper: {
        margin: 30,
        padding: 30
    },
    header: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#27ae60',
        fontSize: '20px'
    }
}

class Todo extends React.Component {

    state = {
        tasks: [],
        currentTask: ''
    }

    onNewTaskChangeHandler = e => this.setState({ currentTask: e.target.value })

    addTask = () => this.setState({
        tasks: this.state.tasks.concat(this.createNewTask(this.state.currentTask)),
        currentTask: ''
    })

    createNewTask = text => ({
        todo: text,
        isCompleted: false,
        key: Date.now()
    })

    render() {
        return (
            <div>
                <AppBar
                    title="Todo List"
                />
                <Paper
                    style={style.paper}
                >
                    <h1
                        style={style.header}
                    >
                        What have you planned for today?
                </h1>
                    <AddTask
                        currentValue={this.state.currentTask}
                        onNewTaskChangeHandler={this.onNewTaskChangeHandler}
                        onClickHandler={this.addTask}
                    />
                    <TaskList />
                </Paper>
            </div>

        )
    }
}

export default Todo