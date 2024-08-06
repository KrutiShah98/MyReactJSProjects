import React, { useState } from 'react'

export default function Task10ReverseArray() {


    const [myarray, setmyarray] = useState([])
    const [veggies, setmyveggies] = useState("")
    const [reversearr, setreverse] = useState([])

    const handleadd = () => {
        setmyarray([...myarray, veggies])
        setmyveggies("")
    }
    const reversehnadle = () => {
        setreverse([...myarray].reverse())
    }

    return (
        <div style={{backgroundColor:'rebeccapurple'}}>
            <h3>Accept value from user store in list and convert in reverse order and display in h1</h3>
            <input type="text" placeholder='Enter Veggies here' value={veggies} onChange={(e) => setmyveggies(e?.target?.value)} />
            <button onClick={handleadd}>Add</button>
            <button onClick={reversehnadle}>Reverse</button>
            <br /><br />
            <ul>

                {
                    myarray.map((e, i) => {
                        return <li key={i}>{e}</li>
                    })

                }
            </ul>

            <ul>{

                reversearr.map((e, i) => {
                    return <li key={i}>{e}</li>
                })
            }</ul>

        </div>
    )
}
