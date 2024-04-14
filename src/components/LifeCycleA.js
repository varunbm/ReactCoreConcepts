import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Varun"
      }
      console.log("LifecycleA  constructor")
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    

    componentDidMount = () => {
      console.log("componentDidMount A")
    }
    

  render() {
    console.log("LifecycleA render")
    return (
      <div>
        LIfeCYcle A
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
