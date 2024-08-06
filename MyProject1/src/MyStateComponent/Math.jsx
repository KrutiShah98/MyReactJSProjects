import React, { useState } from 'react'

export default function Math() {
    const [firstnumber, setFirstnumber] = useState("")
    const [lastnumber, setLastnumber] = useState("")
    const [data, setData] = useState("")

    const addition = () => {
        setData(Number(firstnumber) + Number(lastnumber))
        setFirstnumber("")
        setLastnumber("")
    }
    const subtraction = () => {
        setData(Number(firstnumber) - Number(lastnumber))
        setFirstnumber("")
        setLastnumber("")
    }
    const multiplication = () => {
        setData(Number(firstnumber) * Number(lastnumber))
        setFirstnumber("")
        setLastnumber("")
    }
    const division = () => {
        setData(Number(firstnumber) / Number(lastnumber))
        setFirstnumber("")
        setLastnumber("")
    }
    return (
        <div>
            <input type="text" placeholder='enter first number' value={firstnumber} onChange={(e) => setFirstnumber(e.target.value)} />
            <br />
            <input type="text" placeholder='enter last number' value={lastnumber} onChange={(e) => setLastnumber(e.target.value)} />
            <br />
            <br />
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
            <button onClick={multiplication}>*</button>
            <button onClick={division}>/</button>

            <h1>{data}</h1>


        </div>
    )
}
