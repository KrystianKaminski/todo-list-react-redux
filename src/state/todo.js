
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
        default:
            return state
    }
}