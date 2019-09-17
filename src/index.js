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
        <div className="btn" onClick={this.digitHandler('7')}>7</div>
        <div className="btn" onClick={this.digitHandler('8')}>8</div>
        <div className="btn" onClick={this.digitHandler('9')}>9</div>
        <div className="btn operator" onClick={this.handleMultiplication}>*</div>

        <div className="btn operator" onClick={this.handleClear}>Clear</div>
        <div className="btn" onClick={this.digitHandler('4')}>4</div>
        <div className="btn" onClick={this.digitHandler('5')}>5</div>
        <div className="btn" onClick={this.digitHandler('6')}>6</div>
        <div className="btn operator" onClick={this.handleSubtraction}>-</div>

        <div className="btn operator" onClick={this.handleDrop}>Drop</div>
        <div className="btn" onClick={this.digitHandler('1')}>1</div>
        <div className="btn" onClick={this.digitHandler('2')}>2</div>
        <div className="btn" onClick={this.digitHandler('3')}>3</div>
        <div className="btn operator" onClick={this.handleAddition}>+</div>

        <div className="btn operator" onClick={this.handleDelete}>Del</div>
        <div className="btn operator" onClick={this.handleDecimal}>{DECIMAL}</div>
        <div className="btn" onClick={this.digitHandler('0')}>0</div>
        <div className="btn operator enter" onClick={this.handleEnter}>Enter</div>
      </div>
    )
  }

  getDisplayRows = () => {
    return [...this.state.stack, ...DISPLAY_PADDING].slice(0, DISPLAY_ROWS).reverse();
  }

  handleRoll = () => {
    this.setState({
      stack: [...this.state.stack.slice(1), this.state.stack[0]],
    });
  }

  handleDivision = () => this.handleArithmetic((lhs, rhs) => lhs / rhs);
  handleMultiplication = () => this.handleArithmetic((lhs, rhs) => lhs * rhs);
  handleSubtraction = () => this.handleArithmetic((lhs, rhs) => lhs - rhs);
  handleAddition = () => this.handleArithmetic((lhs, rhs) => lhs + rhs);

  digitHandler = digit => {
    return () => {
      this.updateDisplay((display) => display !== EMPTY_DISPLAY ? `${display}${digit}` : digit);
    }
  }

  handleDecimal = () => {
    this.updateDisplay((display) => display.indexOf(DECIMAL) === -1 ? `${display}${DECIMAL}` : display);
  }

  handleArithmetic = (fn) => {
    if (this.state.stack.length < 2) {
      console.log('You need at least 2 numbers on the stack to perform arithmetic.');
      return;
    }
    const [rhs, lhs] = this.state.stack.slice(0, 2);
    const result = fn(Number.parseFloat(lhs), Number.parseFloat(rhs));

    this.setState({
      stack: [result, ...this.state.stack.slice(2)]
    })
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
