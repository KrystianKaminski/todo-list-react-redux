import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Forms from './Forms'

import { connect } from 'react-redux'

import {
    initAuthChangeListeningAsyncAction,
    emailHandler,
    passwordHandler,
    logInAsyncAction,
    logInByGoogleAsyncAction,
    logOutAsyncAction
} from '../state/auth'

class Auth extends React.Component {
    componentDidMount() {
        this.props._initAuthChangeListeningAsyncAction()
    }


    render() {
        return (
            this.props._isUserLoggedIn ?
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
                        onClick={this.props._logOutAsyncAction}
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
                    onLogGoogle={this.props._logInByGoogleAsyncAction}
                    emailValue={this.props._email}
                    passwordValue={this.props._password}
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
    _logInAsyncAction: () => dispatch(logInAsyncAction()),
    _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),
    _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(Auth)