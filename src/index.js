import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="display">12345</div>

        <div className="btn operator">C</div>
        <div className="btn operator">+/-</div>
        <div className="btn operator">%</div>
        <div className="btn operator">/</div>

        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn operator">*</div>

        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn operator">-</div>

        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn operator">+</div>

        <div className="btn">.</div>
        <div className="btn">0</div>
        <div className="btn operator enter">Enter</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
