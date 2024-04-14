import React, { Component } from 'react'
import HOCParent from './HOCParent';

class HoverCounter extends Component {

  render() {
    const { count, incrementCount} = this.props
    return (
      <div onMouseOver={incrementCount}>
        HoverOver {count} time
      </div>
    )
  }
}

export default HOCParent(HoverCounter)
