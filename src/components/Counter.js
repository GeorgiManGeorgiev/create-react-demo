import React from 'react';
import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 11,
      collectionName: 'My books',
    };
  }

  render() {
    console.log('rerender');
    const { count: countCurrent, collectionName } = this.state;
    return (
      <div className="counter">
        <h3>Book Counter</h3>
        <span>
          {/* when mutating this.state the result is this.state + new props / merged / */}
          {collectionName}
          {countCurrent}
        </span>

        <button type="button" onClick={() => this.setState({ count: countCurrent + 1, collectionName: 'My new books collection' })}>+</button>

        <button type="button" onClick={() => this.setState({ count: countCurrent - 1 })}>-</button>
      </div>
    );
  }
}

export default Counter;
