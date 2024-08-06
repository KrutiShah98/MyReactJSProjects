import React, { useState } from 'react';
import "../Pizza/Taskmanager.css";

export default function TaskManager() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState([]);

  const handleEdit = (index) => {
    let lastRecord = [...result];
    lastRecord.splice(index, 1);
    setResult(lastRecord);
  };

  const handleDelete = (index) => {
    let updatedResult = [...result];
    updatedResult.splice(index, 1);
    setResult(updatedResult);
  };

  const handleSubmit = () => {
    setResult([...result, { name, subject, city }]);
    setName("");
    setSubject("");
    setCity("");
  };

  return (
    
    <div >
      <div className='task-border'>
      {/* <h1>Task Manager</h1> */}
      <input  className='in' type='text' value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
      <input  className='in'type='text' value={subject} placeholder='Enter your subject' onChange={(e) => setSubject(e.target.value)} />
      <input className='in' type='text' value={city} placeholder='Enter your city' onChange={(e) => setCity(e.target.value)} />
      <button   className='bt'   onClick={handleSubmit}>submit</button>
</div>
      <table className='t1'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.city}</td>
              <td><button onClick={() => handleEdit(index)}>edit</button></td>
              <td><button onClick={() => handleDelete(index)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
