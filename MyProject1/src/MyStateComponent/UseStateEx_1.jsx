import React, { useState } from 'react'

export default function UseStateEx_1() {
    // what is state?
    // what is usestate?
    // useState is a hook which is return stateful value and function using that function we can change state


    // const [property,propertychangemethod]
    // what is return value of useState
    // use state return array value return which contain stateful value and function that can change state of variable


    const [count, setCount] = useState(240)//usestate(initialstate) or default value
    const handleButton = () => {
        console.log("clicked");
        setCount(count + 1);
    }

    return (
        <div>
            <h1>hello{count}</h1>
            <button onClick={handleButton}>click me</button>
        </div>
    )
}
