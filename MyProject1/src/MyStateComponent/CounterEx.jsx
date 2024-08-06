import React, { useState } from 'react'

export default function CounterEx() {
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>

        </div>
    )
}
