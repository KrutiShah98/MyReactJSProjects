import React, { Component } from 'react'
import CHildComponent8 from './CHildComponent8'

export default class ParentclassComponent extends Component {
  render() {
    return (
      <div>
        <CHildComponent8 subject="flutter" marks="89"></CHildComponent8>
      </div>
    )
  }
}
