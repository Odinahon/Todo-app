import { render } from '@testing-library/react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
class Counter extends Component {
  constructor () {
    super() // Error 1, don't forget to include super before using this inside of the methods
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  render () {
    return (
      <div className='counter'>
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <div><button className='reset' onClick={this.reset}>Reset</button></div>
        <span className='count'>{this.state.counter}</span>
      </div>
    )
  }

  increment (by) {
    // console.log(`increment from parent + ${by}`)
    this.setState(
      (prevState) => {
        return { counter: prevState.counter + by }
      }
    )
  }

  decrement (by) {
    // console.log(`increment from parent + ${by}`)
    this.setState(
      (prevState) => {
        return { counter: prevState.counter - by }
      }
    )
  }

  reset () {
    this.setState({
      counter: 0
    })
  }
}
class CounterButton extends Component {
  // Define the initial state in a constructor
  // state => counter 0
//   constructor () {
//     super() // Error 1, don't forget to include super before using this inside of the methods
//     this.state = {
//       counter: 0
//     }
  // this.increment = this.increment.bind(this)
  // this.decrement = this.decrement.bind(this)
//   }

  render () {
    return (
      <div className='counter'>
        <button onClick={() => this.props.incrementMethod(this.props.by)}> + {this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}> - {this.props.by}</button>
        {/* <span className ="count">{this.state.counter}</span> */}
      </div>
    )
  }
  //  increment() {
  //     this.setState({
  //         counter: this.state.counter + this.props.by
  //     });
  //     this.props.incrementMethod(this.props.by);
  // }
  // decrement() {
  //     this.setState({
  //         counter: this.state.counter - this.props.by
  //     });
  //     this.props.decrementMethod(this.props.by);
  // }
}
CounterButton.defaultProps = {
  by: 1
}
CounterButton.propTypes = {
  by: PropTypes.number
}
export default Counter
