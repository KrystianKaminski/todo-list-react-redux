const NEW_TASK = 'todo/NEW_TASK'

export const onNewTaskChangeHandler = value => ({
    type: NEW_TASK,
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

        default:
            return state
    }
}