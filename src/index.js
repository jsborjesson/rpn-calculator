import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const DECIMAL = '.';
const EMPTY = '0';
const EMPTY_STACK = [EMPTY];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: EMPTY_STACK
    };
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.stack.join("\n")}</div>

        <div className="btn operator">C</div>
        <div className="btn operator">+/-</div>
        <div className="btn operator">%</div>
        <div className="btn operator">/</div>

        <div className="btn" onClick={this.handleDigitClicked('7')}>7</div>
        <div className="btn" onClick={this.handleDigitClicked('8')}>8</div>
        <div className="btn" onClick={this.handleDigitClicked('9')}>9</div>
        <div className="btn operator">*</div>

        <div className="btn" onClick={this.handleDigitClicked('4')}>4</div>
        <div className="btn" onClick={this.handleDigitClicked('5')}>5</div>
        <div className="btn" onClick={this.handleDigitClicked('6')}>6</div>
        <div className="btn operator">-</div>

        <div className="btn" onClick={this.handleDigitClicked('1')}>1</div>
        <div className="btn" onClick={this.handleDigitClicked('2')}>2</div>
        <div className="btn" onClick={this.handleDigitClicked('3')}>3</div>
        <div className="btn operator">+</div>

        <div className="btn" onClick={this.handleDecimalClicked}>{DECIMAL}</div>
        <div className="btn" onClick={this.handleDigitClicked('0')}>0</div>
        <div className="btn operator enter">Enter</div>
      </div>
    )
  }

  handleDigitClicked = digit => {
    return () => {
      this.updateDisplay((display) => display !== EMPTY ? `${display}${digit}` : digit);
    }
  }

  handleDecimalClicked = () => {
    this.updateDisplay((display) => display.indexOf(DECIMAL) === -1 ? `${display}${DECIMAL}` : display);
  }

  updateDisplay = fn => {
    this.setState(state => ({
      stack: state.stack.map((item, index) => { return index === 0 ? fn(item) : item; }),
    }));
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
