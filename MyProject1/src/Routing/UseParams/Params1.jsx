import React from 'react'
import { Link } from 'react-router-dom'

export default function Params1() {
    return (
        <div>
            <h1>Params1</h1>
            <Link to={"/paramspage/1"}>id send to page 2</Link>

            <br /><br />
            <Link to={"/paramspage/2"}>id send to page 2</Link>

            <br /><br />
            <Link to={"/paramspage/101/ReactJS"}>id send to page 2</Link>

        </div>
    )
}
