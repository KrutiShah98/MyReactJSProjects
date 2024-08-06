import React, { useState } from 'react'

export default function Crud1() {
    const [name, setName] = useState("")
    const [subject, setsubject] = useState("")
    const [record, setRecord] = useState([])
    const[editindex,seteditindex]=useState(null)

    const handlesubmit = (e) => {
        e.preventDefault()

        let newRecord = { name, subject }

        if(editindex != null){
            const updaterecord=[...record]
            const fetchData=record[editindex]
        }
        setRecord([...record, newRecord])

        setName("")
        setsubject("")
    }
    const handledelete = (index) => {
        console.log(index);
        let lastrecord = record;
        console.log("before delete", lastrecord);
        lastrecord.splice(index, 1)
        // index ki ek value remove krne k liye

        console.log("...", lastrecord);

        setRecord([...lastrecord])
        // ... spread oprator
    }

    const handleedit = (index) => {
        console.log(index);
        const fetchData = record[index]
        console.log(fetchData);
        setName(fetchData.name);
        setsubject(fetchData.subject);
    }
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='name' onChange={(e) => setsubject(e.target.value)} />
                <button>click</button>
            </form>

            <table border={1}>
                <thead>
                    <th>name</th>
                    <th>subject</th>
                    <th colSpan={2}>action</th>

                </thead>
                <tbody>
                    {record.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td><button onClick={handledelete}>delete</button></td>
                                <td><button onClick={handleedit}>edit</button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
