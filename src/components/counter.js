import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increments(){
        this.setState({
            count: this.state.count + 1
        },() => {
            console.log(this.state.count)
        })
    }

  render() {
    return (
        <>
            <div>
                Count - {this.state.count}
            </div>
            <button onClick={() => this.increments()}>Increment</button>
        </>
    )
  }
}

export default Counter
