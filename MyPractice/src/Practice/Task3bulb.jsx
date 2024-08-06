import React, { useState } from 'react'

export default function Task3bulb() {
    const [onoff, setonoff] = useState(false);

    return (
        <div style={{ margin: "20px 20px" }}>

          
            {
                onoff?
            <img src="../img/pic_bulbon.gif" alt="" />
            :
            <img src="../img/pic_bulboff.gif" alt="" />

            
}

<button onClick={()=>setonoff(!onoff)}>{onoff?'Bulb off':'Bulb on'}</button>   

        </div>
    )
}
