import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count : 0
    };
  }

qtyDecrement = () => {
  this.setState({
    count: this.state.count > 0 ? --this.state.count : 0
  })
}

qtyIncrement = () => {
  this.setState({
    count: ++this.state.count
  })
}

  render() {
    return (      
      <div>
        <h2>Set the Quantity</h2>
        <div className='qtyComponent'>
          <button onClick={this.qtyDecrement}> - </button>
          <div className='qtyCount'> { this.state.count } </div>
          <button onClick={this.qtyIncrement}> + </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
