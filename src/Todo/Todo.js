import React from 'react'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import AddTask from './AddTask';
import TaskList from './TaskList';
import Search from './Search'

import { connect } from 'react-redux'

import {
    onNewTaskChangeHandler,
    onSearchTaskChangeHandler,
    onAllTasksFilter,
    onDoneTasksFilter,
    onUndoneTasksFilter,
    onIsCompletedTaskChangeHandler,
    onDeleteTaskHandler,
    addTask
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

const Todo = props => (
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
                currentValue={props._currentTask}
                onNewTaskChangeHandler={props._onNewTaskChangeHandler}
                onClickHandler={props._addTask}
            />
            <Search
                filterTask={props._filterTask}
                onSearchTaskChangeHandler={props._onSearchTaskChangeHandler}
                allTasks={props._onAllTasksFilter}
                doneTasks={props._onDoneTasksFilter}
                undoneTasks={props._onUndoneTasksFilter}
            />

            <TaskList
                tasks={props._tasks}
                filterTask={props._filterTask}
                completed={props._onIsCompletedTaskChangeHandler}
                onDeleteHandler={props._onDeleteTaskHandler}
                chosenFilter={props._filterMethod}
            />
        </Paper>
    </div>
)

const mapStateToProps = state => ({
    _tasks: state.todo.tasks,
    _currentTask: state.todo.currentTask,
    _filterTask: state.todo.filterTask,
    _filterMethod: state.todo.filterMethod
})

const dispatchToProps = dispatch => ({
    _onNewTaskChangeHandler: e => dispatch(onNewTaskChangeHandler(e.target.value)),
    _onSearchTaskChangeHandler: e => dispatch(onSearchTaskChangeHandler(e.target.value)),
    _onAllTasksFilter: () => dispatch(onAllTasksFilter()),
    _onDoneTasksFilter: () => dispatch(onDoneTasksFilter()),
    _onUndoneTasksFilter: () => dispatch(onUndoneTasksFilter()),
    _onIsCompletedTaskChangeHandler: taskKey => dispatch(onIsCompletedTaskChangeHandler(taskKey)),
    _onDeleteTaskHandler: (e, taskKey) => dispatch(onDeleteTaskHandler(e, taskKey)),
    _addTask: () => dispatch(addTask())
})

export default connect(
    mapStateToProps,
    dispatchToProps
)(Todo)