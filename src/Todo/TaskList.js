import React from 'react'

import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

const style = {
    container: {
        marginTop: 30
    },
}

const TaskList = (props) => (
    <List
        style={style.container}
    >
        {props.tasks &&
            props.tasks.map ?
            props.tasks.map(task => (
                <ListItem
                    onClick={props.onIsCompletedTaskChangeHandler}
                    primaryText={task.todo}
                    rightIcon={
                        <div>
                            <DeleteIcon
                                onClick={props.onDeleteHandler}
                            />
                        </div>
                    }
                />
            ))
            : <ListItem
                primaryText="Just add something"
            />
        }
    </List>
)

export default TaskList