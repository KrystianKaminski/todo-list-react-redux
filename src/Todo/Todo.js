import React from 'react'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import AddTask from './AddTask';
import TaskList from './TaskList';
import Search from './Search'

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
        tasks: [
            {
                todo: 'Las',
                isCompleted: false,
                key: '123'
            }
        ],
        currentTask: '',
        filterTask: ''
    }

    onNewTaskChangeHandler = e => this.setState({ currentTask: e.target.value })

    onSearchTaskChangeHandler = e => this.setState({ filterTask: e.target.value })

    filterTaskByText = () => this.setState({
        tasks: ['sortuje']
    })

    onIsCompletedTaskChangeHandler = taskKey => this.setState({
        tasks: this.state.tasks.map(task =>
            task.key === taskKey ?
                {
                    ...task,
                    isCompleted: !task.isCompleted
                }
                : task
        )
    })

    onDeleteTaskHandler = (e, taskKey) => {
        e.stopPropagation()
        this.setState({
            tasks: this.state.tasks.filter(task => task.key !== taskKey)
        })
    }
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
                    <Search
                        onSearchTaskChangeHandler={this.onSearchTaskChangeHandler}
                        tasks={this.filterTaskByText}
                    />

                    <TaskList
                        tasks={this.state.tasks}
                        completed={this.onIsCompletedTaskChangeHandler}
                        onDeleteHandler={this.onDeleteTaskHandler}
                    />
                </Paper>
            </div>

        )
    }
}

export default Todo