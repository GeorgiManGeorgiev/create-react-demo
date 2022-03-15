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

  decrementCounter(e) {
    // const { count } = this.state;
    // this.setState({ count: count - 1 });
    // or
    console.log(e);
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  resetCounter(e) {
    console.log(e);
    this.setState({ count: 0 });
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

        {/* <button type="button" onClick={(e) => this.decrementCounter(e)}>-</button>
           or */}

        <button type="button" onClick={this.decrementCounter.bind(this)}>-</button>

        <button type="button" onClick={(e) => this.resetCounter(e)}>Reset</button>
        {/* The 3 ways: to add eventHandler in classComponents

        1)  <button type="button" onClick={(e) => this.resetCounter(e)}>Reset</button>

        not like the following because it will produce
          TypeError: Cannot read property 'setState' of undefined

        <button type="button" onClick={this.resetCounter}>Reset</button>

            -- But we can use bind to set context like:

        2)  <button type="button" onClick={this.decrementCounter.bind(this)}>-</button>

             -- Or we can bind this in the constuctor like:

        3)  this.resetCounter = this.resetCounter.bind(this);

            */}
      </div>
    );
  }
}

export default Counter;
