import React, { useEffect, useState } from 'react'

export default function Hook4() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async()=> {
        const response = await fetch("");
        const res = await response.json();
        setData(res);
    }
    return (
        <div>{data
            ? data.map((e, i) => {
                return <h1 key={i}>{e.title}</h1>
            })
            :
            <p>loading...</p>

        }
        </div>
    )}
