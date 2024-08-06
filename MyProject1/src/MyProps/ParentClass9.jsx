import React, { Component } from 'react'
import ChildClass9 from './ChildClass9'

export default class ParentClass9 extends Component {
    handleclick=()=>{
        alert("Clicked by user")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>CLick here</button>
        <ChildClass9 myfun={this.handleclick} subject="React js"></ChildClass9>
      </div>
    )
  }
}
