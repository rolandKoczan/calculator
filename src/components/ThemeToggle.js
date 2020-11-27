import React from 'react'

const ThemeToggle = ({ theme, onClick, backgroundColor, textColor}) => {
    const style = {
        height: '22px',
        width: '36px',
        margin: '10px 0',
        borderRadius: '15px',
        padding: '2px',
        boxSizing: 'border-box',
        backgroundColor: backgroundColor,
        color: textColor,
        boxShadow: '0 0 10px 2px #e6e6e6',
        border: '1px solid black'
    }

    const circleStyle = {
        transition: '0.2s',
        height: '16px',
        width: '16px',
        marginLeft: theme === 'dark' ? '0' : '14px',
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? 'white' : '#5c5c5c'
    }

    return (
        <div onClick={onClick} style={style}>
            <div style={circleStyle}>
            </div>
        </div>
    )
}

export default ThemeToggle
