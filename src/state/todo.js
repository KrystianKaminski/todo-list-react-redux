const NEW_TASK = 'todo/NEW_TASK'
const SEARCH_TASK = 'todo/SEARCH_TASK'

export const onNewTaskChangeHandler = value => ({
    type: NEW_TASK,
    value
})

export const onSearchTaskChangeHandler = value => ({
    type: SEARCH_TASK,
    value
})
const INITIAL_STATE = {
    tasks: [
        {
            todo: 'Las',
            isCompleted: false,
            key: '123'
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

        default:
            return state
    }
}