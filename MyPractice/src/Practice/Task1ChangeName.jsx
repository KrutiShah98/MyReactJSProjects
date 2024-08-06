import React from 'react'
import { useState } from 'react'

export default function Task1ChangeName() {

    const [name,setname] = useState();

    const nameArray = ["Dolly","Nidhi","Foram","Parshvi","Darshita"];

    const randomNamech=()=>{
        const indexRandom=Math.floor(Math.random()*nameArray.length);
        // console.log(indexRandom);
        setname(indexRandom)
    }

    return (
        <div>
            
            <div>{nameArray[name]}</div>
            <button onClick={randomNamech}>CHANGE YOUR NAME</button>
        </div>
    )
}
