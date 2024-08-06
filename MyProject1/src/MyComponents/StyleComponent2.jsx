import React from 'react'

export default function StyleComponent2() {

    const myStyle={
myContainer:{
    backgroundColor :"gray",
    color : "white",
    height : " 130px"
},
myHeading:{
    backgroundColor :"red",
    fontSize:"50px"

}

    }
  return (
    <div style={myStyle.myContainer}>

        <h1 style={myStyle.myHeading}>Hieee</h1>
    </div>
  )
}
