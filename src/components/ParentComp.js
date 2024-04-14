import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComponent from './RegComponent'
import MemoExample from './MemoExample'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Varun"
      }
    }
    
    componentDidMount = () => {
      setInterval(() => {
        this.setState({
            name: "Varun"
        })
      }, 2000)
    }
    

  render() {
    console.log("*******Parent component*******")
    return (
      <div>
        Parent component - {this.state.name}
        <MemoExample />
        {/* <PureComp /> */}
        {/* <RegComponent/> */}
      </div>
    )
  }
}

export default ParentComp
