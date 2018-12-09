const NEW_TASK = 'todo/NEW_TASK'
const SEARCH_TASK = 'todo/SEARCH_TASK'
const TASK_ALL = 'todo/TASK_ALL'
const TASK_DONE = 'todo/TASK_DONE'
const TASK_UNDONE = 'todo/TASK_UNDONE'
const IS_COMPLETED_TOGGLE = 'todo/IS_COMPLETED_TOGGLE'
const DELETE_TASK = 'todo/DELETE_TASK'
const ADD_TASK = 'todo/ADD_TASK'

export const onNewTaskChangeHandler = value => ({
    type: NEW_TASK,
    value
})

export const onSearchTaskChangeHandler = value => ({
    type: SEARCH_TASK,
    value
})

export const onAllTasksFilter = () => ({
    type: TASK_ALL
})

export const onDoneTasksFilter = () => ({
    type: TASK_DONE
})

export const onUndoneTasksFilter = () => ({
    type: TASK_UNDONE
})

export const onIsCompletedTaskChangeHandler = taskKey => ({
    type: IS_COMPLETED_TOGGLE,
    taskKey
})

export const onDeleteTaskHandler = (e, taskKey) => ({
    type: DELETE_TASK,
    e: e.stopPropagation(),
    taskKey
})

export const addTask = () => ({
    type: ADD_TASK
})


const createNewTask = text => ({
    todo: text,
    isCompleted: false,
    key: Date.now()
})

const INITIAL_STATE = {
    tasks: [
        {
            todo: 'Las',
            isCompleted: false,
            key: '1232'
        },
        {
            todo: 'Las',
            isCompleted: false,
            key: '12113'
        },
        {
            todo: 'Las',
            isCompleted: false,
            key: '122123'
        }
    ],
    currentTask: '',
    filterTask: '',
    filterMethod: 'ALL'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case NEW_TASK:
            return {
                ...state,
                currentTask: action.value
            }
        case SEARCH_TASK:
            return {
                ...state,
                filterTask: action.value
            }
        case TASK_ALL:
            return {
                ...state,
                filterMethod: 'ALL'
            }
        case TASK_DONE:
            return {
                ...state,
                filterMethod: 'DONE'
            }
        case TASK_UNDONE:
            return {
                ...state,
                filterMethod: 'UNDONE'
            }
        case IS_COMPLETED_TOGGLE:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.key === action.taskKey ?
                        {
                            ...task,
                            isCompleted: !task.isCompleted
                        }
                        : task
                )
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.key !== action.taskKey)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(createNewTask(state.currentTask)),
                currentTask: ''
            }
        default:
            return state
    }
}