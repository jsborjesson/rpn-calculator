import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const DECIMAL = '.';
const MINUS = '-';
const DISPLAY_ROWS = 5;
const EMPTY_DISPLAY = '0';
const EMPTY_ROW = '\u00A0'; // &nbsp;
const EMPTY_STACK = [EMPTY_DISPLAY];
const DISPLAY_PADDING = Array(DISPLAY_ROWS - 1).fill(EMPTY_ROW);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: EMPTY_STACK,
      history: [],
    };
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.getDisplayRows().map((row, i) =>
          <div key={i} className="display_row">{row}</div>
        )}
        </div>

        <div className="btn operator" onClick={this.handleRoll}>Roll</div>
        <div className="btn operator" onClick={this.handleUndo}>Undo</div>
        <div className="btn operator" onClick={this.handleRedo}>Redo</div>
        <div className="btn operator" onClick={this.handleSign}>+/-</div>
        <div className="btn operator" onClick={this.handleDivision}>/</div>

        <div className="btn operator" onClick={this.handleSwap}>Swap</div>
        <div className="btn" onClick={this.handleDigit('7')}>7</div>
        <div className="btn" onClick={this.handleDigit('8')}>8</div>
        <div className="btn" onClick={this.handleDigit('9')}>9</div>
        <div className="btn operator" onClick={this.handleMultiplication}>*</div>

        <div className="btn operator" onClick={this.handleClear}>Clear</div>
        <div className="btn" onClick={this.handleDigit('4')}>4</div>
        <div className="btn" onClick={this.handleDigit('5')}>5</div>
        <div className="btn" onClick={this.handleDigit('6')}>6</div>
        <div className="btn operator" onClick={this.handleSubtraction}>-</div>

        <div className="btn operator" onClick={this.handleDrop}>Drop</div>
        <div className="btn" onClick={this.handleDigit('1')}>1</div>
        <div className="btn" onClick={this.handleDigit('2')}>2</div>
        <div className="btn" onClick={this.handleDigit('3')}>3</div>
        <div className="btn operator" onClick={this.handleAddition}>+</div>

        <div className="btn operator" onClick={this.handleDelete}>Del</div>
        <div className="btn operator" onClick={this.handleDecimal}>{DECIMAL}</div>
        <div className="btn" onClick={this.handleDigit('0')}>0</div>
        <div className="btn operator enter" onClick={this.handleEnter}>Enter</div>
      </div>
    )
  }

  getDisplayRows = () => {
    return [...this.state.stack, ...DISPLAY_PADDING].slice(0, DISPLAY_ROWS).reverse();
  }

  handleDigit = digit => {
    return () => {
      this.updateDisplay((display) => display !== EMPTY_DISPLAY ? `${display}${digit}` : digit);
    }
  }

  handleDecimal = () => {
    this.updateDisplay((display) => display.indexOf(DECIMAL) === -1 ? `${display}${DECIMAL}` : display);
  }

  handleClear = () => {
    this.setState({
      stack: EMPTY_STACK
    });
  }

  handleSign = () => {
    this.updateDisplay((display) => display.indexOf(MINUS) === -1 ? `${MINUS}${display}` : display.substr(1));
  }

  handleEnter = () => {
    this.setState({
      stack: [EMPTY_DISPLAY, ...this.state.stack]
    })
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
