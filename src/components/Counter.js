import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: 0
    }
  }

  render() {
    if (this.props.typeOfState === 'local') {
      return (
        <div>
          <button onClick={() => this.setState({cur: this.state.cur + 1})}>+</button>
          {this.state.cur}
          <button onClick={() => this.setState({cur: this.state.cur - 1})}>-</button>
        </div>
      )
    } else if (this.props.typeOfState === 'global') {
      return (
        <div>
          <button onClick={() => this.props.handleGlobalState('+')}>+</button>
          {this.props.cur}
          <button onClick={() => this.props.handleGlobalState('-')}>-</button>
        </div>
      )
    }
  }
}

export default Counter;