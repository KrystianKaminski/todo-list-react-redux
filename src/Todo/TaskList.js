import React from 'react'

import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

const style = {
    container: {
        marginTop: 30
    },
    item: {
        textDecoration: 'line-through',
        color: '#7f8c8d'
    }
}

const TaskList = (props) => (
    <List
        style={style.container}
    >
        {props.tasks &&
            props.tasks.map &&
            props.tasks

                .filter(task => {
                    switch (props.chosenFilter) {
                        case 'ALL':
                            return true
                        case 'DONE':
                            return task.isCompleted
                        case 'UNDONE':
                            return !task.isCompleted
                        default:
                            return true
                    }
                })

                .filter(task => (
                    task.todo
                        .toLowerCase()
                        .replace(/\s/g, '')
                        .includes(
                            props.filterTask
                                .toLowerCase()
                                .replace(/\s/g, '')
                        )
                )
                )


                .map(task => (
                    <ListItem
                        style={task.isCompleted ? style.item : {
                            textDecoration: 'none'
                        }}
                        onClick={() => props.completed(task)}
                        key={task.key}
                        primaryText={task.todo}
                        rightIcon={
                            <div>
                                <DeleteIcon
                                    onClick={(e) => props.onDeleteHandler(e, task.key)}
                                />
                            </div>
                        }
                    />
                ))
        }
    </List>
)

export default TaskList