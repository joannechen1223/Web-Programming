import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {  // set the state
    super(props);
    this.state = {
      displayNum: 0,
      pendingNum: 0,
      opState: '+',
      haveNum: false,
    };

    this.resetState = this.resetState.bind(this);
    this.showNotImplemented = this.showNotImplemented.bind(this);
    this.numHandler = this.numHandler.bind(this);
    this.opHandler = this.opHandler.bind(this);
  }

  resetState() {
    // TODO
    this.setState({
      displayNum: 0,
      pendingNum: 0,
      opState: '+',
      haveNum: false,
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  numHandler(num) {
    const display = (this.state.haveNum) ? (this.state.displayNum * 10 + num) : num;
    this.setState({
      displayNum: display,
      haveNum: true,
    });
  }

  count() {
    const { pendingNum, displayNum, opState } = this.state;
    if (opState === '+') {
      return pendingNum + displayNum;
    } else if (opState === '-') {
      return pendingNum - displayNum;
    } else if (opState === 'x') {
      return pendingNum * displayNum;
    } else if (opState === '÷') {
      return pendingNum / displayNum;
    }
    return pendingNum;
  }

  opHandler(op) {
    let newPendingNum;
    if (this.state.haveNum) {
      newPendingNum = this.count();
    } else {
      newPendingNum = this.state.pendingNum;
    }
    this.setState({
      displayNum: newPendingNum,
      pendingNum: newPendingNum,
      opState: op,
      haveNum: false,
    });
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.displayNum}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.opHandler('÷')}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.numHandler(7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.numHandler(8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.numHandler(9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.opHandler('x')}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.numHandler(4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.numHandler(5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.numHandler(6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.opHandler('-')}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.numHandler(1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.numHandler(2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.numHandler(3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.opHandler('+')}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number bigger-btn"
              onClick={() => this.numHandler(0)}
            >0</CalcButton>
            <CalcButton className="calc-number" onClick={this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.opHandler('=')}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
