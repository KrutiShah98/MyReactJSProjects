import React, { useState } from 'react'

export default function Task4CHangeButton() {
    // change button bg color and text color random on button click event 

    const [randomclick, setrandom] = useState('0')
    const[randomclickfont,setrandomfont]=useState('0')
    const colorArray=["red","blue","purple","black","burgundy","orange"];

    const randomColor=()=>{
        //for bg
        const indexrandom=Math.floor(Math.random()*colorArray.length);
        setrandom(indexrandom);
//for font
const indexrandomfont=Math.floor(Math.random()*colorArray.length)
        setrandomfont(indexrandomfont);
    }
    return (
        <div>

            <h1 style={{backgroundColor:colorArray[randomclick],color:colorArray[randomclickfont]}}>CHange my color and background color</h1>
            <button onClick={randomColor}>Change me</button>

        </div>
    )
}
