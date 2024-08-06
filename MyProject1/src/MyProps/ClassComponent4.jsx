import React, { Component } from 'react'

export default class ClassComponent4 extends Component {
    constructor(){
        super();
        this.state={
            isVisible:true
        }
    }
    handleButton=()=>{
this.setState({isVisible : !this.state.isVisible})
    }
  render() {
    return (
      <div>
        {this.state.isVisible
        ?
      <h1>hello</h1>
      :
      <h1>hide</h1>
      }
        <button onClick={this.handleButton}>Click here</button>
      </div>
    )
  }
}
