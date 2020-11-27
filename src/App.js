import React, { Component } from 'react'

import InputButtons from './components/InputButtons'
import ThemeToggle from './components/ThemeToggle'
import SecondaryInput from './components/SecondaryInput'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.onCalculatorButton = this.onCalculatorButton.bind(this)
    this.opertaionClicked = this.opertaionClicked.bind(this)
    this.finishOperation = this.finishOperation.bind(this)
    this.onThemeToggle = this.onThemeToggle.bind(this)
    this.state = {
      inputValue: 0,
      prevValue: '',
      theme: 'dark',
      operation: ''
    }
  }

  onChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  onThemeToggle() {
    const theme = this.state.theme === 'light' ? 'dark' : 'light'
    this.setState({ theme: theme })
  }

  opertaionClicked(operator) {
    const inputValue = this.state.inputValue
    switch (operator) {
      case 'CE':
        this.setState({ inputValue: 0, prevValue: 0 })
        break;
      case 'C':
        this.setState({ inputValue: 0, prevValue: 0 })
        break;
      case '<-':
        const newValue = String(inputValue).slice(0, -1)
        this.setState({ inputValue: newValue })
        break;
      case 'X':
        this.setState({ inputValue: '', operation: 'X', prevValue: inputValue })
        break;
      case '-':
        this.setState({ inputValue: '', operation: '-', prevValue: inputValue })
        break;
      case '+':
        this.setState({ inputValue: '', operation: '+', prevValue: inputValue })
        break;
      case '/':
        this.setState({ inputValue: '', operation: '/', prevValue: inputValue })
        break;
      case '=':
        this.finishOperation()
        break;
      default:
        break;
    }
  }

  finishOperation() {

    const { operation, inputValue, prevValue } = this.state
    console.log(prevValue, operation, inputValue)
    let newValue = 0
    switch (operation) {
      case 'X':
        newValue = inputValue * prevValue
        this.setState({ inputValue: newValue })
        break;
      case '-':
        newValue = prevValue - inputValue
        this.setState({ inputValue: newValue })
        break;
      case '+':
        newValue = Number(inputValue) + Number(prevValue)
        this.setState({ inputValue: newValue })
        break;
      case '/':
        if (inputValue === '0') {
          this.setState({ inputValue: "Can't divide by zero" })
        } else {
          newValue = Number(prevValue) / Number(inputValue)
          this.setState({ inputValue: newValue })
        }
        break;
      default:
        break;
    }
  }

  onCalculatorButton(e) {
    const regex = /[0-9]/g
    const character = e.target.outerText
    const isNumber = regex.test(character)

    if (isNumber) {
      const value = this.state.inputValue ? this.state.inputValue : ''
      const newValue = '' + value + character
      this.setState({ inputValue: newValue })
    } else {
      this.opertaionClicked(character)
    }
  }

  render() {
    const {theme, inputValue, prevValue} = this.state

    const textColor = theme === 'light' ? 'black' : 'white'
    const bcColor1 = theme === 'light' ? '#fff' : '#363636'
    const bcColor2 = theme === 'light' ? '#e8e8e8' : '#5c5c5c'

    return (
      <div className="App">
        <ThemeToggle theme={theme} onClick={this.onThemeToggle} backgroundColor={bcColor2} textColor={textColor} />
        <SecondaryInput bcColor2={bcColor2} textColor={textColor} value={!prevValue ? '' : prevValue}/>
        <input
          onChange={e => this.onChange(e)}
          style={{ textAlign: 'right', height: '50px', width: '100%', boxSizing: 'border-box', color: textColor, backgroundColor: bcColor1, fontSize: '1.5em' }}
          value={inputValue}
        />
        <InputButtons
          onCalculatorButton={this.onCalculatorButton}
          textColor={textColor}
          bcColor1={bcColor1}
          bcColor2={bcColor2}
        />
      </div>
    )
  }
}

export default App;
