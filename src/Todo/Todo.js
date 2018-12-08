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

    onChangeHandler = e => this.setState({ currentTask: e.target.value })

    onClickHandler = () => this.setState({
        tasks: this.state.tasks.concat(this.state.currentTask),
        currentTask: ''
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
                        onChangeHandler={this.onChangeHandler}
                        onClickHandler={this.onClickHandler}
                    />
                    <TaskList />
                </Paper>
            </div>

        )
    }
}

export default Todo