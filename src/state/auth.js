import { auth, googleProvider } from '../firebaseConfig'
import { getTasksFromDbAsyncAction } from './todo'

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

export const initAuthChangeListeningAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(logInAction(user))
                dispatch(getTasksFromDbAsyncAction())
            } else {
                dispatch(logOutAction())
            }
        }
    )
}

export const emailHandler = value => ({
    type: EMAIL_CHANGE,
    value
})

export const passwordHandler = value => ({
    type: PASSWORD_CHANGE,
    value
})

export const logInAsyncAction = () => (dispatch, getState) => {

    const { auth: { email, password } } = getState()

    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert(error)
        })
}

export const logInByGoogleAsyncAction = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

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