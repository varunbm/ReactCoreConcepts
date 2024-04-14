import React, { Component } from 'react'
import HOCParent from './HOCParent';

class HOC1 extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>CLicked {count} times</button>
      </div>
    )
  }
}

export default  HOCParent(HOC1)
