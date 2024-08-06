import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function Ex1() {
  return (
    <div>
        <ButtonComponent onclick={()=>alert("hello")}>CLick here 1</ButtonComponent>
        <ButtonComponent onclick={()=>alert("hello")} color={"black"}>CLick here 1</ButtonComponent>

    </div>
  )
}
