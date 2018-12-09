import { database } from '../firebaseConfig'

const NEW_TASK = 'todo/NEW_TASK'
const SEARCH_TASK = 'todo/SEARCH_TASK'
const TASK_ALL = 'todo/TASK_ALL'
const TASK_DONE = 'todo/TASK_DONE'
const TASK_UNDONE = 'todo/TASK_UNDONE'
const DELETE_TASK = 'todo/DELETE_TASK'
const CLEAN_INPUT = 'todo/CLEAN_INPUT'
const SHOW_TASKS = 'todo/SHOW_TASKS'

export const addTaskToDbAsyncAction = () => (dispatch, getState) => {
    const newTask = getState().todo.currentTask
    const uuid = getState().auth.user.uid
    database.ref(`users/${uuid}/tasks`).push({
        todo: newTask,
        isCompleted: false
    })
    dispatch(cleanInput())
}

export const getTasksFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid
    database.ref(`users/${uuid}/tasks`).on(
        'value',
        snapshot => {
            if (snapshot.val()) {

                const array = Object.entries(
                    snapshot.val())
                const tasksList = array.map(entry => ({
                    ...entry[1],
                    key: entry[0]
                }))
                dispatch(showTasksAction(tasksList))
            } else {
                dispatch(showTasksAction(null))
            }
        }
    )
}

export const toggleTaskAsyncAction = task => (dispatch, getState) => {
    const uuid = getState().auth.user.uid
    database.ref(`users/${uuid}/tasks/${task.key}`).update({
        isCompleted: !task.isCompleted
    })
}

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

export const deleteTaskAsyncAction = (e, key) => (dispatch, getState) => {
    e.stopPropagation()
    const uuid = getState().auth.user.uid
    database.ref(`users/${uuid}/tasks`).child(key).remove()
}

const cleanInput = () => ({
    type: CLEAN_INPUT
})

const showTasksAction = tasks => ({
    type: SHOW_TASKS,
    tasks
})


const INITIAL_STATE = {
    tasks: [],
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
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.key !== action.taskKey)
            }
        case CLEAN_INPUT:
            return {
                ...state,
                currentTask: ''
            }
        case SHOW_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        default:
            return state
    }
}