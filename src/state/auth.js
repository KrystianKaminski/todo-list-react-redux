import { auth, googleProvider } from '../firebaseConfig'

const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'
const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'

const INITIAL_STATE = {
    isUserLoggedIn: false,
    email: '',
    password: '',
    user: null
}

const logInAction = user => ({
    type: LOG_IN,
    user
})

const logOutAction = user => ({
    type: LOG_OUT,
    user
})

export const emailChangeAction = newValue => ({
    type: EMAIL_CHANGE,
    newValue
})

export const passwordChangeAction = newValue => ({
    type: PASSWORD_CHANGE,
    newValue
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user
            }
        case LOG_OUT:
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            }
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.newValue
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.newValue
            }
        default:
            return state
    }
}