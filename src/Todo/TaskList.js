import React from 'react'

import { List, ListItem } from 'material-ui/List'

const style = {
    container: {
        marginTop: 30
    }
}

const TaskList = (props) => (
    <List
        style={style.container}
    >
        {props.tasks &&
            props.tasks.map ?
            props.tasks.map(task => (
                <ListItem
                    primaryText={task.todo}
                />
            ))
            : <ListItem
                primaryText="Just add something"
            />
        }
    </List>
)

export default TaskList