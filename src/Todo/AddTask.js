import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        width: '25%'
    }
}

const AddTask = (props) => (
    <div
        style={style.container}
    >

        <TextField
            onChange={props.onNewTaskChangeHandler}
            value={props.currentValue}
        />
        <RaisedButton
            label="Add"
            primary
            style={style.button}
            onClick={props.onClickHandler}
        />
    </div>
)

export default AddTask