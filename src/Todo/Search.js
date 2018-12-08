import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const style = {
    container: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    h2: {
        textAlign: 'center',
        textTransform: 'uppercase'
    }
}

const Search = props => (
    <div
        style={style.container}
    >
        <TextField
            placeholder="Search tasks..."
            onChange={props.onSearchTaskChangeHandler}
            value={props.filterTask}
        />
        <div
            style={style.buttonContainer}
        >
            <h2
                style={style.h2}
            >Filter by: </h2>

            <RaisedButton
                label="All"
                primary
                style={style.button}
            />
            <RaisedButton
                label="Done"
                primary
                style={style.button}
            />
            <RaisedButton
                label="Undone"
                primary
                style={style.button}
            />
        </div>
    </div>
)

export default Search