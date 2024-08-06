import React, { createContext, useState } from 'react'
export const themeContext=createContext();
export default function ThemeComponent1({children}) {
    const[theme,setTheme]=useState("light");
    const toggletheme=()=>{
        setTheme(theme==="light"?"dark":"light");
    }
  return (
    <div>
       <themeContext.Provider value={{theme,toggletheme}}>
        {children}
       </themeContext.Provider>
    </div>
  )
}
