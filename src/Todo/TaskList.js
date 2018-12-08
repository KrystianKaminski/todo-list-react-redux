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
        <ListItem
            primaryText="Item"
        />
    </List>
)

export default TaskList