import React from 'react'

import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'

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

const Todo = (props) => (
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

        </Paper>
    </div>
)

export default Todo