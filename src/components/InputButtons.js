import React, { useState } from 'react'

import SingleButton from './SingleButton'

const InputButtons = ({ textColor, bcColor1, bcColor2, onCalculatorButton }) => {
    const [buttons, setButtons] = useState([
        { value: '', isOperation: false },
        { value: 'C', isOperation: true },
        { value: '<-', isOperation: true },
        { value: '/', isOperation: true },
        { value: '7', isOperation: false },
        { value: '8', isOperation: false },
        { value: '9', isOperation: false },
        { value: 'X', isOperation: true },
        { value: '4', isOperation: false },
        { value: '5', isOperation: false },
        { value: '6', isOperation: false },
        { value: '-', isOperation: true },
        { value: '1', isOperation: false },
        { value: '2', isOperation: false },
        { value: '3', isOperation: false },
        { value: '+', isOperation: true },
        { value: '', isOperation: false },
        { value: '0', isOperation: false },
        { value: '', isOperation: false },
        { value: '=', isOperation: true },
    ])

    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '216px'
    }

    return (
        <div style={style}>
            {buttons.map(button => <SingleButton
                key={Math.random()}
                onCalculatorButton={onCalculatorButton}
                character={button.value}
                isOperation={button.isOperation}
                textColor={textColor}
                bcColor1={bcColor1}
                bcColor2={bcColor2}
            />)}
        </div>
    )
}


export default InputButtons