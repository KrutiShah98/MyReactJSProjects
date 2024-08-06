import React, { Component } from 'react'

export default class CHildComponent8 extends Component {
  render() {
    // destructor
    const {subject,marks}=this.props;
    return (
      <div>
        <h3>Subject={subject}</h3>
        <h3>Marks={marks}</h3>
      </div>
    )
  }
}
