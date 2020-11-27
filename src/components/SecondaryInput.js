import React from 'react'

const SecondaryInput = ({ value, textColor, bcColor2 }) => {
    const style = {
        backgroundColor: bcColor2,
        color: textColor,
        height: '20px',
        paddingRight: '5px',
        textAlign: 'right',
        fontSize: '0.8em'
    }

    return (
        <div style={style}>
            {value}
        </div>
    )
}

export default SecondaryInput
