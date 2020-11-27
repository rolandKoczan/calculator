import React from 'react'

const SingleButton = ({ character, isOperation, textColor, bcColor1, bcColor2, onCalculatorButton }) => {
    const style = {
        backgroundColor: isOperation || !character ? bcColor2 : bcColor1,
        color: textColor,
        margin: '2px',
        width: '50px',
        height: '40px',
        border: 'solid 1px black',
        borderShadow: 'none'
    }

    return (
        <button onClick={e =>onCalculatorButton(e)} style={style}>
            {character}
        </button>
    )
}

export default SingleButton
