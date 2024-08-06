import React, { useState } from 'react'

export default function Crud2() {
    const [name, setname] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [editindex, seteditindex] = useState(null);

    const [recrods, setRecords] = useState([]);


    const handlesubmit = (e) => {
        e.preventDefault();
        const newRecords = { name, subject, city };

        if (editindex != null) {
            //Update
            const updateRecord = [...recrods];

            updateRecord[editindex] = newRecords;
            setRecords(updateRecord);
            // const fetchData = recrods[editindex];
            // console.log(fetchData);
            // fetchData[index] = newRecords;
        } else {
            setRecords([...recrods, newRecords]);
        }

        setname("");
        setCity("");
        setSubject("");
    };

    const handledelete = (index) => {
        console.log(index);
        const lastRecords = recrods; //fetch all records
        console.log("beforedelete", lastRecords);

        lastRecords.splice(index, 1); //remove selected index record
        console.log("---", lastRecords);
        setRecords([...lastRecords]);
    };

    const handleedit = (index) => {
        // console.log(index);
        const FetchData = recrods[index];

        setname(FetchData.name);
        setSubject(FetchData.subject);
        setCity(FetchData.city);
        seteditindex(index);
        // if()
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                {" "}
                <input
                    type="text"
                    value={name}
                    placeholder="Enter Your Name"
                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <input
                    type="text"
                    value={city}
                    placeholder="Enter Your city"
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    style={{
                        width: "150px",
                        height: "50px",
                        backgroundColor: "",
                        borderRadius: "20px",
                        background: "rgb(94,147,144)",
                        background:
                            " radial-gradient(circle, rgba(94,147,144,1) 0%, rgba(13,13,13,1) 95%)",
                        color: "white",
                        fontWeight: "900",
                    }}
                >
                    {editindex != null ? "Update" : "submit"}
                </button>
            </form>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {recrods.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleedit(index);
                                        }}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handledelete(index)}> Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}



