import React, { useState } from 'react'

export default function Task2FontSize() {
    const [sizeoffont, setfontsize] = useState(12)

    const fontdecrease = () => {
        setfontsize(sizeoffont - 1)
    }

    const fontincrease = () => {
        setfontsize(sizeoffont + 1)
    }


    return (
        <div style={{ margin: "20px 50px" }}>
            <button onClick={fontdecrease}>-</button>
            <div style={{ fontSize: sizeoffont }}>change the font size</div>

            <button onClick={fontincrease}>+</button>
        </div>
    )
}
