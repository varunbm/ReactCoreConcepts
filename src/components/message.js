import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: "Hello Visitor"
        }
    }

    render (){
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.setState({message: "Hello User"})}>Change Message</button>
            </>
        )
    }
}

export default Message;