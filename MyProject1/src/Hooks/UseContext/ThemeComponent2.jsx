import React, { useContext } from 'react'
import { themeContext } from './ThemeComponent1'

export default function ThemeComponent2() {
    const{theme,toggletheme}=useContext(themeContext);

    const myStyle={
        backgroundColor:theme==="light"?"white":"black",
        color:theme==="light"?"black":"white",
    }
  return (
    <div style={{backgroundColor:myStyle.backgroundColor,color:myStyle.color}}>
<h1>Current theme is {theme}</h1>
<button onClick={toggletheme}>Clickme</button>
    </div>
  )
}
