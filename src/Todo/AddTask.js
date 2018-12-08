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

        <TextField />
        <RaisedButton
            label="Add"
            primary
            style={style.button}
        />
    </div>
)

export default AddTask