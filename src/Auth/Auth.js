import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Forms from './Forms'

import { connect } from 'react-redux'

import {
    emailHandler,
    passwordHandler,
    logInAsyncAction,
} from '../state/auth'

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }



    componentDidMount() {
        this.props._initAuthChangeListeningAsyncAction()
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => {
        auth.signOut()
    }


    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            left: 10,
                            zIndex: 9999,
                            color: 'white'
                        }}
                        secondary={true}
                        onClick={this.onLogOutClickHandler}
                    >
                        X
                    </FloatingActionButton>
                    {this.props.children}
                </div>
                :
                <Forms
                    emailHandler={this.props._emailHandler}
                    passwordHandler={this.props._passwordHandler}
                    onLogIn={this.props._logInAsyncAction}
                    onLogGoogle={this.onLogInByGoogleClick}
                    emailValue={this.state.email}
                    passwordValue={this.state.password}
                />
        )
    }
}

const mapStateToProps = state => ({
    _isUserLoggedIn: state.auth.isUserLoggedIn,
    _email: state.auth.email,
    _password: state.auth.password
})

const dispatchToProps = dispatch => ({
    _initAuthChangeListeningAsyncAction: () => dispatch(initAuthChangeListeningAsyncAction()),
    _emailHandler: e => dispatch(emailHandler(e.target.value)),
    _passwordHandler: e => dispatch(passwordHandler(e.target.value)),
    _logInAsyncAction: () => dispatch(logInAsyncAction())
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(Auth)