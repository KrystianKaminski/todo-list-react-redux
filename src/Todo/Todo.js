import React from 'react'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import AddTask from './AddTask';
import TaskList from './TaskList';
import Search from './Search'

import { connect } from 'react-redux'

import {
    onNewTaskChangeHandler
} from '../state/todo'

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


    onSearchTaskChangeHandler = e => this.setState({ filterTask: e.target.value })

    onAllTasksFilter = () => this.setState({
        filterMethod: 'ALL'
    })

    onDoneTasksFilter = () => this.setState({
        filterMethod: 'DONE'
    })

    onUndoneTasksFilter = () => this.setState({
        filterMethod: 'UNDONE'
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
                        currentValue={this.props._currentTask}
                        onNewTaskChangeHandler={this.props._onNewTaskChangeHandler}
                        onClickHandler={this.addTask}
                    />
                    <Search
                        filterTask={this.props._filterTask}
                        onSearchTaskChangeHandler={this.onSearchTaskChangeHandler}
                        allTasks={this.onAllTasksFilter}
                        doneTasks={this.onDoneTasksFilter}
                        undoneTasks={this.onUndoneTasksFilter}
                    />

                    <TaskList
                        tasks={this.props._tasks}
                        filterTask={this.props._filterTask}
                        completed={this.onIsCompletedTaskChangeHandler}
                        onDeleteHandler={this.onDeleteTaskHandler}
                        chosenFilter={this.props._filterMethod}
                    />
                </Paper>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    _tasks: state.todo.tasks,
    _currentTask: state.todo.currentTask,
    _filterTask: state.todo.filterTask,
    _filterMethod: state.todo.filterMethod
})

const dispatchToProps = dispatch => ({
    _onNewTaskChangeHandler: e => dispatch(onNewTaskChangeHandler(e.target.value))
})

export default connect(
    mapStateToProps,
    dispatchToProps
)(Todo)