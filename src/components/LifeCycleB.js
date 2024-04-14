import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Varun"
      }
      console.log("LifecycleB  constructor")
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    

    componentDidMount = () => {
      console.log("componentDidMount B")
    }
    

  render() {
    console.log("LifecycleB render")
    return (
      <div>
        LIfeCYcle B
        
      </div>
    )
  }
}

export default LifeCycleB
