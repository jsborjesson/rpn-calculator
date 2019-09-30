import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const DECIMAL = '.';
const MINUS = '-';
const DISPLAY_ROWS = 10;
const EMPTY_BOTTOM_ROW = '0';
const EMPTY_ROW = '\u00A0'; // &nbsp;
const EMPTY_STACK = [EMPTY_BOTTOM_ROW];
const DISPLAY_PADDING = Array(DISPLAY_ROWS - 1).fill(EMPTY_ROW);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [EMPTY_STACK],
      historyPosition: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
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

  digitHandler = digit => {
    return () => {
      this.setBottomRow((display) => display !== EMPTY_BOTTOM_ROW ? `${display}${digit}` : digit);
    }
  }

  handleDecimal = () => {
    this.setBottomRow((display) => display.indexOf(DECIMAL) === -1 ? `${display}${DECIMAL}` : display);
  }

  handleDivision       = () => this.handleArithmetic((lhs, rhs) => lhs / rhs);
  handleMultiplication = () => this.handleArithmetic((lhs, rhs) => lhs * rhs);
  handleSubtraction    = () => this.handleArithmetic((lhs, rhs) => lhs - rhs);
  handleAddition       = () => this.handleArithmetic((lhs, rhs) => lhs + rhs);

  handleArithmetic = func => {
    const stack = this.getStack();

    if (stack.length < 2) return;

    const [rhs, lhs] = stack.slice(0, 2);
    const result = func(Number.parseFloat(lhs), Number.parseFloat(rhs)).toString();

    this.setStack(stack => [result, ...stack.slice(2)])
  }

  handleSign = () => {
    this.setBottomRow(row => row.indexOf(MINUS) === -1 ? `${MINUS}${row}` : row.slice(1));
  }

  handleClear = () => {
    if (this.getStack() === EMPTY_STACK) return;

    this.setStack(() => EMPTY_STACK);
  }

  handleDrop = () => {
    this.setStack(stack => stack.length === 1 ? EMPTY_STACK : stack.slice(1));
  }

  handleDelete = () => {
    this.setBottomRow(row => row.length > 1 ? row.slice(0, -1) : EMPTY_BOTTOM_ROW);
  }

  handleEnter = () => {
    this.setStack(stack => [EMPTY_BOTTOM_ROW, ...stack]);
  }

  handleUndo = () => {
    if (this.state.historyPosition <= 0) return;

    this.setState(state => ({
      historyPosition: state.historyPosition - 1
    }));
  }

  handleRedo = () => {
    if (this.state.historyPosition >= this.state.history.length - 1) return;

    this.setState(state => ({
      historyPosition: state.historyPosition + 1,
    }));
  }

  handleRoll = () => {
    this.setStack(stack => [...stack.slice(1), stack[0]]);
  }

  handleSwap = () => {
    if (this.getStack().length <= 1) return;

    this.setStack(stack => [stack[1], stack[0], ...stack.slice(2)]);
  }

  getDisplayRows = () => [...this.getStack(), ...DISPLAY_PADDING].slice(0, DISPLAY_ROWS).reverse();

  getStack = () => this.state.history[this.state.historyPosition];

  setStack = func => {
    const stack = func(this.getStack());
    const dropRedoStack = this.state.history.slice(0, this.state.historyPosition + 1)
    const history = [...dropRedoStack, stack];

    this.setState(state => ({
      history: history,
      historyPosition: state.historyPosition + 1,
    }));
  }

  setBottomRow = func => {
    this.setStack(stack => [func(stack[0]), ...stack.slice(1)]);
  }

  handleKeyDown = (e) => {
    console.log(e);
    switch (e.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.digitHandler(e.key)();
        break;
      case '.':
        this.handleDecimal();
        break;
      case '+':
        this.handleAddition();
        break;
      case '-':
        this.handleSubtraction();
        break;
      case '*':
        this.handleMultiplication();
        break;
      case '/':
        this.handleDivision();
        break;
      case 'Enter':
        this.handleEnter();
        break;
      case 'Backspace':
        this.handleDelete();
        break;
      case 'r':
        this.handleRoll();
        break;
      case 's':
        this.handleSwap();
        break;
      case 'c':
        this.handleClear();
        break;
      case 'd':
        this.handleDrop();
        break;
      case 'm':
        this.handleSign();
        break;
      case 'z':
        this.handleUndo();
        break;
      case 'y':
        this.handleRedo();
        break;
      default:
        break;
    }
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
