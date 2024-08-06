import React, { useState } from 'react'
import './Card.css'
import Task11ChildCard from './Task11ChildCard'

export default function Task11CardView() {
    const[data,setdata]=useState(false)
    const [uname, setuname] = useState("")
    const [udata, setudata] = useState("")

    const [sub, setsub] = useState("")
    const [subdata, setsubdata] = useState("")

    const [city, setcity] = useState("")
    const [citydata, setcitydata] = useState("")

    const [mail, setmail] = useState("")
    const [maildata, setmaildata] = useState("")

    const [gender,setgender] = useState("")
    const[genderdata,setgenderdata]=useState("")


    const handlesubmit = () => {
        setdata(true)
        setudata(uname)
        setsubdata(sub)
        setcitydata(city)
        setmaildata(mail)
        setgenderdata(gender)
    }

    return (
        <div className='maincontainer'>
            {/* <h1>Form </h1> */}
            <label>Name:</label>
            <input type="text" name="" id="" placeholder='Enter your name' onChange={(e) => setuname(e?.target?.value)} /> <br /><br />
            <label>Subject</label>
            <input type="text" name="" id="" placeholder='Enter Subject' onChange={(e) => setsub(e?.target?.value)} /> <br /><br />
            <label>City</label>
            <input type="text" name="" id="" placeholder='Enter City'  onChange={(e) => setcity(e?.target?.value)}/> <br /><br />
            <label>Email</label>
            <input type="text" name="" id="" placeholder='Enter your Email id'  onChange={(e) => setmail(e?.target?.value)}/> <br /><br />
            <div>
                <span> Gender :</span> <br />
                <input type="radio" name="gender" value="Male" id="male" onChange={(e)=>setgender(e.target.value)} /> <label>Male</label>
                <input type="radio" name="gender" value="FeMale" id="female" onChange={(e)=>setgender(e.target.value)} /> <label>female</label>
            </div>
            <br />
            <button onClick={handlesubmit}>Submit</button>

            {/* <h1>{udata} <br />
            {subdata} <br />
            {citydata} <br />
            {maildata}
            {genderdata}</h1> */}
           { data &&
            <Task11ChildCard username={udata}
            subject={subdata}
            city={citydata}
            email={maildata}
            gender={genderdata}
            />
}
        </div>
    )
}
